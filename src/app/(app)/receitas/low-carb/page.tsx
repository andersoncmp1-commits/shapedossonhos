
"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ReceitasLowCarbPage() {
  const categories = [
    {
      id: 'panquecas',
      title: 'Panquecas',
      imageUrl: 'https://picsum.photos/seed/pancakes/1080/1920',
      imageHint: 'low carb pancakes',
      href: '/receitas/low-carb/panquecas',
    },
    {
      id: 'bolos',
      title: 'Bolos',
      imageUrl: 'https://picsum.photos/seed/cakes/1080/1920',
      imageHint: 'low carb cake',
      href: '/receitas/low-carb/bolos',
    },
    {
      id: 'doces-sobremesas',
      title: 'Doces e Sobremesas',
      imageUrl: 'https://picsum.photos/seed/desserts/1080/1920',
      imageHint: 'low carb dessert',
      href: '/receitas/low-carb/doces-e-sobremesas',
    },
    {
      id: 'salgados',
      title: 'Salgados',
      imageUrl: 'https://picsum.photos/seed/savory/1080/1920',
      imageHint: 'low carb snacks',
      href: '/receitas/low-carb/salgados',
    },
    {
        id: 'paes',
        title: 'Pães',
        imageUrl: 'https://picsum.photos/seed/bread/1080/1920',
        imageHint: 'low carb bread',
        href: '/receitas/low-carb/paes',
    },
    {
        id: 'sopas',
        title: 'Sopas',
        imageUrl: 'https://picsum.photos/seed/soup/1080/1920',
        imageHint: 'low carb soup',
        href: '/receitas/low-carb/sopas',
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/receitas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Receitas
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Receitas Low Carb</h1>
        <p className="text-muted-foreground font-display mt-2">
          Explore nossas receitas com baixo teor de carboidratos.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link key={category.id} href={category.href} className="block group">
            <Card className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
                             group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1">
              <Image
                src={category.imageUrl}
                alt={`Capa da categoria ${category.title}`}
                width={1080}
                height={1920}
                className="object-cover w-full h-full aspect-[9/16]"
                data-ai-hint={category.imageHint}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
