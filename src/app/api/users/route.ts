// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebaseAdmin';
import type { AppUser } from '@/lib/types';

export const runtime = 'nodejs'; // Admin SDK precisa de Node

function getBearer(req: NextRequest) {
  const h = req.headers.get('authorization') || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

export async function GET(req: NextRequest) {
  const idToken = getBearer(req);
  if (!idToken) {
    return NextResponse.json(
      { error: 'Unauthorized: Missing Authorization header (use Bearer <ID_TOKEN>)' },
      { status: 401 }
    );
  }

  try {
    // checkRevoked = true: pega casos de revogação e expiração
    const decodedToken = await adminAuth.verifyIdToken(idToken, true);

    // regra de admin (você pode migrar isso para custom claims depois)
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();
    const isAdminFromDoc = userDoc.exists && userDoc.data()?.role === 'admin';
    const isSuperUser = decodedToken.email === 'andersoncmp1@gmail.com';

    if (!isSuperUser && !isAdminFromDoc) {
      return NextResponse.json({ error: 'Forbidden: User is not an admin' }, { status: 403 });
    }

    const snap = await adminDb.collection('users').get();
    const users: AppUser[] = snap.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as AppUser)
    );

    return NextResponse.json({ users });
  } catch (e: any) {
    const code = String(e?.errorInfo?.code || e?.message || e);
    const isExpired = code.includes('auth/id-token-expired');
    const isRevoked = code.includes('auth/id-token-revoked');
    const reason = isExpired ? 'expired' : isRevoked ? 'revoked' : 'invalid';

    console.error('Error in /api/users:', code);
    return NextResponse.json(
      {
        error: 'Unauthorized: Invalid or expired token',
        reason,
        details: code,
      },
      { status: 401 }
    );
  }
}
