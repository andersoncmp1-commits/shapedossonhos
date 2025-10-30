// src/app/api/admin/health/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const ok = {
    FIREBASE_PROJECT_ID: !!process.env.FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL: !!process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY: !!process.env.FIREBASE_PRIVATE_KEY,
    FIREBASE_PRIVATE_KEY_BASE64: !!process.env.FIREBASE_PRIVATE_KEY_BASE64,
    NODE_ENV: process.env.NODE_ENV,
  };
  return NextResponse.json(ok);
}
