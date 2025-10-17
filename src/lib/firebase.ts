import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, connectAuthEmulator, type Auth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, initializeFirestore, memoryLocalCache, CACHE_SIZE_UNLIMITED, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

function initializeFirebase() {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    // Use initializeFirestore para mais controle, especialmente com o cache de memória.
    db = initializeFirestore(app, {
      localCache: memoryLocalCache({ cacheSizeBytes: CACHE_SIZE_UNLIMITED })
    });

    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.log('Connecting to Firebase emulators...');
      connectFirestoreEmulator(db, 'localhost', 8080);
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      console.log('Connected to Firebase emulators.');
    }
  } else {
    // Se o app já existe, apenas obtenha as instâncias.
    // A conexão com o emulador já terá sido feita na primeira chamada.
    app = getApp();
    auth = getAuth(app);
    db = getFirestore(app);
  }
  return { app, auth, db };
}

export function getFirebase() {
  // A função initializeFirebase agora gerencia a idempotência.
  return initializeFirebase();
}
