
import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import type { AppUser } from "@/lib/types";

// Função para garantir a inicialização singleton do Firebase Admin
function initializeFirebaseAdmin() {
  const apps = getApps();
  if (apps.length) {
    const app = apps[0];
    return { app, adminAuth: getAuth(app), adminDb: getFirestore(app) };
  }
  const app = initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
  return { app, adminAuth: getAuth(app), adminDb: getFirestore(app) };
}

export async function GET(req: NextRequest) {
  const { adminAuth, adminDb } = initializeFirebaseAdmin();

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
  }
  
  const idToken = authHeader.split('Bearer ')[1];
  if (!idToken) {
    return NextResponse.json({ error: 'Unauthorized: Malformed token' }, { status: 401 });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const userDocRef = adminDb.collection('users').doc(decodedToken.uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
        return NextResponse.json({ error: 'Forbidden: User document not found.' }, { status: 403 });
    }

    if (userDoc.data()?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden: User is not an admin' }, { status: 403 });
    }

    const usersSnapshot = await adminDb.collection('users').get();
    const users: AppUser[] = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    } as AppUser));

    return NextResponse.json({ users });

  } catch (error: any) {
    console.error("Error verifying token in /api/users:", error);
    // Garante que qualquer erro na verificação do token retorne uma resposta JSON válida.
    return NextResponse.json({ error: 'Unauthorized: Invalid or expired token' }, { status: 401 });
  }
}
