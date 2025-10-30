import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, App, ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import type { AppUser } from "@/hooks/useUsers";

let adminApp: App;
let adminAuth: ReturnType<typeof getAuth>;
let adminDb: Firestore;

// A estrutura da sua Service Account
const serviceAccount: ServiceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // Substitua `\n` por `\n` literalmente no valor da sua variável de ambiente
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

if (!getApps().length) {
  adminApp = initializeApp({
    credential: {
        projectId: serviceAccount.projectId,
        clientEmail: serviceAccount.clientEmail,
        privateKey: serviceAccount.privateKey,
    }
  });
} else {
  adminApp = getApps()[0];
}

adminAuth = getAuth(adminApp);
adminDb = getFirestore(adminApp);

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
    }
    
    const idToken = authHeader.split('Bearer ')[1];
    if (!idToken) {
      return NextResponse.json({ error: 'Unauthorized: Malformed token' }, { status: 401 });
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();

    if (!userDoc.exists || userDoc.data()?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden: User is not an admin' }, { status: 403 });
    }

    const usersSnapshot = await adminDb.collection('users').get();
    const users: AppUser[] = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    } as AppUser));

    return NextResponse.json({ users });

  } catch (error: any) {
    console.error("Error in /api/users:", error);
    if (error.code === 'auth/id-token-expired' || error.code === 'auth/argument-error') {
         return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
