
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Desafio20DiasPage() {
  const challengeModules = [
    { id: 'lista-compras', title: 'Lista de Compras' },
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `dia-${i + 1}`,
      title: `Dia ${i + 1}`,
    })),
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/planos-alimentares">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Planos Alimentares
          </Link>
        </Button>
      </div>

      <div className="mb-8 text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
          Desafio 20 Dias
        </h1>
        <p className="text-muted-foreground font-display mt-2">
          Selecione um módulo para começar seu desafio.
        </p>
      </div>

      <Card className="bg-card/80 backdrop-blur-lg">
        <CardContent className="p-4">
          <ScrollArea className="h-[65vh] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {challengeModules.map((module) => (
                <Link key={module.id} href="#" passHref>
                  <Card className="h-full transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/20 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium font-display">
                        {module.title}
                      </CardTitle>
                      <BookCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        Acessar conteúdo
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
