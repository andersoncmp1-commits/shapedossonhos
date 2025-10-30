
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Egg, Wheat, CookingPot, Citrus, Vegan, Apple, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/Header';

const recipes = [
  {
    title: "Panqueca de Banana e Aveia",
    icon: Wheat,
    ingredients: [
      "2 bananas maduras",
      "1 xícara de aveia em flocos",
      "1 ovo",
      "1 colher de chá de canela em pó",
    ],
    preparation: [
      "Em uma tigela, amasse as bananas maduras até obter um purê.",
      "Adicione a aveia em flocos, o ovo, a canela em pó ao purê de banana. Misture bem até obter uma massa homogênea.",
      "Aqueça uma frigideira antiaderente em fogo médio. Você pode untá-la com um pouco de óleo de coco ou azeite ou manteiga se preferir.",
      "Despeje pequenas porções da massa na frigideira quente para formar as panquecas. Espalhe a massa um pouco para formar panquecas finas.",
      "Cozinhe por cerca de 2-3 minutos de cada lado, ou até que as panquecas estejam douradas.",
      "Sirva suas panquecas de banana e aveia com suas coberturas favoritas, como mel, frutas frescas ou iogurte grego.",
    ],
  },
  {
    title: "Panqueca de Ricota",
    icon: Egg,
    ingredients: [
      "1 xícara de ricota light",
      "2 ovos",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de chá de fermento em pó",
      "Uma pitada de sal",
      "Óleo de coco (para untar a frigideira)",
    ],
    preparation: [
      "Em uma tigela, misture a ricota com os ovos até obter uma mistura homogênea.",
      "Adicione a farinha de aveia, o fermento em pó e uma pitada de sal (e pimenta, se desejar) à mistura de ricota e ovos. Mexa bem até que todos os ingredientes estejam combinados.",
      "Aqueça uma frigideira antiaderente em fogo médio e unte-a com um pouco de óleo de coco.",
      "Despeje pequenas porções da massa na frigideira para formar as panquecas.",
      "Cozinhe por cerca de 2-3 minutos de cada lado, ou até que as panquecas estejam douradas e cozidas por dentro.",
      "Sirva suas panquecas de ricota com um molho de tomate caseiro ou acompanhadas de vegetais frescos.",
    ],
  },
  {
    title: "Panqueca de Coco",
    icon: Vegan,
    ingredients: [
      "1/2 xícara de coco ralado sem açúcar",
      "1/2 xícara de farinha de aveia",
      "2 ovos",
      "1/2 xícara de leite de coco light",
      "1 colher de chá de fermento em pó",
      "Uma pitada de sal",
      "Óleo de coco (para untar a frigideira)",
    ],
    preparation: [
      "Em uma tigela, misture o coco ralado, a farinha de aveia, o fermento em pó e uma pitada de sal.",
      "Em outra tigela, bata os ovos e adicione o leite de coco. Misture bem.",
      "Combine a mistura de ingredientes líquidos com a mistura de ingredientes secos e mexa até obter uma massa homogênea.",
      "Aqueça uma frigideira antiaderente em fogo médio e unte-a com um pouco de óleo de coco.",
      "Despeje pequenas porções da massa na frigideira para formar as panquecas.",
      "Cozinhe por cerca de 2-3 minutos de cada lado, ou até que as panquecas estejam douradas.",
      "Sirva suas panquecas de coco com um toque de coco ralado por cima ou frutas frescas, se desejar.",
    ],
  },
  {
    title: "Panqueca de Limão",
    icon: Citrus,
    ingredients: [
      "1 xícara de farinha de amêndoa (ou farinha de aveia, se preferir)",
      "2 ovos",
      "Suco e raspas de 1 limão",
      "1 colher de chá de fermento em pó",
      "1 colher de chá de adoçante natural (como stevia), opcional",
      "Uma pitada de sal",
      "Óleo de coco (para untar a frigideira)",
    ],
    preparation: [
      "Em uma tigela, misture a farinha de amêndoa (ou farinha de aveia) com o fermento em pó, as raspas de limão, o adoçante (se desejar) e uma pitada de sal.",
      "Em outra tigela, bata os ovos e adicione o suco de limão. Misture bem.",
      "Combine a mistura de ingredientes líquidos com a mistura de ingredientes secos e mexa até obter uma massa homogênea.",
      "Aqueça uma frigideira antiaderente em fogo médio e unte-a com um pouco de óleo de coco.",
      "Despeje pequenas porções da massa na frigideira para formar as panquecas.",
      "Cozinhe por cerca de 2-3 minutos de cada lado, ou até que as panquecas estejam douradas e cozidas por dentro.",
      "Sirva suas panquecas de limão com uma pitada adicional de raspas de limão por cima, se desejar.",
    ],
  },
  {
    title: "Panqueca de Abóbora",
    icon: CookingPot,
    ingredients: [
      "1 xícara de purê de abóbora (abóbora cozida e amassada)",
      "2 ovos",
      "1/2 xícara de farinha de aveia",
      "1 colher de chá de fermento em pó",
      "1 colher de chá de canela em pó",
      "1/4 de colher de chá de noz-moscada (opcional)",
      "Uma pitada de sal",
      "Óleo de coco (para untar a frigideira)",
    ],
    preparation: [
      "Em uma tigela, misture o purê de abóbora com os ovos até obter uma mistura homogênea.",
      "Adicione a farinha de aveia, o fermento em pó, a canela em pó, a noz-moscada (se desejar) e uma pitada de sal à mistura de abóbora e ovos. Mexa bem até que todos os ingredientes estejam combinados.",
      "Aqueça uma frigideira antiaderente em fogo médio e unte-a com um pouco de óleo de coco.",
      "Despeje pequenas porções da massa na frigideira para formar as panquecas.",
      "Cozinhe por cerca de 2-3 minutos de cada lado, ou até que as panquecas estejam douradas e cozidas por dentro.",
      "Sirva suas panquecas de abóbora com um toque de mel ou xarope de bordo, se desejar.",
    ],
  },
  {
    title: "Panqueca de Maçã",
    icon: Apple,
    ingredients: [
      "1 maçã pequena, descascada e picada em pedaços pequenos",
      "1/2 xícara de farinha de aveia",
      "2 claras de ovo",
      "1/4 de xícara de leite de amêndoa (ou outro leite vegetal)",
      "1 colher de chá de canela em pó",
      "1 colher de chá de fermento em pó",
      "Adoçante natural a gosto (opcional)",
      "Uma pitada de sal",
      "Óleo de coco (para untar a frigideira)",
    ],
    preparation: [
      "Em uma tigela, misture a farinha de aveia, a canela em pó, o fermento em pó e uma pitada de sal.",
      "Em outra tigela, bata as claras de ovo até ficarem espumosas.",
      "Adicione o leite de amêndoa às claras de ovo batidas e misture bem.",
      "Combine a mistura de ingredientes líquidos com a mistura de ingredientes secos e misture até obter uma massa homogênea.",
      "Adicione os pedaços de maçã à massa e misture.",
      "Aqueça uma frigideira antiaderente em fogo médio e unte-a com um pouco de óleo de coco.",
      "Despeje pequenas porções da massa na frigideira para formar as panquecas.",
      "Cozinhe por cerca de 2-3 minutos de cada lado, ou até que as panquecas estejam douradas e cozidas por dentro.",
      "Sirva suas panquecas de maçã e canela com uma pitada adicional de canela por cima, se desejar.",
    ],
  },
  {
    title: "Panqueca Recheada Low Carb",
    icon: Info,
    ingredients: [
      "2 ovos",
      "2 colheres de sopa de creme de leite",
      "1 colher de sopa de farinha de amêndoas",
      "1 colher de sopa de queijo parmesão ralado",
      "1/4 colher de chá de fermento em pó",
      "Sal e pimenta a gosto",
      "100g de peito de frango cozido e desfiado (ou outra proteína de sua preferência)",
      "1/4 xícara de queijo ralado para o recheio (opcional)",
      "1/4 xícara de molho de tomate sem açúcar (opcional)",
    ],
    preparation: [
      "Prepare a massa: Em uma tigela, bata os ovos e misture com o creme de leite. Adicione a farinha de amêndoas, o queijo parmesão, o fermento, o sal e a pimenta. Misture bem até obter uma massa homogênea.",
      "Cozinhe a panqueca: Aqueça uma frigideira antiaderente em fogo médio. Despeje um pouco da massa na frigideira e espalhe para formar uma panqueca fina. Cozinhe por 2-3 minutos ou até que comece a soltar das bordas e fique dourada. Vire e cozinhe o outro lado por mais 1-2 minutos. Retire e reserve. Repita com a massa restante.",
      "Prepare o recheio: Se desejar, misture o peito de frango desfiado com o queijo ralado e o molho de tomate.",
      "Monte a panqueca: Coloque uma porção do recheio no centro de cada panqueca. Dobre as bordas e enrole a panqueca como um rocambole.",
      "Finalize (opcional): Se quiser, você pode colocar as panquecas em uma assadeira, cobrir com um pouco mais de molho de tomate e queijo, e levar ao forno pré-aquecido a 180°C por 10-15 minutos, até o queijo derreter e a panqueca estar bem aquecida.",
    ],
  },
];

export default function PanquecasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
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
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Panquecas Low Carb</CardTitle>
            <CardDescription className="font-display text-lg text-foreground/90">Deliciosas e fáceis de fazer.</CardDescription>
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
                <p className="font-display text-foreground/80">Nenhuma receita de panqueca disponível no momento.</p>
            )}
            </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );
}
