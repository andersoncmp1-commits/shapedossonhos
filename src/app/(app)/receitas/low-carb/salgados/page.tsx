
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Pizza, Drumstick } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const recipes = [
  {
    title: "Mini Pizza de Cenoura e Frango Low Carb",
    icon: Pizza,
    ingredients: [
        "1 xícara de cenoura ralada",
        "1 ovo",
        "Sal e pimenta a gosto",
        "1/2 xícara de frango desfiado",
        "2 colheres de sopa de molho de tomate",
        "Queijo mussarela a gosto",
        "Orégano a gosto",
    ],
    preparation: [
        "Misture a cenoura ralada com o ovo, sal e pimenta.",
        "Em uma frigideira antiaderente, espalhe a mistura formando um disco.",
        "Cozinhe em fogo baixo até dourar dos dois lados.",
        "Cubra com molho de tomate, frango desfiado e queijo.",
        "Tampe a frigideira para o queijo derreter.",
        "Sirva com orégano por cima.",
    ],
  },
  {
    title: "Coxinha Low Carb",
    icon: Drumstick,
    ingredients: [
        "1 xícara de frango desfiado e temperado",
        "1/2 xícara de couve-flor cozida e amassada",
        "2 colheres de sopa de requeijão ou cream cheese",
        "Sal e temperos a gosto",
        "Farinha de amêndoas ou outra farinha low carb para empanar",
        "Ovo para empanar",
    ],
    preparation: [
        "Misture o frango desfiado, a couve-flor amassada, o requeijão e os temperos.",
        "Modele a massa no formato de coxinhas.",
        "Passe cada coxinha no ovo batido e depois na farinha low carb.",
        "Asse em forno pré-aquecido a 200°C por cerca de 20-25 minutos ou na airfryer até dourar.",
    ],
  }
];

export default function SalgadosPage() {
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
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Salgados Low Carb</CardTitle>
          <CardDescription className="font-display text-lg text-foreground/90">Lanches e petiscos saudáveis.</CardDescription>
        </CardHeader>
        <CardContent>
          {recipes.length > 0 ? (
            <Accordion type="multiple" className="w-full space-y-4" defaultValue={['item-0']}>
              {recipes.map((recipe, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-muted/30 rounded-lg px-4 border">
                  <AccordionTrigger className="font-headline text-xl hover:no-underline">
                    <div className="flex items-center gap-4">
                      <recipe.icon className="h-6 w-6 text-primary" />
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
            <p className="font-display text-foreground/80">Nenhuma receita de salgado disponível no momento.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
