'use server';

import {NextRequest, NextResponse} from 'next/server';
import {initializeApp, getApp, getApps} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth';
import {getFirestore} from 'firebase-admin/firestore';
import {z} from 'zod';

// --- INICIALIZAÇÃO DO FIREBASE ADMIN ---
// Isso só pode ser executado no servidor
if (!getApps().length) {
  initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // As credenciais são detectadas automaticamente no ambiente do App Hosting
  });
}

const auth = getAuth();
const db = getFirestore();

// --- VALIDAÇÃO DO INPUT ---
// Define o formato esperado dos dados que o webhook receberá
const WebhookPayloadSchema = z.object({
  customer_name: z.string(),
  customer_email: z.string().email(),
  // Você pode adicionar outros campos que sua plataforma de checkout envia,
  // como product_id, status, etc.
});

/**
 * Endpoint do Webhook para processar compras.
 * URL: /api/webhook
 */
export async function POST(req: NextRequest) {
  try {
    // --- VERIFICAÇÃO DE SEGURANÇA (IMPORTANTE!) ---
    // É crucial verificar se a requisição veio mesmo da sua plataforma de checkout.
    // Cada plataforma tem um método (ex: um token no header).
    const secret = req.headers.get('x-webhook-secret');
    if (secret !== process.env.WEBHOOK_SECRET) {
      console.warn('Tentativa de acesso não autorizado ao webhook.');
      return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }

    const body = await req.json();

    // Valida os dados recebidos
    const payload = WebhookPayloadSchema.parse(body);
    const {customer_email: email} = payload;

    let user;
    let wasUserCreated = false;

    // --- LÓGICA DE CRIAÇÃO DE USUÁRIO ---
    try {
      // 1. Tenta encontrar um usuário existente pelo email
      user = await auth.getUserByEmail(email);
      console.log(`Usuário existente encontrado para o email: ${email}`);
    } catch (error: any) {
      // 2. Se não encontrar (código 'auth/user-not-found'), cria um novo
      if (error.code === 'auth/user-not-found') {
        console.log(`Nenhum usuário encontrado. Criando novo usuário para: ${email}`);
        user = await auth.createUser({
          email: email,
          emailVerified: true, // O email vem da plataforma de pagamento, então podemos confiar
        });
        wasUserCreated = true;
        console.log(`Usuário criado com sucesso com UID: ${user.uid}`);
      } else {
        // Outros erros durante a busca do usuário
        throw error;
      }
    }

    // --- PROVISIONAMENTO DE ACESSO ---
    // Cria ou atualiza o documento do usuário no Firestore
    const userDocRef = db.collection('users').doc(user.uid);
    await userDocRef.set(
      {
        email: user.email,
        // Inicializa o progresso se for um novo usuário
        completedModules: [], 
        // Aqui você poderia adicionar os cursos comprados. Ex:
        // purchasedCourses: FieldValue.arrayUnion('quaresma-sao-miguel')
      },
      {merge: true} // 'merge: true' evita sobrescrever dados existentes
    );
    console.log(`Documento do usuário no Firestore criado/atualizado para UID: ${user.uid}`);

    // --- ENVIO DE EMAIL DE BOAS-VINDAS / REDEFINIÇÃO DE SENHA ---
    // Se o usuário foi criado agora, envie um link para ele definir a senha
    if (wasUserCreated) {
      const passwordResetLink = await auth.generatePasswordResetLink(email);
      // TODO: Enviar este link por email para o usuário.
      // Você precisará de um serviço de envio de email como SendGrid, Resend, etc.
      console.log(`IMPORTANTE: Envie este link para o usuário definir a senha: ${passwordResetLink}`);
    }

    return NextResponse.json({
      success: true,
      message: `Usuário ${wasUserCreated ? 'criado' : 'encontrado'} e acesso provisionado.`,
      userId: user.uid,
    });

  } catch (error) {
    console.error('Erro no processamento do webhook:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({error: 'Invalid payload', details: error.errors}, {status: 400});
    }
    return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
  }
}
