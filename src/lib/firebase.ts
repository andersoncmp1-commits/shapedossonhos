
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

// Variáveis para armazenar as instâncias do Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let emulatorsConnected = false;

// Função para inicializar o Firebase (se ainda não foi inicializado)
function initializeFirebase() {
    if (getApps().length) {
        app = getApp();
        auth = getAuth(app);
        db = getFirestore(app);
    } else {
        // Inicializa o Firebase App
        app = initializeApp(firebaseConfig);
        
        // Inicializa Auth e Firestore
        auth = getAuth(app);
        db = initializeFirestore(app, {
            localCache: memoryLocalCache({ cacheSizeBytes: CACHE_SIZE_UNLIMITED })
        });
    }

    // Conecta aos emuladores incondicionalmente no ambiente de desenvolvimento.
    // A verificação de hostname foi removida pois o ambiente não é 'localhost'.
    // Esta verificação garante que a conexão só ocorra uma vez.
    if (!emulatorsConnected) {
        console.log('Connecting to Firebase emulators...');
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
        emulatorsConnected = true;
        console.log('Connected to Firebase emulators.');
    }
}

// Chame a função de inicialização uma vez para configurar tudo.
initializeFirebase();

// Função que os componentes usarão para obter as instâncias já configuradas
export function getFirebase() {
  // Garante a inicialização antes de retornar as instâncias
  // Isso é um fallback, mas a chamada acima deve resolver.
  if (!app) {
    initializeFirebase();
  }
  return { app, auth, db };
}

