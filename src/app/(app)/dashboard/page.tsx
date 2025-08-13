"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { modules } from "@/lib/modules";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setCompletedModules(userDoc.data().completedModules || []);
          } else {
            // Create user document if it doesn't exist
            await setDoc(userDocRef, { email: user.email, completedModules: [] });
          }
        } catch (error) {
          console.error("Error fetching user progress: ", error);
          toast({
            variant: "destructive",
            title: "Erro ao buscar progresso",
            description: "Não foi possível carregar seu progresso. Tente recarregar a página.",
          });
        } finally {
            setLoading(false);
        }
      }
    };

    fetchProgress();
  }, [user, toast]);
  
  const handleCompleteModule = async (moduleId: string) => {
    if (!user) return;
    
    const userDocRef = doc(db, "users", user.uid);
    const isCompleted = completedModules.includes(moduleId);

    try {
        if (isCompleted) {
            // Remove the module ID from the array
            await updateDoc(userDocRef, {
                completedModules: arrayRemove(moduleId)
            });
            setCompletedModules(prev => prev.filter(id => id !== moduleId));
            toast({
                title: "Módulo desmarcado",
                description: `O módulo "${modules.find(m => m.id === moduleId)?.title}" foi marcado como não concluído.`,
            });
        } else {
            // Add the new module ID to the array
            await updateDoc(userDocRef, {
                completedModules: arrayUnion(moduleId)
            });
            setCompletedModules(prev => [...prev, moduleId]);
            toast({
                title: "Progresso salvo!",
                description: `Módulo "${modules.find(m => m.id === moduleId)?.title}" marcado como concluído.`,
            });
        }

    } catch (error) {
        console.error("Error updating progress: ", error);
        toast({
            variant: "destructive",
            title: "Erro",
            description: "Não foi possível salvar seu progresso.",
        });
    }
  };

  if (loading) {
    return (
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight mb-8">Seu Painel</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="p-6 rounded-lg bg-card">
                        <Skeleton className="h-8 w-8 mb-4 rounded-full" />
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-10 w-full mt-6" />
                    </div>
                ))}
            </div>
        </div>
    );
  }

  return (
    <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">Seu Painel</h1>
        <p className="text-muted-foreground font-display mb-8">Continue de onde parou e avance em sua jornada.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(module => (
                <ModuleCard 
                    key={module.id} 
                    module={module}
                    isCompleted={completedModules.includes(module.id)}
                    onComplete={handleCompleteModule}
                />
            ))}
        </div>
    </div>
  );
}
