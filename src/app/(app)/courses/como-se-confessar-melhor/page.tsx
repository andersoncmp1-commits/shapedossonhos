
"use client";

import Link from 'next/link';
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function FunctionalExercisesPage() {
  const workouts = [
    {
      id: 'alongamento-start',
      title: 'Alongamento Start',
      description: 'Comece seu dia com mais flexibilidade e disposição. Ideal para iniciantes.',
      imageUrl: 'https://picsum.photos/seed/stretching/1024/768',
      imageHint: 'person stretching',
      href: '/courses/exercicios-funcionais/alongamento-start',
    },
    {
      id: 'mobilidade-plena',
      title: 'Mobilidade Plena',
      description: 'Aumente a amplitude dos seus movimentos e previna lesões.',
      imageUrl: 'https://picsum.photos/seed/mobility/1024/768',
      imageHint: 'yoga pose',
      href: '#',
    },
    {
      id: 'bumbum-redondinho',
      title: 'Bumbum Redondinho',
      description: 'Treino focado em fortalecer e tonificar os glúteos para um resultado visível.',
      imageUrl: 'https://picsum.photos/seed/glutes/1024/768',
      imageHint: 'leg workout',
      href: '#',
    },
    {
      id: 'treino-para-gestantes',
      title: 'Treino para Gestantes',
      description: 'Exercícios seguros e eficazes para manter a saúde durante a gravidez.',
      imageUrl: 'https://picsum.photos/seed/pregnant/1024/768',
      imageHint: 'pregnant woman exercising',
      href: '#',
    },
    {
      id: 'queimando-em-casa',
      title: 'Queimando em Casa',
      description: 'Um treino HIIT intenso para queimar calorias sem sair de casa.',
      imageUrl: 'https://picsum.photos/seed/hiit/1024/768',
      imageHint: 'high intensity workout',
      href: '#',
    },
  ];

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

      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Exercícios Funcionais</h1>
        <p className="text-muted-foreground font-display mt-2">
          Escolha um dos treinos abaixo para começar a se exercitar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workouts.map((workout) => (
          <Card key={workout.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
            <div className="relative">
              <Image 
                src={workout.imageUrl} 
                alt={`Imagem do treino ${workout.title}`}
                width={1024}
                height={768}
                className="object-cover w-full h-auto aspect-video"
                data-ai-hint={workout.imageHint}
              />
            </div>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="font-headline mb-2">{workout.title}</CardTitle>
              <CardDescription className="font-display flex-grow">{workout.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
               <Button asChild className="w-full">
                  <Link href={workout.href}>
                    Acessar Treino
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
