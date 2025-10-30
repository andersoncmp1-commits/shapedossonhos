"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
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

export function useUsers() {
  const { user } = useAuth();
  const { db } = getFirebase();
  const { toast } = useToast();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      if (user && db && user.email === "andersoncmp1@gmail.com") {
        setLoading(true);
        const usersColRef = collection(db, "users");
        try {
          const querySnapshot = await getDocs(usersColRef);
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
            if (error.code === 'permission-denied') {
                const permissionError = new FirestorePermissionError({
                  path: usersColRef.path,
                  operation: 'list',
                });
                errorEmitter.emit('permission-error', permissionError);
                 toast({
                    variant: "destructive",
                    title: "Erro de Permissão",
                    description: "Você não tem permissão para listar os usuários. Verifique as regras de segurança do Firestore.",
                });
            } else {
                 console.error("Error fetching users: ", error);
                toast({
                    variant: "destructive",
                    title: "Erro ao buscar usuários",
                    description: "Não foi possível carregar a lista de usuários.",
                });
            }
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user, db, toast]);

  return { users, loading };
}