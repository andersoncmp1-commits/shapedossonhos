
"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Lock } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Header } from '@/components/layout/Header';


export default function FunctionalExercisesPage() {
  const workouts = [
    {
      id: 'alongamento-start',
      title: 'Alongamento Start',
      description: 'Comece seu dia com mais flexibilidade e disposição. Ideal para iniciantes.',
      imageUrl: 'https://i.imgur.com/Xmlk7Ua.png',
      imageHint: 'person stretching',
      href: '/courses/exercicios-funcionais/alongamento-start',
      isLocked: false,
    },
    {
      id: 'mobilidade-plena',
      title: 'Mobilidade Plena',
      description: 'Aumente a amplitude dos seus movimentos e previna lesões.',
      imageUrl: 'https://i.imgur.com/k2phSu5.png',
      imageHint: 'yoga pose',
      href: '/courses/exercicios-funcionais/mobilidade-plena',
      isLocked: false,
    },
    {
      id: 'bumbum-redondinho',
      title: 'Bumbum Redondinho',
      description: 'Treino focado em fortalecer e tonificar os glúteos para um resultado visível.',
      imageUrl: 'https://i.imgur.com/YMHBOl9.png',
      imageHint: 'leg workout',
      href: '/courses/exercicios-funcionais/bumbum-redondinho',
      isLocked: false,
    },
    {
      id: 'treino-para-gestantes',
      title: 'Treino para Gestantes',
      description: 'Exercícios seguros e eficazes para manter a saúde durante a gravidez.',
      imageUrl: 'https://i.imgur.com/zSnZZil.png',
      imageHint: 'pregnant woman exercising',
      href: '/courses/exercicios-funcionais/treino-para-gestantes',
      isLocked: false,
    },
    {
      id: 'queimando-em-casa',
      title: 'Queimando em Casa',
      description: 'Um treino HIIT intenso para queimar calorias sem sair de casa.',
      imageUrl: 'https://i.imgur.com/WIxBIFt.png',
      imageHint: 'high intensity workout',
      href: '/courses/exercicios-funcionais/queimando-em-casa',
      isLocked: false,
    },
    {
      id: 'treino-com-danca',
      title: 'Treino com Dança',
      description: 'Divirta-se e queime calorias com aulas de dança energizantes.',
      imageUrl: 'https://i.imgur.com/AEktoBL.png',
      imageHint: 'dance workout',
      href: '/courses/exercicios-funcionais/treino-com-danca',
      isLocked: false,
    },
  ];

  const renderWorkoutCard = (workout: (typeof workouts)[0]) => {
    const cardContent = (
      <Card className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300", 
        workout.isLocked 
          ? "cursor-not-allowed" 
          : "cursor-pointer group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1"
      )}>
        <Image
          src={workout.imageUrl}
          alt={`Capa do plano ${workout.title}`}
          width={1080}
          height={1920}
          className={cn(
            "object-cover w-full h-full aspect-[9/16]",
            workout.isLocked && "filter grayscale"
          )}
          data-ai-hint={workout.imageHint}
        />
        {workout.isLocked && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4">
            <Lock className="h-12 w-12 text-white/80 mb-4" />
            <p className="text-white font-bold text-center font-headline">{workout.title}</p>
            <p className="text-white/80 text-sm text-center font-display">{workout.description}</p>
          </div>
        )}
      </Card>
    );

    if (workout.isLocked) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="block group">{cardContent}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Conteúdo será liberado em 2 dias</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <Link href={workout.href} className="block group">
        {cardContent}
      </Link>
    );
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div>
        <div className="mb-8">
            <Button asChild variant="ghost">
            <Link href="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Cursos
            </Link>
            </Button>
        </div>

        <div className="mb-8">
            <h1 className="font-headline text-3xl font-bold tracking-tight">Exercícios Funcionais</h1>
            <p className="text-muted-foreground font-display mt-2">
            Escolha um dos treinos abaixo para começar a se exercitar.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {workouts.map((workout) => (
                <div key={workout.id}>
                    {renderWorkoutCard(workout)}
                </div>
            ))}
        </div>
        </div>
      </main>
    </div>
  );
}
