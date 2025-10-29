
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const recipes = [
  // Receitas de doces e sobremesas serão adicionadas aqui
];

export default function DocesSobremesasPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/receitas/low-carb">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Receitas Low Carb
          </Link>
        </Button>
      </div>

      <Card className="bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Doces e Sobremesas Low Carb</CardTitle>
          <CardDescription className="font-display text-lg text-foreground/90">Satisfaça sua vontade de doce sem culpa.</CardDescription>
        </CardHeader>
        <CardContent>
          {recipes.length > 0 ? (
            <Accordion type="multiple" className="w-full space-y-4">
              {recipes.map((recipe, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-muted/30 rounded-lg px-4 border">
                  <AccordionTrigger className="font-headline text-xl hover:no-underline">
                    <div className="flex items-center gap-4">
                      {recipe.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <h4 className="font-bold font-headline text-primary mb-3">Ingredientes</h4>
                        <ul className="list-disc list-inside space-y-2 font-display text-foreground/80">
                          {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold font-headline text-primary mb-3">Modo de Preparo</h4>
                        <ol className="list-decimal list-inside space-y-2 font-display text-foreground/80">
                          {recipe.preparation.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="font-display text-foreground/80">Nenhuma receita de doce ou sobremesa disponível no momento.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
