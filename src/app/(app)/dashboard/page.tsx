
"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { doc, getDoc, setDoc, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";
import { getFirebase } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { modules, type Module } from "@/lib/modules";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { errorEmitter } from "@/lib/error-emitter";
import { FirestorePermissionError } from "@/lib/errors";
import { AuthWrapper } from "@/components/auth/AuthWrapper";
import { ClientAppLayout } from "../ClientAppLayout";

function DashboardContent() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const { db } = getFirebase();

  useEffect(() => {
    const fetchProgress = async () => {
      if (user && db) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setCompletedModules(userDoc.data().completedModules || []);
          } else {
            await setDoc(userDocRef, { email: user.email, completedModules: [] })
             .catch(serverError => {
                  const permissionError = new FirestorePermissionError({
                    path: userDocRef.path,
                    operation: 'create',
                    requestResourceData: { email: user.email, completedModules: [] },
                  });
                  errorEmitter.emit('permission-error', permissionError);
              });
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
  }, [user, toast, db]);
  
  const handleToggleComplete = async (moduleId: string) => {
    if (!user || !db) return;
    
    const userDocRef = doc(db, "users", user.uid);
    const isCompleted = completedModules.includes(moduleId);
    
    const updateData = { completedModules: isCompleted ? arrayRemove(moduleId) : arrayUnion(moduleId) };

    updateDoc(userDocRef, updateData)
        .then(() => {
            if (isCompleted) {
                setCompletedModules(prev => prev.filter(id => id !== moduleId));
                toast({ title: "Módulo desmarcado" });
            } else {
                setCompletedModules(prev => [...prev, moduleId]);
                toast({ title: "Módulo concluído!", description: "Ótimo trabalho!" });
            }
        })
        .catch(serverError => {
            const permissionError = new FirestorePermissionError({
              path: userDocRef.path,
              operation: 'update',
              requestResourceData: updateData,
            });
            errorEmitter.emit('permission-error', permissionError);
        });
  };

  const handleOpenModule = (module: Module) => {
    setSelectedModule(module);
  };
  
  const handleCloseDialog = () => {
    setSelectedModule(null);
  };

  const courseTitle = "Guia para Quaresma de São Miguel Arcanjo";

  if (loading) {
    return (
        <ClientAppLayout>
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="rounded-lg bg-card">
                            <Skeleton className="w-full aspect-[9/16] rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </ClientAppLayout>
    );
  }

  return (
    <ClientAppLayout>
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
            <p className="text-muted-foreground font-display mb-8">Clique em um módulo para abrir o material de estudo.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {modules.map(module => (
                    <ModuleCard 
                        key={module.id} 
                        module={module}
                        isCompleted={completedModules.includes(module.id)}
                        onOpen={handleOpenModule}
                    />
                ))}
            </div>

            {selectedModule && (
            <Dialog open={!!selectedModule} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
                <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0">
                    <DialogHeader className="p-6 pb-0">
                        <DialogTitle>{selectedModule.title}</DialogTitle>
                    </DialogHeader>
                    <div className="flex-grow overflow-hidden px-6">
                        <iframe 
                            src={selectedModule.pdfUrl} 
                            width="100%" 
                            height="100%" 
                            allow="autoplay"
                            className="border-0"
                        ></iframe>
                    </div>
                    <DialogFooter className="p-6 pt-4 border-t bg-background/80">
                    <Button 
                        variant={completedModules.includes(selectedModule.id) ? "secondary" : "default"}
                        onClick={() => handleToggleComplete(selectedModule.id)}
                    >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        {completedModules.includes(selectedModule.id) ? "Desmarcar como concluído" : "Marcar como concluído"}
                    </Button>
                    <DialogClose asChild>
                        <Button variant="outline">Fechar</Button>
                    </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            )}
        </div>
    </ClientAppLayout>
  );
}

export default function CourseDetailPage() {
    return (
        <AuthWrapper>
            <DashboardContent />
        </AuthWrapper>
    )
}
