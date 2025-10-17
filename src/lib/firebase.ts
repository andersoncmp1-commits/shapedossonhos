
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, connectAuthEmulator, type Auth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicialização Singleton do Firebase
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

// Conectar aos emuladores apenas em ambiente de desenvolvimento
if (process.env.NODE_ENV === 'development') {
    // O SDK do Firebase gerencia a reconexão para nós.
    // Usar 'localhost' é mais robusto para ambientes com port forwarding.
    try {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
        connectFirestoreEmulator(db, 'localhost', 8080);
    } catch (error) {
        // Isso pode acontecer se o Fast Refresh tentar reconectar.
        // O SDK já está conectado, então podemos ignorar o erro com segurança.
        // console.log("Emulators already connected.");
    }
}

// Exporta uma função getFirebase para consistência, embora as instâncias já estejam inicializadas.
export function getFirebase() {
  return { app, auth, db };
}
