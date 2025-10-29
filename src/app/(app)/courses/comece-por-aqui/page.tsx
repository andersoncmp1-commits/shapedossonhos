
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ComecePorAquiPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Cursos
          </Link>
        </Button>
      </div>

      <Card className="bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Por onde começar?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-lg font-display text-foreground/90">
            <p>
              Nosso aplicativo é um facilitador no processo de emagrecimento, você já pode começar agora mesmo ou você pode se preparar, o desafio alimentar de 20 dias já está disponível no app, basta ir na opção de “Plano Alimentar” lá você consegue visualizar as receitas, lista de compras, desafios diário e muito mais coisas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
