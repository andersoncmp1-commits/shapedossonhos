
"use client";

import Link from 'next/link';
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PlanosAlimentaresPage() {
  const plans = [
    {
      id: 'desafio-20-dias',
      title: 'Desafio dos 20 Dias',
      description: 'Um desafio completo para transformar seus hábitos alimentares em 20 dias.',
      imageUrl: 'https://picsum.photos/seed/challenge/1024/768',
      imageHint: 'calendar progress',
      href: '#',
    },
    {
      id: 'reeducacao-alimentar',
      title: 'Reeducação Alimentar',
      description: 'Aprenda a fazer escolhas saudáveis e sustentáveis para a vida toda.',
      imageUrl: 'https://picsum.photos/seed/education/1024/768',
      imageHint: 'healthy eating chart',
      href: '#',
    },
    {
      id: 'dieta-do-ovo',
      title: 'Dieta do Ovo para 5 Dias',
      description: 'Um plano de 5 dias focado em resultados rápidos com a dieta do ovo.',
      imageUrl: 'https://picsum.photos/seed/egg-diet/1024/768',
      imageHint: 'eggs breakfast',
      href: '#',
    },
    {
      id: 'planos-impressao',
      title: 'Planos para Impressão',
      description: 'Versões para impressão dos seus planos alimentares para fácil acesso.',
      imageUrl: 'https://picsum.photos/seed/print/1024/768',
      imageHint: 'printer paper',
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
        <h1 className="font-headline text-3xl font-bold tracking-tight">Planos Alimentares</h1>
        <p className="text-muted-foreground font-display mt-2">
          Escolha um dos planos abaixo para começar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
            <div className="relative">
              <Image 
                src={plan.imageUrl} 
                alt={`Imagem do plano ${plan.title}`}
                width={1024}
                height={768}
                className="object-cover w-full h-auto aspect-video"
                data-ai-hint={plan.imageHint}
              />
            </div>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="font-headline mb-2">{plan.title}</CardTitle>
              <CardDescription className="font-display flex-grow">{plan.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
               <Button asChild className="w-full">
                  <Link href={plan.href}>
                    Acessar Plano
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
