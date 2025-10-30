// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { AppUser } from '@/lib/types';

export const runtime = 'nodejs'; // Admin SDK precisa de Node

function getBearer(req: NextRequest) {
  const h = req.headers.get('authorization') || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

export async function GET(req: NextRequest) {
  try {
    // A importação é feita aqui dentro para garantir que o erro de inicialização seja capturado
    const { adminAuth, adminDb } = await import('@/lib/firebaseAdmin');

    const idToken = getBearer(req);
    if (!idToken) {
      return NextResponse.json(
        { error: 'Unauthorized: Missing Authorization header (use Bearer <ID_TOKEN>)' },
        { status: 401 }
      );
    }

    try {
      const decodedToken = await adminAuth.verifyIdToken(idToken, true);
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

      console.error('Error in /api/users token verification:', code);
      return NextResponse.json(
        {
          error: 'Unauthorized: Invalid or expired token',
          reason,
          details: code,
        },
        { status: 401 }
      );
    }
  } catch (e: any) {
     console.error('CRITICAL: Failed to initialize Firebase Admin SDK or other server error:', e.message);
     return NextResponse.json(
       {
         error: 'Internal Server Error',
         details: 'Failed to initialize server components. Check server logs for details on missing environment variables or other initialization errors.',
         code: e.code || 'SDK_INIT_FAILURE'
       },
       { status: 500 }
     );
  }
}
