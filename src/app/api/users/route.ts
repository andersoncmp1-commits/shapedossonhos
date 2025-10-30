// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { AppUser } from '@/lib/types';
import { serializeFirestore } from '@/lib/serializeFirestore';

export const runtime = 'nodejs'; // Admin SDK precisa de Node

// A importação agora está dentro de um try/catch para lidar com erros de inicialização
async function getFirebaseAdmin() {
  const { adminAuth, adminDb } = await import('@/lib/firebaseAdmin');
  return { adminAuth, adminDb };
}


function getBearer(req: NextRequest) {
  const h = req.headers.get('authorization') || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1] : null;
}

export async function GET(req: NextRequest) {
  const debug = req.nextUrl.searchParams.get('debug') === '1';

  try {
    const { adminAuth, adminDb } = await getFirebaseAdmin();
    const idToken = getBearer(req);
    if (!idToken) {
      return NextResponse.json(
        { error: 'Unauthorized: Missing Authorization header (Bearer <ID_TOKEN>)' },
        { status: 401 }
      );
    }

    const decoded = await adminAuth.verifyIdToken(idToken, true);

    // regra admin atual
    const me = await adminDb.collection('users').doc(decoded.uid).get();
    const isAdminFromDoc = me.exists && me.data()?.role === 'admin';
    const isSuperUser = decoded.email === 'andersoncmp1@gmail.com';
    if (!isSuperUser && !isAdminFromDoc) {
      return NextResponse.json({ error: 'Forbidden: User is not an admin' }, { status: 403 });
    }

    // Smoke test: se pedir ?debug=1, NÃO toca no Firestore de lista
    if (debug) {
      return NextResponse.json({ ok: true, whoami: decoded.uid }, { status: 200 });
    }

    const snap = await adminDb.collection('users').get();

    const users: AppUser[] = snap.docs.map((doc) => {
      const raw = doc.data();
      const safe = serializeFirestore(raw);
      return { id: doc.id, ...safe } as AppUser;
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (e: any) {
    const details = e?.stack || e?.message || String(e);
    // Log completo no server
    console.error('Error in /api/users:', details);

    // Em dev, devolva detalhes no JSON pra você ver no console do browser
    const payload =
      process.env.NODE_ENV === 'production'
        ? { error: 'Internal Server Error' }
        : { error: 'Internal Server Error', details };

    return NextResponse.json(payload, { status: 500 });
  }
}
