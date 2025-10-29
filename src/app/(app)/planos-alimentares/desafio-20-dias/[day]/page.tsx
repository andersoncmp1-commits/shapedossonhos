
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const mealPlan = [
  { meal: "Café da manhã", description: "Detalhes sobre o café da manhã." },
  { meal: "Lanche da manhã", description: "Detalhes sobre o lanche da manhã." },
  { meal: "Almoço", description: "Detalhes sobre o almoço." },
  { meal: "Lanche da tarde", description: "Detalhes sobre o lanche da tarde." },
  { meal: "Jantar", description: "Detalhes sobre o jantar." },
];

export default function DayChallengePage({ params }: { params: { day: string } }) {
  const day = params.day;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/planos-alimentares/desafio-20-dias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Desafio
          </Link>
        </Button>
      </div>

      <Card className="bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">
            Dia {day}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-display text-lg text-foreground/90 mb-6">
            Confira o plano alimentar para o dia de hoje.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {mealPlan.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.meal}>
                <AccordionTrigger className="font-headline text-xl">
                  {item.meal}
                </AccordionTrigger>
                <AccordionContent className="font-display text-base text-foreground/80">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </CardContent>
      </Card>
    </div>
  );
}
