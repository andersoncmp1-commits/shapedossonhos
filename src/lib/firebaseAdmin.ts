// src/lib/firebaseAdmin.ts
import * as admin from 'firebase-admin';

declare global { var __firebaseAdminApp__: admin.app.App | undefined; }

function initAdminApp(): admin.app.App {
  if (global.__firebaseAdminApp__) return global.__firebaseAdminApp__;

  const projectId = process.env.FIREBASE_PROJECT_ID!;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
  const pkRaw = process.env.FIREBASE_PRIVATE_KEY;
  const pkB64 = process.env.FIREBASE_PRIVATE_KEY_BASE64;

  if (!projectId || !clientEmail || (!pkRaw && !pkB64)) {
    throw new Error('Missing Firebase Admin envs: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY(_BASE64)');
  }

  const privateKey = pkB64
    ? Buffer.from(pkB64, 'base64').toString('utf8')
    : pkRaw!.replace(/\\n/g, '\n');

  const app =
    admin.apps[0] ??
    admin.initializeApp({
      credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
    });

  global.__firebaseAdminApp__ = app;
  return app;
}

const adminApp = initAdminApp();
export const adminAuth = admin.auth(adminApp);
export const adminDb = admin.firestore(adminApp);
export { adminApp };
