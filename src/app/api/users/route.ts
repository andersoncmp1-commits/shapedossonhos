
'use server';

import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { cookies } from 'next/headers';

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


async function verifyAdmin(idToken: string): Promise<boolean> {
    try {
        const decodedToken = await adminAuth.verifyIdToken(idToken);
        const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();

        if (userDoc.exists && userDoc.data()?.role === 'admin') {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error verifying admin token:", error);
        return false;
    }
}


export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    const idToken = cookieStore.get('firebaseIdToken')?.value;

    if (!idToken) {
        return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
    }

    const isAdmin = await verifyAdmin(idToken);
    if (!isAdmin) {
        return NextResponse.json({ error: 'Unauthorized: Not an admin' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ error: 'Email query parameter is required' }, { status: 400 });
    }

    try {
        const usersRef = adminDb.collection('users');
        const snapshot = await usersRef.where('email', '==', email).get();

        if (snapshot.empty) {
            return NextResponse.json({ users: [] }, { status: 200 });
        }

        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return NextResponse.json({ users }, { status: 200 });

    } catch (error) {
        console.error('Error fetching user by email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
