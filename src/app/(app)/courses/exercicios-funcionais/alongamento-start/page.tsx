
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';
import { lessons, type Lesson } from '@/lib/alongamento-start-lessons';
import { cn } from '@/lib/utils';

export default function AlongamentoStartPage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0]);

  return (
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
        <h1 className="font-headline text-3xl font-bold tracking-tight">Alongamento Start</h1>
        <p className="text-muted-foreground font-display mt-2">
          Selecione uma aula na lista para começar seu treino.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna da Lista de Aulas */}
        <div className="md:col-span-1">
          <Card className="overflow-hidden">
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
                           "flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm",
                           selectedLesson.id === lesson.id 
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}>
                        {lesson.id}
                       </div>
                       <span className="font-display font-semibold">{lesson.title}</span>
                    </div>
                    {selectedLesson.id === lesson.id && (
                        <PlayCircle className="h-6 w-6 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coluna do Player de Vídeo */}
        <div className="md:col-span-2">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl border">
            <iframe
              key={selectedLesson.id}
              width="100%"
              height="100%"
              src={selectedLesson.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold font-headline">{selectedLesson.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
