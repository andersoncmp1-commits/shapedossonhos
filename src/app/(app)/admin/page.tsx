
import { cookies } from 'next/headers';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";
import type { AppUser } from "@/hooks/useUsers";
import { AdminUserEditor } from './AdminUserEditor';
import { Header } from '@/components/layout/Header';

// --- INICIALIZAÇÃO DO FIREBASE ADMIN ---
let adminApp: App;
let adminAuth: ReturnType<typeof getAuth>;
let adminDb: Firestore;

if (!getApps().length) {
  adminApp = initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
} else {
  adminApp = getApps()[0];
}

adminAuth = getAuth(adminApp);
adminDb = getFirestore(adminApp);

async function verifyAdminAndFetchUsers(): Promise<{ isAdmin: boolean; users: AppUser[] }> {
    const cookieStore = cookies();
    const idToken = cookieStore.get('firebaseIdToken')?.value;

    if (!idToken) {
        return { isAdmin: false, users: [] };
    }

    try {
        const decodedToken = await adminAuth.verifyIdToken(idToken);
        const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();

        if (userDoc.exists && userDoc.data()?.role === 'admin') {
            // Se for admin, buscar todos os usuários
            const usersSnapshot = await adminDb.collection('users').get();
            const users = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as AppUser));
            return { isAdmin: true, users };
        }
        
        return { isAdmin: false, users: [] };

    } catch (error) {
        console.error("Error verifying admin token or fetching users:", error);
        return { isAdmin: false, users: [] };
    }
}


export default async function AdminPage() {
  const { isAdmin, users } = await verifyAdminAndFetchUsers();

  const content = isAdmin ? (
      <Card>
        <CardHeader>
          <CardTitle>Usuários</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Dias de Desafio</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>{user.role ?? 'user'}</TableCell>
                      <TableCell>{user.completedChallengeDays?.length || 0}</TableCell>
                      <TableCell className="text-right">
                        <AdminUserEditor user={user} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center h-24">
                      Nenhum usuário encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
        </CardContent>
      </Card>
  ) : (
      <Alert variant="destructive">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Acesso Negado</AlertTitle>
        <AlertDescription>
            Você não tem permissão para visualizar esta página. Se você acredita que isso é um erro, por favor, entre em contato com o suporte.
        </AlertDescription>
    </Alert>
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-3xl font-bold tracking-tight mb-8">Painel do Administrador</h1>
          {content}
        </div>
      </main>
    </div>
  );
}
