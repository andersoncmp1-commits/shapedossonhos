
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

export function useUsers(emailToSearch?: string) {
  const { isAdmin, loading: adminLoading } = useAdminAuth();
  const { db } = getFirebase();
  const { toast } = useToast();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
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
  }, [isAdmin, adminLoading, db]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  const searchUsers = useCallback(async (email: string) => {
    if (!isAdmin || !db) return;
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
      setUsers(usersList);
      if (usersList.length === 0) {
        toast({
          variant: "destructive",
          title: "Usuário não encontrado",
          description: `Nenhum usuário encontrado com o email: ${email}`,
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
  }, [isAdmin, db, toast]);

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
        await fetchUsers(); // Refetch all users to show updated data
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
  }, [isAdmin, db, toast, fetchUsers]);

  return { users, loading, updateUser, searchUsers, refetchUsers: fetchUsers };
}
