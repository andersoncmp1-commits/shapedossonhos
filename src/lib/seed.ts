
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
  // NOTE: This UID is a placeholder. In a real scenario, you would get this
  // from the Firebase Auth user record after the admin signs up.
  // The security rules will primarily rely on checking the existence of an
  // admin document corresponding to the requestor's UID.
  const adminUid = "Qd4l3E5o4Zf7Y8g9H0j1k2L3m4N5p6Q7"; 

  const adminRef = db.collection("admins").doc(adminUid);
  const adminDoc = await adminRef.get();

  if (!adminDoc.exists) {
    console.log(`Creating administrator document for ${adminEmail}...`);
    await adminRef.set({
      email: adminEmail,
      role: "admin",
    });
    console.log("Administrator document created successfully.");
  } else {
    console.log("Administrator document already exists.");
  }
}
