
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Clock, Leaf, Flame, Wind, Coffee, Sprout } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/Header';

const teas = [
  {
    title: "Chá Verde com Gengibre e Limão",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Coffee,
    ingredients: [
      "1 saquinho de chá verde",
      "1 colher de chá de gengibre fresco ralado",
      "Suco de meio limão",
      "Mel a gosto (opcional)",
    ],
    preparation: [
      "Ferva uma xícara de água.",
      "Adicione o saquinho de chá verde e o gengibre ralado à água quente. Deixe em infusão por 3-5 minutos.",
      "Retire o saquinho de chá e adicione o suco de limão.",
      "Se desejar, adoce com mel a gosto.",
    ],
  },
  {
    title: "Chá de Hibisco",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "1 colher de sopa de flores secas de hibisco",
      "1 xícara de água fervente",
      "Opcional: fatias de limão, canela ou adoçante natural a gosto",
    ],
    preparation: [
      "Ferva uma xícara de água.",
      "Adicione as flores secas de hibisco à água quente.",
      "Deixe em infusão por cerca de 5 a 10 minutos.",
      "Coe o chá e, se desejar, adicione fatias de limão, canela ou adoçante natural para melhorar o sabor.",
    ],
  },
  {
    title: "Chá Zero Pochete",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Wind,
    ingredients: [
      "1 colher de sopa de capim-cidreira (folhas secas)",
      "1 colher de chá de camomila (flores secas)",
      "1 limão (cortado em rodelas)",
      "1 pau de canela",
      "4 cravos-da-índia",
    ],
    preparation: [
      "Ferva 500ml de água em uma chaleira.",
      "Quando a água estiver fervendo, adicione o capim-cidreira, a camomila, o limão, a canela e os cravos.",
      "Deixe a mistura ferver por cerca de 5 a 7 minutos.",
      "Retire a chaleira do fogo e deixe o chá descansar por mais 5 minutos.",
      "Coe o chá para remover os ingredientes sólidos.",
      "Sirva o chá na xícara e aproveite!",
    ],
  },
  {
    title: "Chá de Banana",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Flame,
    ingredients: [
      "1 Banana madura",
      "2 Xícaras de água",
      "Uma Colher (Sopa) de cravo da Índia",
    ],
    preparation: [
      "Ferva as 2 xícaras de água em uma panela.",
      "Enquanto a água ferve. Lave bem a banana para remover a sujeira e detritos",
      "Após lavar a banana, corte ela em rodelas (não retirar a casca)",
      "Adicione a banana em rodelas e a colher de cravo na panela e deixe ferver por aproximadamente 10 a 15 minutos",
      "Após ferver deixe descansar por mais 15 minutos",
      "Despeje o chá em uma xícara e pode ir tomando meio litro por dia durante 15 Dias",
    ],
  },
  {
    title: "Super Chá com Folha de Louro",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "3 cravos-da-índia",
      "1 pau de canela",
      "2 folhas de louro",
      "500 ml de água",
    ],
    preparation: [
      "Ferva a água em uma chaleira.",
      "Quando a água estiver fervendo, adicione os cravos-da-índia, o pau de canela e as folhas de louro.",
      "Deixe os ingredientes fervendo por cerca de 5 a 10 minutos.",
      "Desligue o fogo e tampe a chaleira.",
      "Deixe o chá em infusão por mais 5 minutos.",
      "Coe o chá em uma xícara antes de consumir.",
    ],
  },
  {
    title: "Chá Poderoso de Cravo",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Flame,
    ingredients: [
      "1 Colher de Sobremesa de cravos-da-índia",
      "1 xícara de água",
      "1 fatia fina de limão",
      "1 Colher (Sopa) De gengibre ralado",
      "1 colher de chá de mel (opcional)",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione os cravos-da-índia e o gengibre ralado e a fatia de limão à água fervente.",
      "Deixe os ingredientes cozinharem na água por cerca de 5-10 minutos.",
      "Se preferir um pouco de doçura, adicione uma colher de chá de mel.",
      "Coe o chá e está pronto para ser consumido.",
    ],
  },
  {
    title: "Chá de Pepino - Para Retenção de Líquido",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Sprout,
    ingredients: [
      "1 litro de água",
      "1 colher de chá de gengibre ralado",
      "1 pepino médio, cortado em rodelas finas",
      "1 limão, cortado em rodelas finas",
      "12 folhas de hortelã",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione o gengibre ralado, as rodelas de pepino, as rodelas de limão e as folhas de hortelã à água fervente.",
      "Deixe ferver por cerca de 5 minutos.",
      "Retire do fogo e deixe repousar por mais 5 minutos.",
      "Coe o chá e sirva quente ou gelado.",
    ],
  },
  {
    title: "Chá de Dente de Leão - Retenção",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "1 colher de chá de raiz de dente-de-leão seca",
      "1 xícara de água fervente",
      "1 colher de chá de folhas de hortelã (opcional)",
    ],
    preparation: [
      "Coloque a raiz de dente-de-leão em uma xícara.",
      "Despeje a água fervente sobre a raiz.",
      "Adicione folhas de hortelã, se desejar, para um sabor fresco.",
      "Deixe a infusão descansar por 5-7 minutos.",
      "Coe o chá para remover a raiz de dente-de-leão.",
      "Aprecie este chá, que é conhecido por suas propriedades diuréticas, auxiliando na redução da retenção de líquidos.",
    ],
  },
  {
    title: "Chá Termogênico de Gengibre e Canela",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Flame,
    ingredients: [
      "1 colher de chá de gengibre fresco ralado",
      "1 pau de canela",
      "1 litro de água",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione o gengibre ralado e o pau de canela à água fervente.",
      "Deixe ferver por 5 minutos.",
      "Coe o chá antes de consumir.",
    ],
  },
  {
    title: "Chá Detox de Dente-de-Leão e Sálvia",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "1 colher de chá de folhas secas de dente-de-leão",
      "1 colher de chá de folhas secas de sálvia",
      "1 litro de água",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione as folhas de dente-de-leão e sálvia à água fervente.",
      "Deixe as folhas em infusão por 10 minutos.",
      "Coe e sirva quente ou gelado.",
    ],
  },
  {
    title: "Chá de Casca de Abacaxi e Hortelã",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Sprout,
    ingredients: [
      "Casca de meio abacaxi (bem lavada)",
      "1 litro de água",
      "Um punhado de folhas de hortelã",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione a casca de abacaxi à água fervente.",
      "Deixe ferver por 15 minutos.",
      "Acrescente as folhas de hortelã e deixe por mais 5 minutos.",
      "Coe o chá antes de servir.",
    ],
  },
  {
    title: "Chá de Casca de Maçã e Canela",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Flame,
    ingredients: [
      "Casca de 2 maçãs (bem lavadas)",
      "1 pau de canela",
      "1 litro de água",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione as cascas de maçã e o pau de canela à água fervente.",
      "Deixe ferver por 10 minutos.",
      "Coe o chá antes de consumir.",
    ],
  },
  {
    title: "Chá de Casca de Laranja e Erva-Cidreira",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "Casca de 2 laranjas (bem lavada)",
      "1 punhado de folhas de erva-cidreira",
      "1 litro de água",
    ],
    preparation: [
      "Ferva a água em uma panela.",
      "Adicione as cascas de laranja e as folhas de erva-cidreira à água fervente.",
      "Deixe ferver por 15 minutos.",
      "Coe o chá antes de consumir.",
    ],
  },
  {
    title: "Chá de Cúrcuma e Limão",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Coffee,
    ingredients: [
      "1 colher de chá de cúrcuma em pó",
      "Suco de meio limão",
      "1 colher de chá de mel (opcional)",
      "1 litro de água quente",
    ],
    preparation: [
      "Misture a cúrcuma em pó no litro de água quente.",
      "Adicione o suco de limão e misture bem.",
      "Se desejar, acrescente mel para adoçar.",
      "Mexa e deixe repousar por alguns minutos antes de consumir.",
    ],
  },
];

