
"use server";

import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

const db = getFirestore();

export async function seedAdminData() {
  const adminEmail = "andersoncmp1@gmail.com";
  // Este UID é um exemplo e será diferente no ambiente real.
  // A função de segurança usará o email para verificar o admin.
  const adminUid = "Qd4l3E5o4Zf7Y8g9H0j1k2L3m4N5p6Q7"; 

  const adminRef = db.collection("admins").doc(adminUid);
  const adminDoc = await adminRef.get();

  if (!adminDoc.exists) {
    console.log(`Criando documento de administrador para ${adminEmail}...`);
    await adminRef.set({
      email: adminEmail,
      role: "admin",
    });
    console.log("Documento de administrador criado com sucesso.");
  } else {
    console.log("Documento de administrador já existe.");
  }
}
