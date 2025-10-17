
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, memoryLocalCache, CACHE_SIZE_UNLIMITED, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

// Initialize Firestore with memory cache for more reliable data fetching on production
const db = initializeFirestore(app, {
  localCache: memoryLocalCache({
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  })
});

// Conecta ao emulador do Firestore em ambiente de desenvolvimento
if (typeof window !== 'undefined' && window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, 'localhost', 8080);
}

export { db };