export default function ChasSecretosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
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
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Chás Secretos para Secar</CardTitle>
            <CardDescription className="font-display text-lg text-foreground/90">Descubra chás poderosos para acelerar seu metabolismo.</CardDescription>
            </CardHeader>
            <CardContent>
            <Accordion type="multiple" className="w-full space-y-4">
                {teas.map((tea, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-muted/30 rounded-lg px-4 border">
                    <AccordionTrigger className="font-headline text-xl hover:no-underline">
                    <div className="flex items-center gap-4">
                        <tea.icon className="h-6 w-6 text-primary" />
                        {tea.title}
                    </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                        <h4 className="font-bold font-headline text-primary mb-3">Ingredientes</h4>
                        <ul className="list-disc list-inside space-y-2 font-display text-foreground/80">
                            {tea.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                            ))}
                        </ul>
                        </div>
                        <div className="flex-1">
                        <h4 className="font-bold font-headline text-primary mb-3">Modo de Preparo</h4>
                        <ol className="list-decimal list-inside space-y-2 font-display text-foreground/80">
                            {tea.preparation.map((step, i) => (
                            <li key={i}>{step}</li>
                            ))}
                        </ol>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 text-xs text-muted-foreground mt-4">
                            <span><Clock className="inline mr-1 h-3 w-3" />{tea.timing}</span>
                            <span><Zap className="inline mr-1 h-3 w-3" />{tea.difficulty}</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );
}
