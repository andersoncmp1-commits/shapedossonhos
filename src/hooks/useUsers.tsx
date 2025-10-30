
"use client";

import { useState, useCallback } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { getFirebase } from "@/lib/firebase";
import { useToast } from "./use-toast";
import { FirestorePermissionError } from "@/lib/errors";
import { errorEmitter } from "@/lib/error-emitter";
import { useAdminAuth } from "./useAdminAuth";

export interface AppUser {
    id: string;
    email: string;
    role?: 'admin' | 'user';
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

  const searchUsers = useCallback(async (email: string) => {
    if (adminLoading || !isAdmin || !email) {
        setUsers([]);
        return;
    }

    setLoading(true);
    try {
        const response = await fetch(`/api/users?email=${encodeURIComponent(email)}`);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Falha ao buscar usuário.');
        }

        const data = await response.json();
        const usersList = data.users;

        if (usersList.length === 0) {
            toast({
                variant: "destructive",
                title: "Usuário não encontrado",
                description: "Nenhum usuário corresponde ao e-mail fornecido.",
            });
        }
        setUsers(usersList);

    } catch (error: any) {
        toast({
            variant: "destructive",
            title: "Erro ao buscar usuário",
            description: error.message || "Ocorreu um erro inesperado.",
        });
        setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [isAdmin, adminLoading, toast]);

  const clearUsers = useCallback(() => {
    setUsers([]);
  }, []);

  const updateUser = useCallback(async (userId: string, data: Partial<Omit<AppUser, 'id'>>) => {
    if (!isAdmin || !db) {
        toast({
            variant: "destructive",
            title: "Acesso Negado",
            description: "Você não tem permissão para realizar esta ação.",
        });
        return;
    }

    const userDocRef = doc(db, 'users', userId);
    try {
        await updateDoc(userDocRef, data);
        toast({
            title: "Usuário atualizado!",
            description: "Os dados do usuário foram salvos com sucesso.",
        });
    } catch (error) {
        const permissionError = new FirestorePermissionError({
            path: userDocRef.path,
            operation: 'update',
            requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
    }
  }, [isAdmin, db, toast]);


  return { users, loading, updateUser, searchUsers, clearUsers };
}
