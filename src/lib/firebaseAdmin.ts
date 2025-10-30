// src/lib/firebaseAdmin.ts
import * as admin from 'firebase-admin';

declare global {
  // evita múltiplas inicializações em dev/hot-reload
  // eslint-disable-next-line no-var
  var __firebaseAdminApp__: admin.app.App | undefined;
}

function initAdminApp(): admin.app.App {
  if (global.__firebaseAdminApp__) return global.__firebaseAdminApp__;

  // Use envs de servidor (NÃO use NEXT_PUBLIC_* aqui)
  const projectId = process.env.FIREBASE_PROJECT_ID!;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
  const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY!;

  if (!projectId || !clientEmail || !privateKeyRaw) {
    throw new Error(
      'Missing Firebase Admin envs: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY'
    );
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

  const app =
    admin.apps[0] ??
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });

  global.__firebaseAdminApp__ = app;
  return app;
}

const adminApp = initAdminApp();

export const adminAuth = admin.auth(adminApp);
export const adminDb = admin.firestore(adminApp);
// exporte se precisar em outros pontos também
export { adminApp };
