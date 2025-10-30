
"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PlanosAlimentaresPage() {
  const plans = [
    {
      id: 'desafio-20-dias',
      title: 'Desafio 20 Dias',
      imageUrl: 'https://i.imgur.com/gi8XXka.png',
      imageHint: 'calendar progress',
      href: '/planos-alimentares/desafio-20-dias',
    },
    {
      id: 'reeducacao-alimentar',
      title: 'Reeducação Alimentar',
      imageUrl: 'https://i.imgur.com/Z16jQTj.png',
      imageHint: 'healthy eating chart',
      href: '#',
    },
    {
      id: 'planos-impressao',
      title: 'Planos para Impressão',
      imageUrl: 'https://i.imgur.com/kNZj7Rt.png',
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <Link key={plan.id} href={plan.href} className="block group">
            <Card className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
                             group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1">
              <Image
                src={plan.imageUrl}
                alt={`Capa do plano ${plan.title}`}
                width={1080}
                height={1920}
                className="object-cover w-full h-full aspect-[9/16]"
                data-ai-hint={plan.imageHint}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
