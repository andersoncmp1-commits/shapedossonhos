
import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, getApp, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import type { AppUser } from "@/lib/types";

let adminApp: App;
let adminAuth: Auth;
let adminDb: Firestore;

function initializeFirebaseAdmin() {
  if (!getApps().length) {
    adminApp = initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } else {
    adminApp = getApp();
  }
  adminAuth = getAuth(adminApp);
  adminDb = getFirestore(adminApp);
}

initializeFirebaseAdmin();

export async function GET(req: NextRequest) {
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
    
    // Concede acesso direto se for o superusuário
    if (decodedToken.email === 'andersoncmp1@gmail.com') {
        const usersSnapshot = await adminDb.collection('users').get();
        const users: AppUser[] = usersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        } as AppUser));
        return NextResponse.json({ users });
    }

    const userDocRef = adminDb.collection('users').doc(decodedToken.uid);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists()) {
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
    return NextResponse.json({ 
        error: 'Unauthorized: Invalid or expired token', 
        details: error.message 
    }, { status: 401 });
  }
}
