"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, where, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { getFirebase } from "@/lib/firebase";
import { useAuth } from "./useAuth";
import { useToast } from "./use-toast";
import { errorEmitter } from "@/lib/error-emitter";
import { FirestorePermissionError } from "@/lib/errors";

interface AppUser {
    id: string;
    email: string;
    completedModules?: string[];
    completedConfessionLessons?: string[];
    completedWorkoutLessons?: string[];
    completedChallengeDays?: string[];
}

export function useUsers(emailToSearch: string) {
  const { user } = useAuth();
  const { db } = getFirebase();
  const { toast } = useToast();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (user && db && user.email === "andersoncmp1@gmail.com" && emailToSearch) {
        setLoading(true);
        setUsers([]); // Limpa os resultados anteriores
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
        } catch (error: any) {
            // A consulta 'where' é permitida por regras padrão se o usuário estiver autenticado.
            // O erro 'list' não deve mais ocorrer, mas mantemos o tratamento para outros erros.
            console.error("Error fetching users: ", error);
            toast({
                variant: "destructive",
                title: "Erro ao buscar usuário",
                description: "Não foi possível realizar a busca. Verifique as permissões ou tente novamente.",
            });
        } finally {
          setLoading(false);
        }
      } else {
        // Não faz nada se não houver um email para buscar
        setUsers([]);
      }
    };

    fetchUsers();
  }, [user, db, toast, emailToSearch]);

  return { users, loading };
}
