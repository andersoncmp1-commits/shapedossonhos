
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";
import { doc, getDoc } from "firebase/firestore";
import { getFirebase } from "@/lib/firebase";

export function useAdminAuth() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const { db } = getFirebase();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!authLoading) {
        if (!user) {
          // Se não houver usuário, ele não é admin. Não redirecione, deixe a página decidir.
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        try {
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists() && userDoc.data().role === "admin") {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
            }
        } catch (error) {
            console.error("Error checking admin status:", error);
            setIsAdmin(false);
        } finally {
            setLoading(false);
        }
      }
    };

    checkAdminStatus();
  }, [user, authLoading, router, db]);

  return { isAdmin, loading };
}
