
"use client";

import { useState, useCallback, useEffect } from "react";
import { collection, getDocs, QueryDocumentSnapshot, DocumentData, doc, updateDoc } from "firebase/firestore";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      if (adminLoading || !isAdmin || !db) {
        if (!adminLoading) setLoading(false);
        return;
      }

      setLoading(true);
      const usersColRef = collection(db, "users");
      
      try {
        const querySnapshot = await getDocs(usersColRef);
        const usersList: AppUser[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          email: doc.data().email,
          role: doc.data().role || 'user',
          completedModules: doc.data().completedModules || [],
          completedConfessionLessons: doc.data().completedConfessionLessons || [],
          completedWorkoutLessons: doc.data().completedWorkoutLessons || [],
          completedChallengeDays: doc.data().completedChallengeDays || [],
        }));
        
        setUsers(usersList);

        if(usersList.length === 0) {
          toast({
            title: "Nenhum usuário encontrado",
            description: "Não há usuários cadastrados no momento.",
          });
        }
      } catch (error: any) {
          const permissionError = new FirestorePermissionError({
            path: usersColRef.path,
            operation: 'list',
          });
          errorEmitter.emit('permission-error', permissionError);
          setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
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

    setLoading(true);
    const userDocRef = doc(db, 'users', userId);
    try {
        await updateDoc(userDocRef, data);
        toast({
            title: "Usuário atualizado!",
            description: "Os dados do usuário foram salvos com sucesso.",
        });
        // Refetch users to show updated data
        setUsers(prevUsers => prevUsers.map(u => u.id === userId ? { ...u, ...data } : u));
    } catch (error) {
        const permissionError = new FirestorePermissionError({
            path: userDocRef.path,
            operation: 'update',
            requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
    } finally {
        setLoading(false);
    }
  }, [isAdmin, db, toast]);

  return { users, loading, updateUser };
}
