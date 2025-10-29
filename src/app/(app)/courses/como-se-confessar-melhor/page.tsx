
"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function FunctionalExercisesPage() {
  const workouts = [
    {
      id: 'alongamento-start',
      title: 'Alongamento Start',
      description: 'Comece seu dia com mais flexibilidade e disposição. Ideal para iniciantes.',
      imageUrl: 'https://i.imgur.com/Xmlk7Ua.png',
      imageHint: 'person stretching',
      href: '/courses/exercicios-funcionais/alongamento-start',
    },
    {
      id: 'mobilidade-plena',
      title: 'Mobilidade Plena',
      description: 'Aumente a amplitude dos seus movimentos e previna lesões.',
      imageUrl: 'https://i.imgur.com/k2phSu5.png',
      imageHint: 'yoga pose',
      href: '/courses/exercicios-funcionais/mobilidade-plena',
    },
    {
      id: 'bumbum-redondinho',
      title: 'Bumbum Redondinho',
      description: 'Treino focado em fortalecer e tonificar os glúteos para um resultado visível.',
      imageUrl: 'https://i.imgur.com/YMHBOl9.png',
      imageHint: 'leg workout',
      href: '/courses/exercicios-funcionais/bumbum-redondinho',
    },
    {
      id: 'treino-para-gestantes',
      title: 'Treino para Gestantes',
      description: 'Exercícios seguros e eficazes para manter a saúde durante a gravidez.',
      imageUrl: 'https://i.imgur.com/zSnZZil.png',
      imageHint: 'pregnant woman exercising',
      href: '/courses/exercicios-funcionais/treino-para-gestantes',
    },
    {
      id: 'queimando-em-casa',
      title: 'Queimando em Casa',
      description: 'Um treino HIIT intenso para queimar calorias sem sair de casa.',
      imageUrl: 'https://i.imgur.com/WIxBIFt.png',
      imageHint: 'high intensity workout',
      href: '/courses/exercicios-funcionais/queimando-em-casa',
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {workouts.map((workout) => (
           <Link key={workout.id} href={workout.href} className="block group">
            <Card className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
                             group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1">
              <Image
                src={workout.imageUrl}
                alt={`Capa do plano ${workout.title}`}
                width={1080}
                height={1920}
                className="object-cover w-full h-full aspect-[9/16]"
                data-ai-hint={workout.imageHint}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
