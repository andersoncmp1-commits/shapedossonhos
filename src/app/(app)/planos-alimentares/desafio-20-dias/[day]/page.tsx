
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getChallengeDay } from '@/lib/desafio-20-dias-content';

function MealOption({ option }: { option: { title: string; description: string; kcal: string } }) {
  return (
    <div className="p-4 bg-muted/50 rounded-lg not-prose">
        <h4 className="font-bold text-primary mb-2">{option.title}</h4>
        <div className="whitespace-pre-line text-sm text-foreground/90 font-display">{option.description}</div>
        <p className="text-right font-bold text-sm text-primary mt-2">{option.kcal} Kcal</p>
    </div>
  );
}

function MealContent({ title, options }: { title: string, options: { title: string; description: string; kcal: string }[] }) {
    return (
        <div className="prose prose-sm max-w-none text-foreground/80 font-display">
            <h3 className="text-foreground/90">{title}</h3>
            <div className="space-y-4">
                {options.map((option, index) => (
                    <MealOption key={index} option={option} />
                ))}
            </div>
        </div>
    );
}

export default function DayChallengePage({ params }: { params: { day: string } }) {
  const dayNumber = parseInt(params.day, 10);
  const dayData = getChallengeDay(dayNumber);

  if (!dayData) {
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
              Dia {params.day}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Conteúdo para este dia ainda não disponível.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            Dia {params.day}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-display text-lg text-foreground/90 mb-6">
            Confira o plano alimentar para o dia de hoje. Escolha uma das opções para cada refeição.
          </p>
          
          <Accordion type="multiple" className="w-full" defaultValue={['item-0']}>
            {dayData.meals.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.name}>
                <AccordionTrigger className="font-headline text-xl">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent>
                   <MealContent title={item.content.title} options={item.content.options} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </CardContent>
      </Card>
    </div>
  );
}
