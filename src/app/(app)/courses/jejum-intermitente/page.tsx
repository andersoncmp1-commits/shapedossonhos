
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';

export default function JejumIntermitentePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col h-[85vh]">
        <div className="mb-8">
            <Button asChild variant="ghost">
            <Link href="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Cursos
            </Link>
            </Button>
        </div>

        <div className="mb-8 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight">Jejum Intermitente</h1>
            <p className="text-muted-foreground font-display mt-2">
            Aprenda os segredos e benefícios do jejum intermitente.
            </p>
        </div>
        
        <div className="flex-grow w-full rounded-lg overflow-hidden shadow-2xl border">
            <iframe
                src="https://drive.google.com/file/d/1jIHXRK3JfiSV_DyezG9tW1AFFifbuqkW/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                className="border-0"
            ></iframe>
        </div>
        </div>
      </main>
    </div>
  );
}
