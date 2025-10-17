"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { doc, getDoc, setDoc, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { lessons, type Lesson } from "@/lib/confession-modules";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Circle, Play, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function ConfessionCoursePage() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0]);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setCompletedLessons(data.completedConfessionLessons || []);
          } else {
            await setDoc(userDocRef, { email: user.email, completedConfessionLessons: [] }, { merge: true });
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
      } else if (user === null) {
        // Not logged in, stop loading
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user, toast]);

  const handleToggleComplete = async () => {
    if (!user) {
        toast({
            variant: "destructive",
            title: "Acesso negado",
            description: "Você precisa estar logado para salvar seu progresso.",
        });
        return;
    };
    
    const userDocRef = doc(db, "users", user.uid);
    const isCompleted = completedLessons.includes(selectedLesson.id);

    try {
        if (isCompleted) {
            await updateDoc(userDocRef, { completedConfessionLessons: arrayRemove(selectedLesson.id) });
            setCompletedLessons(prev => prev.filter(id => id !== selectedLesson.id));
            toast({ title: "Aula desmarcada." });
        } else {
            await updateDoc(userDocRef, { completedConfessionLessons: arrayUnion(selectedLesson.id) });
            setCompletedLessons(prev => [...prev, selectedLesson.id]);
            toast({ title: "Aula concluída!", description: "Continue assim!" });
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

  const courseTitle = "Curso: Como se Confessar melhor";
  const isCurrentLessonCompleted = completedLessons.includes(selectedLesson.id);

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

        <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-12">
            {/* Sidebar com a lista de aulas */}
            <aside className="md:col-span-4 lg:col-span-3 mb-8 md:mb-0">
                <h2 className="font-headline text-2xl font-bold tracking-tight mb-1">{courseTitle}</h2>
                <p className="text-muted-foreground font-display mb-6 text-sm">Aprenda o passo a passo para fazer uma boa confissão.</p>
                <div className="flex flex-col space-y-2">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                          <Skeleton key={i} className="h-16 w-full" />
                        ))
                    ) : lessons.map((lesson, index) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const isSelected = selectedLesson.id === lesson.id;
                        return (
                            <button
                                key={lesson.id}
                                onClick={() => setSelectedLesson(lesson)}
                                className={cn(
                                    "flex items-center text-left w-full p-3 rounded-lg transition-colors duration-200",
                                    isSelected ? "bg-accent text-accent-foreground" : "hover:bg-muted/50",
                                )}
                            >
                                <div className="mr-4">
                                  {isCompleted ? <CheckCircle className="h-5 w-5 text-primary" /> : <Circle className="h-5 w-5 text-muted-foreground/50" />}
                                </div>
                                <div className="flex-grow">
                                    <p className={cn("font-bold text-sm", isSelected ? "text-accent-foreground" : "text-foreground")}>
                                      Aula {index + 1}: {lesson.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                </div>
                                {isSelected && <Play className="h-5 w-5 text-primary ml-2 shrink-0" />}
                            </button>
                        )
                    })}
                </div>
            </aside>

            {/* Conteúdo principal com o vídeo */}
            <main className="md:col-span-8 lg:col-span-9">
                <Card className="overflow-hidden">
                  <div className="w-full aspect-video bg-black">
                      <iframe 
                          key={selectedLesson.id} // Força o iframe a recarregar quando a aula muda
                          src={selectedLesson.videoUrl} 
                          title={selectedLesson.title}
                          width="100%" 
                          height="100%" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="border-0"
                      ></iframe>
                  </div>
                </Card>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 rounded-lg bg-card border">
                  <div>
                    <h1 className="font-headline text-2xl font-bold tracking-tight">{`Aula ${selectedLesson.id}: ${selectedLesson.title}`}</h1>
                    <p className="text-muted-foreground font-display mt-1">
                      { isCurrentLessonCompleted ? "Você concluiu esta aula." : "Assista ao vídeo para concluir a aula."}
                    </p>
                  </div>
                  <Button 
                    onClick={handleToggleComplete}
                    disabled={loading}
                    variant={isCurrentLessonCompleted ? "secondary" : "default"}
                    className="w-full sm:w-auto"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    {isCurrentLessonCompleted ? "Desmarcar como concluída" : "Marcar como concluída"}
                  </Button>
                </div>
            </main>
        </div>
    </div>
  );
}
