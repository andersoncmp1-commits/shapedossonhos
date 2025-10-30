
"use client";

import { useState, useCallback, useEffect } from "react";
import { collection, getDocs, QueryDocumentSnapshot, DocumentData, doc, updateDoc, query, where } from "firebase/firestore";
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
    if (adminLoading || !isAdmin || !db || !email) {
        setUsers([]);
        return;
    }

    setLoading(true);
    const usersColRef = collection(db, "users");
    const q = query(usersColRef, where("email", "==", email));
    
    try {
      const querySnapshot = await getDocs(q);
      const usersList: AppUser[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        email: doc.data().email,
        role: doc.data().role || 'user',
        completedModules: doc.data().completedModules || [],
        completedConfessionLessons: doc.data().completedConfessionLessons || [],
        completedWorkoutLessons: doc.data().completedWorkoutLessons || [],
        completedChallengeDays: doc.data().completedChallengeDays || [],
      }));
      
      if (usersList.length === 0) {
        toast({
            variant: "destructive",
            title: "Usuário não encontrado",
            description: "Nenhum usuário corresponde ao e-mail fornecido.",
        });
      }
      setUsers(usersList);

    } catch (error: any) {
        const permissionError = new FirestorePermissionError({
          path: usersColRef.path,
          operation: 'list', // A 'where' query is a 'list' operation in terms of rules
        });
        errorEmitter.emit('permission-error', permissionError);
        setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [isAdmin, adminLoading, db, toast]);

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

  const refetchUsers = useCallback((email: string) => {
    searchUsers(email);
  }, [searchUsers]);

  return { users, loading, updateUser, searchUsers, refetchUsers };
}
