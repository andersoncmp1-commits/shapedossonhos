
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

export default function PlanosAlimentaresPage() {
  const plans = [
    {
      id: 'desafio-20-dias',
      title: 'Desafio 20 Dias',
      description: 'Um desafio completo para transformar sua alimentação.',
      imageUrl: 'https://i.imgur.com/gi8XXka.png',
      imageHint: 'calendar progress',
      href: '/planos-alimentares/desafio-20-dias',
      isLocked: false,
    },
    {
      id: 'reeducacao-alimentar',
      title: 'Reeducação Alimentar',
      description: 'Liberado em 1 dia',
      imageUrl: 'https://i.imgur.com/Z16jQTj.png',
      imageHint: 'healthy eating chart',
      href: '#',
      isLocked: true,
    },
    {
      id: 'planos-impressao',
      title: 'Planos para Impressão',
      description: 'Liberado em 1 dia',
      imageUrl: 'https://i.imgur.com/kNZj7Rt.png',
      imageHint: 'printer paper',
      href: '#',
      isLocked: true,
    },
  ];

  const renderPlanCard = (plan: (typeof plans)[0]) => {
    const cardContent = (
      <Card className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300", 
        plan.isLocked 
          ? "cursor-not-allowed" 
          : "cursor-pointer group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1"
      )}>
        <Image
          src={plan.imageUrl}
          alt={`Capa do plano ${plan.title}`}
          width={1080}
          height={1920}
          className={cn(
            "object-cover w-full h-full aspect-[9/16]",
            plan.isLocked && "filter grayscale"
          )}
          data-ai-hint={plan.imageHint}
        />
        {plan.isLocked && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4">
            <Lock className="h-12 w-12 text-white/80 mb-4" />
            <p className="text-white font-bold text-center font-headline">{plan.title}</p>
            <p className="text-white/80 text-sm text-center font-display">{plan.description}</p>
          </div>
        )}
      </Card>
    );

    if (plan.isLocked) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="block group">{cardContent}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Conteúdo será liberado em 1 dia</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <Link href={plan.href} className="block group">
        {cardContent}
      </Link>
    );
  };


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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {plans.map(renderPlanCard)}
      </div>
    </div>
  );
}
