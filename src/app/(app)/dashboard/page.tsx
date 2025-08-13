"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { doc, getDoc, setDoc, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { modules } from "@/lib/modules";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CourseDetailPage() {
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
            await updateDoc(userDocRef, {
                completedModules: arrayRemove(moduleId)
            });
            setCompletedModules(prev => prev.filter(id => id !== moduleId));
            toast({
                title: "Módulo desmarcado",
                description: `O módulo "${modules.find(m => m.id === moduleId)?.title}" foi marcado como não concluído.`,
            });
        } else {
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

  const courseTitle = "Guia para Quaresma de São Miguel Arcanjo";

  if (loading) {
    return (
        <div>
            <div className="mb-8">
              <Button asChild variant="ghost">
                <Link href="/courses">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Cursos
                </Link>
              </Button>
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">{courseTitle}</h1>
            <p className="text-muted-foreground font-display mb-8">Acompanhe seu progresso nos módulos abaixo.</p>

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
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/courses">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Cursos
                </Link>
            </Button>
        </div>
        <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">{courseTitle}</h1>
        <p className="text-muted-foreground font-display mb-8">Acompanhe seu progresso nos módulos abaixo.</p>

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
