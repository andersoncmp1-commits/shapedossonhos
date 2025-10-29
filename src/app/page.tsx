import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-200 to-primary">
                Shape dos Sonhos
              </h1>
              <p className="font-display text-lg text-muted-foreground md:text-xl">
                Um espaço sagrado para o seu desenvolvimento e aprendizado.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="font-display">
                  <Link href="/login">
                    Entrar na Plataforma
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="font-display">
                  <Link href="/register">
                    Criar minha conta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Shape dos Sonhos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
