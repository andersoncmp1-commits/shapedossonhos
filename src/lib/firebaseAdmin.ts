import * as admin from 'firebase-admin';

declare global {
  // eslint-disable-next-line no-var
  var __firebaseAdminApp__: admin.app.App | undefined;
}

function loadServiceAccount(): {
  projectId: string;
  clientEmail: string;
  privateKey: string;
} {
  // 1) JSON completo (base64)
  const saB64 = process.env.FIREBASE_SERVICE_ACCOUNT_JSON_BASE64;
  if (saB64) {
    const json = JSON.parse(Buffer.from(saB64, 'base64').toString('utf8'));
    return {
      projectId: json.project_id,
      clientEmail: json.client_email,
      privateKey: json.private_key,
    };
  }

  // 2) GOOGLE_APPLICATION_CREDENTIALS -> arquivo JSON
  const gac = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (gac) {
    // Node >=18 tem fs/promises nativo
    const fs = require('fs');
    const raw = fs.readFileSync(gac, 'utf8');
    const json = JSON.parse(raw);
    return {
      projectId: json.project_id,
      clientEmail: json.client_email,
      privateKey: json.private_key,
    };
  }

  // 3) Campos separados (com PRIVATE_KEY_BASE64)
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const pkB64 = process.env.FIREBASE_PRIVATE_KEY_BASE64;

  if (projectId && clientEmail && pkB64) {
    return {
      projectId,
      clientEmail,
      privateKey: Buffer.from(pkB64, 'base64').toString('utf8'),
    };
  }

  // 4) Campos separados (PRIVATE_KEY com \n)
  const pk = process.env.FIREBASE_PRIVATE_KEY;
  if (projectId && clientEmail && pk) {
    return {
      projectId,
      clientEmail,
      privateKey: pk.replace(/\\n/g, '\n'),
    };
  }

  // Se chegou aqui, faltou coisa:
  const missing = [
    !process.env.FIREBASE_SERVICE_ACCOUNT_JSON_BASE64 && 'FIREBASE_SERVICE_ACCOUNT_JSON_BASE64',
    !process.env.GOOGLE_APPLICATION_CREDENTIALS && 'GOOGLE_APPLICATION_CREDENTIALS',
    !process.env.FIREBASE_PROJECT_ID && 'FIREBASE_PROJECT_ID',
    !process.env.FIREBASE_CLIENT_EMAIL && 'FIREBASE_CLIENT_EMAIL',
    !(process.env.FIREBASE_PRIVATE_KEY || process.env.FIREBASE_PRIVATE_KEY_BASE64) &&
      'FIREBASE_PRIVATE_KEY(_BASE64)',
  ]
    .filter(Boolean)
    .join(', ');

  throw new Error(`Missing Firebase Admin envs: ${missing}`);
}

function initAdminApp(): admin.app.App {
  if (global.__firebaseAdminApp__) return global.__firebaseAdminApp__;
  const { projectId, clientEmail, privateKey } = loadServiceAccount();

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
