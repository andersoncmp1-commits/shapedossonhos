
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ReceitasVeganasPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col h-[85vh]">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/receitas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Receitas
          </Link>
        </Button>
      </div>

      <div className="mb-8 text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Receitas Veganas</h1>
        <p className="text-muted-foreground font-display mt-2">
          Descubra pratos deliciosos e sem ingredientes de origem animal.
        </p>
      </div>
      
      <div className="flex-grow w-full rounded-lg overflow-hidden shadow-2xl border">
        <iframe
            src="https://drive.google.com/file/d/1C8C-NRra8dvKrWO-TefwqMhzurHHH4FZ/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="border-0"
        ></iframe>
      </div>
    </div>
  );
}
