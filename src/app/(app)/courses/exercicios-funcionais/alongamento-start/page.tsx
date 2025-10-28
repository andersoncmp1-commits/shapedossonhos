
"use client";

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { lessons } from '@/lib/alongamento-start-lessons';

export default function AlongamentoStartPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/courses/como-se-confessar-melhor">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Exercícios Funcionais
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Alongamento Start</h1>
        <p className="text-muted-foreground font-display mt-2">
          Siga as aulas abaixo para completar seu treino de alongamento.
        </p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <Card 
            key={lesson.id} 
            className="overflow-hidden transition-all duration-300 hover:shadow-primary/10 hover:border-primary/50 cursor-pointer"
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {lesson.id}
                </div>
                <div>
                  <h2 className="font-bold font-display text-lg">{lesson.title}</h2>
                </div>
              </div>
              <PlayCircle className="h-8 w-8 text-muted-foreground/50" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

