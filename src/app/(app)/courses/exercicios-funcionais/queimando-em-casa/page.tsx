
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';
import { lessons, type Lesson } from '@/lib/queimando-em-casa-lessons';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { getFirebase } from '@/lib/firebase';
import { doc, getDoc, setDoc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/lib/errors';
import { errorEmitter } from '@/lib/error-emitter';
import { Header } from '@/components/layout/Header';

export default function QueimandoEmCasaPage() {
  const { user } = useAuth();
  const { db } = getFirebase();
  const { toast } = useToast();

  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user && db) {
        setLoadingProgress(true);
        const userDocRef = doc(db, "users", user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setCompletedLessons(userDoc.data().completedWorkoutLessons || []);
          } else {
             await setDoc(userDocRef, { email: user.email, completedWorkoutLessons: [] }, { merge: true })
              .catch(serverError => {
                  const permissionError = new FirestorePermissionError({
                    path: userDocRef.path,
                    operation: 'create',
                    requestResourceData: { email: user.email, completedWorkoutLessons: [] },
                  });
                  errorEmitter.emit('permission-error', permissionError);
              });
          }
        } catch (error) {
          console.error("Error fetching user progress: ", error);
        } finally {
          setLoadingProgress(false);
        }
      }
    };
    fetchProgress();
  }, [user, db]);

  const handleToggleComplete = (lessonId: string) => {
    if (!user || !db) return;
    const userDocRef = doc(db, "users", user.uid);
    const isCompleted = completedLessons.includes(lessonId);

    const updateData = { completedWorkoutLessons: isCompleted ? arrayRemove(lessonId) : arrayUnion(lessonId) };
    
    updateDoc(userDocRef, updateData).then(() => {
      if (isCompleted) {
        setCompletedLessons(prev => prev.filter(id => id !== lessonId));
        toast({ title: "Aula desmarcada" });
      } else {
        setCompletedLessons(prev => [...prev, lessonId]);
        toast({ title: "Aula concluída!", description: "Parabéns pelo seu progresso!" });
      }
    }).catch(serverError => {
        const permissionError = new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'update',
          requestResourceData: updateData,
        });
        errorEmitter.emit('permission-error', permissionError);
    });
  };

  const isCurrentLessonCompleted = completedLessons.includes(selectedLesson.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
        <div className="mb-8">
            <Button asChild variant="ghost">
            <Link href="/courses/como-se-confessar-melhor">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Exercícios Funcionais
            </Link>
            </Button>
        </div>

        <div className="mb-8 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight">Queimando em Casa</h1>
            <p className="text-muted-foreground font-display mt-2">
            Selecione uma aula na lista para começar seu treino.
            </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
            {/* Coluna do Player de Vídeo */}
            <div className="md:col-span-2 order-1 md:order-2">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border">
                <iframe
                key={selectedLesson.id}
                width="100%"
                height="100%"
                src={selectedLesson.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold font-headline">{selectedLesson.title}</h2>
                <Button 
                    variant={isCurrentLessonCompleted ? "secondary" : "default"}
                    onClick={() => handleToggleComplete(selectedLesson.id)}
                    className="mt-4"
                    disabled={loadingProgress}
                >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {isCurrentLessonCompleted ? "Desmarcar como concluída" : "Marcar como concluída"}
                </Button>
            </div>
            </div>
            
            {/* Coluna da Lista de Aulas */}
            <div className="md:col-span-1 order-2 md:order-1">
            <Card className="overflow-hidden">
                <ScrollArea className="h-[60vh]">
                    <CardContent className="p-2">
                    <div className="space-y-2">
                        {lessons.map((lesson) => (
                        <button
                            key={lesson.id}
                            onClick={() => setSelectedLesson(lesson)}
                            className={cn(
                                "w-full text-left p-3 rounded-md transition-colors flex items-center justify-between",
                                selectedLesson.id === lesson.id 
                                    ? "bg-primary/20 text-primary-foreground"
                                    : "hover:bg-accent/50"
                            )}
                        >
                            <div className="flex items-center gap-3">
                            <div className={cn(
                                "flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm flex-shrink-0",
                                selectedLesson.id === lesson.id 
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                )}>
                                {lesson.id}
                            </div>
                            <span className="font-display font-semibold break-words">{lesson.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {completedLessons.includes(lesson.id) && (
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                )}
                                {selectedLesson.id === lesson.id && (
                                    <PlayCircle className="h-6 w-6 text-primary flex-shrink-0" />
                                )}
                            </div>
                        </button>
                        ))}
                    </div>
                    </CardContent>
                </ScrollArea>
            </Card>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}
