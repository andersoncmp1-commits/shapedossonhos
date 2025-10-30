"use client";

import { useState, useCallback } from "react";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { getFirebase } from "@/lib/firebase";
import { useToast } from "./use-toast";
import { FirestorePermissionError } from "@/lib/errors";
import { errorEmitter } from "@/lib/error-emitter";
import { useAdminAuth } from "./useAdminAuth";

interface AppUser {
    id: string;
    email: string;
    completedModules?: string[];
    completedConfessionLessons?: string[];
    completedWorkoutLessons?: string[];
    completedChallengeDays?: string[];
}

export function useUsers() {
  const { isAdmin, loading: adminLoading } = useAdminAuth();
  const { db } = getFirebase();
  const { toast } = useToast();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = useCallback(async (emailToSearch: string) => {
    if (adminLoading) {
      // Aguarde a verificação do admin terminar
      return;
    }

    if (isAdmin && db && emailToSearch) {
      setLoading(true);
      setUsers([]);
      const usersColRef = collection(db, "users");
      const q = query(usersColRef, where("email", "==", emailToSearch));
      
      try {
        const querySnapshot = await getDocs(q);
        const usersList = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          email: doc.data().email,
          completedModules: doc.data().completedModules || [],
          completedConfessionLessons: doc.data().completedConfessionLessons || [],
          completedWorkoutLessons: doc.data().completedWorkoutLessons || [],
          completedChallengeDays: doc.data().completedChallengeDays || [],
        }));
        
        setUsers(usersList);

        if(usersList.length === 0) {
          toast({
            title: "Nenhum usuário encontrado",
            description: `Nenhum usuário com o email "${emailToSearch}" foi localizado.`,
          });
        }
      } catch (error: any) {
          const permissionError = new FirestorePermissionError({
            path: usersColRef.path,
            operation: 'list',
          });
          errorEmitter.emit('permission-error', permissionError);
      } finally {
        setLoading(false);
      }
    } else {
      setUsers([]);
       if (!emailToSearch) {
        toast({
            variant: "destructive",
            title: "Campo obrigatório",
            description: "Por favor, digite um email para realizar a busca.",
        });
      } else if (!isAdmin) {
         toast({
            variant: "destructive",
            title: "Acesso Negado",
            description: "Você não tem permissão para realizar esta busca.",
        });
      }
    }
  }, [isAdmin, adminLoading, db, toast]);

  return { users, loading, searchUsers };
}
