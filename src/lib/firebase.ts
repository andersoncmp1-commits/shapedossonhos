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
    app = getApp();
    auth = getAuth(app);
    // Para db, precisamos ter certeza de que ele foi inicializado com cache,
    // então reutilizamos a instância se já existir ou criamos uma nova.
    // Esta lógica pode precisar de ajuste dependendo de como `db` é exposto.
    // Por enquanto, a lógica assume que `db` será inicializado uma vez com `auth`.
    if (!db) {
       db = initializeFirestore(app, {
         localCache: memoryLocalCache({ cacheSizeBytes: CACHE_SIZE_UNLIMITED })
       });
       if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
          connectFirestoreEmulator(db, 'localhost', 8080);
       }
    }
  }
  return { app, auth, db };
}

export function getFirebase() {
  return initializeFirebase();
}
