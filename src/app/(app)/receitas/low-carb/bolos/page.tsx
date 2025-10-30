
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cake, Carrot, Apple, Citrus, Banana } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/Header';

const recipes = [
  {
    title: "Bolo de Cenoura Low Carb",
    icon: Carrot,
    kcal: "165",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "2 cenouras médias raladas",
        "4 ovos",
        "1/2 xícara de óleo de coco ou manteiga derretida",
        "1/2 xícara de adoçante eritritol ou xilitol (ajuste ao seu gosto)",
        "1 xícara de farinha de amêndoas",
        "1/2 xícara de farinha de coco",
        "1 colher de chá de fermento em pó",
        "1 colher de chá de canela em pó (opcional)",
        "1/2 colher de chá de sal",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma com óleo de coco ou manteiga.",
        "Em uma tigela grande, bata os ovos com o adoçante até obter uma mistura homogênea.",
        "Adicione o óleo de coco ou manteiga derretida e misture bem. Incorpore as cenouras raladas.",
        "Em outra tigela, misture a farinha de amêndoas, a farinha de coco, o fermento em pó, a canela e o sal.",
        "Adicione os ingredientes secos à mistura de cenoura e ovos, mexendo até que tudo esteja bem combinado.",
        "Despeje a massa na forma untada e alise a superfície com uma espátula.",
        "Asse no forno por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo de Chocolate Low Carb",
    icon: Cake,
    kcal: "150",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "4 ovos",
        "1/2 xícara de óleo de coco ou manteiga derretida",
        "1/2 xícara de adoçante eritritol ou xilitol (ajuste ao seu gosto)",
        "1 xícara de farinha de amêndoas",
        "1/4 xícara de cacau em pó sem açúcar",
        "1/2 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1/4 colher de chá de sal",
        "1 colher de chá de essência de baunilha (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma com óleo de coco ou manteiga.",
        "Em uma tigela grande, bata os ovos com o adoçante até obter uma mistura homogênea.",
        "Adicione o óleo de coco ou manteiga derretida e a essência de baunilha, se estiver usando, e misture bem.",
        "Em outra tigela, combine a farinha de amêndoas, o cacau em pó, o fermento em pó, o bicarbonato de sódio e o sal.",
        "Misture os ingredientes secos na mistura de ovos até obter uma massa homogênea.",
        "Despeje a massa na forma untada e alise a superfície com uma espátula.",
        "Asse no forno por cerca de 25-30 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo de Maçã Low Carb",
    icon: Apple,
    kcal: "195",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "2 maçãs médias (de preferência verdes, pois têm menos açúcar)",
        "4 ovos",
        "1/2 xícara de óleo de coco ou manteiga derretida",
        "1/2 xícara de adoçante eritritol ou xilitol (ajuste ao seu gosto)",
        "1 xícara de farinha de amêndoas",
        "1/4 xícara de farinha de coco",
        "1 colher de chá de fermento em pó",
        "1 colher de chá de canela em pó",
        "1/2 colher de chá de sal",
        "1/4 xícara de nozes picadas (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma com óleo de coco ou manteiga.",
        "Descasque e rale as maçãs, retirando o excesso de suco. Reserve.",
        "Em uma tigela grande, bata os ovos com o adoçante até obter uma mistura homogênea.",
        "Adicione o óleo de coco ou manteiga derretida e misture bem.",
        "Em outra tigela, combine a farinha de amêndoas, a farinha de coco, o fermento em pó, a canela e o sal.",
        "Misture os ingredientes secos na mistura de ovos até obter uma massa homogênea.",
        "Adicione as maçãs raladas à massa e misture bem. Se desejar, adicione as nozes picadas.",
        "Despeje a massa na forma untada e alise a superfície com uma espátula.",
        "Asse no forno por cerca de 35-40 minutos, ou até que um palito inserido no centro saia limpo.",
    ],
  },
  {
    title: "Bolo de Limão Low Carb",
    icon: Citrus,
    kcal: "140",
    timing: "30 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "3 ovos",
        "1/2 xícara de óleo de coco ou manteiga derretida",
        "1/2 xícara de adoçante eritritol ou xilitol (ajuste ao seu gosto)",
        "1 xícara de farinha de amêndoas",
        "1/4 xícara de farinha de coco",
        "1 colher de chá de fermento em pó",
        "1/4 colher de chá de bicarbonato de sódio",
        "1/4 colher de chá de sal",
        "Raspas de 1 limão",
        "Suco de 1 limão",
        "1 colher de chá de essência de baunilha (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma com óleo de coco ou manteiga.",
        "Em uma tigela grande, bata os ovos com o adoçante até obter uma mistura homogênea.",
        "Adicione o óleo de coco ou manteiga derretida, o suco de limão, as raspas de limão e a essência de baunilha, se estiver usando, e misture bem.",
        "Em outra tigela, combine a farinha de amêndoas, a farinha de coco, o fermento em pó, o bicarbonato de sódio e o sal.",
        "Misture os ingredientes secos na mistura de ovos até obter uma massa homogênea.",
        "Despeje a massa na forma untada e alise a superfície com uma espátula.",
        "Asse no forno por cerca de 25-30 minutos, ou até que um palito inserido no centro saia limpo.",
    ],
  },
  {
    title: "Bolo de Banana Low Carb",
    icon: Banana,
    kcal: "180",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "3 bananas maduras (quanto mais maduras, melhor, pois são mais doces)",
        "3 ovos",
        "1/2 xícara de farinha de amêndoas",
        "1/4 xícara de farinha de coco",
        "1/4 xícara de óleo de coco (ou manteiga derretida)",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1/2 colher de chá de canela em pó (opcional)",
        "1 pitada de sal",
        "Adoçante a gosto (opcional, como eritritol ou stevia)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma de bolo com óleo de coco ou manteiga.",
        "Amasse as bananas em uma tigela grande até obter um purê.",
        "Adicione os ovos ao purê de banana e misture bem.",
        "Incorpore o óleo de coco (ou manteiga derretida) à mistura.",
        "Em outra tigela, misture a farinha de amêndoas, a farinha de coco, o fermento em pó, o bicarbonato de sódio, a canela (se estiver usando), e o sal.",
        "Adicione os ingredientes secos aos ingredientes úmidos e misture até ficar homogêneo. Se desejar um bolo mais doce, adicione adoçante a gosto.",
        "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
        "Leve ao forno por aproximadamente 25-30 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar um pouco antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo de Coco Low Carb",
    icon: Cake,
    kcal: "260",
    timing: "50 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "1 xícara de farinha de coco",
        "1/2 xícara de farinha de amêndoas",
        "1/2 xícara de óleo de coco (ou manteiga derretida)",
        "4 ovos",
        "1/2 xícara de leite de coco",
        "1/4 xícara de adoçante (eritritol ou stevia, a gosto)",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1/4 colher de chá de sal",
        "1/2 colher de chá de essência de baunilha (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma de bolo com óleo de coco ou manteiga.",
        "Misture os ingredientes secos: farinha de coco, farinha de amêndoas, fermento em pó, bicarbonato de sódio e sal em uma tigela.",
        "Em outra tigela, bata os ovos, o leite de coco, o óleo de coco e o adoçante até ficar bem misturado.",
        "Adicione a essência de baunilha se estiver usando.",
        "Incorpore os ingredientes secos aos ingredientes úmidos e misture até formar uma massa homogênea.",
        "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
        "Leve ao forno por aproximadamente 30-35 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo de Morango Low Carb",
    icon: Cake,
    kcal: "240",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "1 xícara de farinha de amêndoas",
        "1/4 xícara de farinha de coco",
        "1/2 xícara de óleo de coco (ou manteiga derretida)",
        "3 ovos",
        "1/2 xícara de leite de coco",
        "1/2 xícara de morangos frescos, picados",
        "1/4 xícara de adoçante (eritritol ou stevia, a gosto)",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1/4 colher de chá de sal",
        "1/2 colher de chá de essência de baunilha (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma de bolo com óleo de coco ou manteiga.",
        "Misture os ingredientes secos: farinha de amêndoas, farinha de coco, fermento em pó, bicarbonato de sódio e sal em uma tigela.",
        "Em outra tigela, bata os ovos, o leite de coco, o óleo de coco e o adoçante até ficar homogêneo.",
        "Adicione a essência de baunilha se estiver usando.",
        "Incorpore os ingredientes secos aos ingredientes úmidos e misture até formar uma massa homogênea.",
        "Adicione os morangos picados à massa e mexa delicadamente para distribuí-los uniformemente.",
        "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
        "Leve ao forno por aproximadamente 30-35 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar um pouco antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo de Aipim/Mandioca Fit",
    icon: Cake,
    kcal: "230",
    timing: "50 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "2 xícaras de aipim ralado (previamente cozido e escorrido)",
        "1/2 xícara de farinha de amêndoas",
        "1/4 xícara de farinha de coco",
        "1/2 xícara de óleo de coco (ou manteiga derretida)",
        "3 ovos",
        "1/2 xícara de adoçante (eritritol ou stevia, a gosto)",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1/4 colher de chá de sal",
        "1 colher de chá de essência de baunilha (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma de bolo com óleo de coco ou manteiga.",
        "Rale o aipim e cozinhe até que esteja macio. Deixe esfriar e depois escorra bem para remover o excesso de água. Se estiver muito úmido, você pode apertar o aipim em um pano limpo.",
        "Misture os ingredientes secos: farinha de amêndoas, farinha de coco, fermento em pó, bicarbonato de sódio e sal em uma tigela.",
        "Em outra tigela, bata os ovos, o óleo de coco e o adoçante até ficar homogêneo. Adicione a essência de baunilha se estiver usando.",
        "Incorpore os ingredientes secos aos ingredientes úmidos e misture bem.",
        "Adicione o aipim ralado à massa e misture até que esteja bem distribuído.",
        "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
        "Leve ao forno por aproximadamente 40-45 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar um pouco antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo Low Carb de Maçã e Canela",
    icon: Apple,
    kcal: "160",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "2 maçãs médias, descascadas e cortadas em cubos pequenos (use maçãs verdes para menos açúcar)",
        "3 ovos",
        "1/2 xícara de farinha de amêndoas",
        "1/4 xícara de farinha de coco",
        "1/4 xícara de adoçante (eritritol, xilitol ou stevia, a gosto)",
        "1/2 xícara de iogurte grego sem açúcar",
        "1/4 xícara de óleo de coco (ou manteiga derretida)",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1 colher de chá de canela em pó",
        "1/4 colher de chá de sal",
        "1/2 colher de chá de essência de baunilha (opcional)",
    ],
    preparation: [
        "Pré-aqueça o forno a 180°C e unte uma forma de bolo com óleo de coco ou manteiga.",
        "Prepare as maçãs: Descasque e corte em cubos pequenos. Se desejar, pode polvilhar um pouco de canela nas maçãs para um sabor extra.",
        "Misture os ingredientes secos: farinha de amêndoas, farinha de coco, fermento em pó, bicarbonato de sódio, canela e sal em uma tigela.",
        "Em outra tigela, bata os ovos, o iogurte grego, o óleo de coco e o adoçante até obter uma mistura homogênea.",
        "Adicione a essência de baunilha, se estiver usando.",
        "Incorpore os ingredientes secos aos ingredientes úmidos e misture bem.",
        "Adicione as maçãs picadas à massa e misture delicadamente para distribuí-las.",
        "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
        "Leve ao forno por aproximadamente 35-40 minutos, ou até que um palito inserido no centro saia limpo.",
        "Deixe esfriar antes de desenformar e servir.",
    ],
  },
  {
    title: "Bolo de Fubá Low Carb",
    icon: Cake,
    kcal: "130",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
        "1 xícara de farinha de amêndoas",
        "1/2 xícara de fubá de milho (use o fubá de milho fininho, de preferência sem açúcar e com baixo índice glicêmico)",
        "1/4 xícara de farinha de coco",
        "1/2 xícara de adoçante eritritol ou xilitol (ajuste ao seu gosto)",
        "1/2 xícara de óleo de coco",
        "3 ovos",
        "1/2 xícara de leite de amêndoas ou outro leite vegetal sem açúcar",
        "1 colher de sopa de fermento em pó",
        "1 colher de chá de essência de baunilha (opcional)",
        "Pitada de sal",
    ],
    preparation: [
        "Preaqueça o forno a 180°C e unte uma forma de bolo com óleo de coco ou forre com papel manteiga.",
        "Misture os ingredientes secos: Em uma tigela grande, combine a farinha de amêndoas, o fubá, a farinha de coco, o adoçante, o fermento em pó e o sal.",
        "Misture os ingredientes molhados: Em outra tigela, bata os ovos e adicione o óleo de coco, o leite de amêndoas e a essência de baunilha.",
        "Combine as misturas: Adicione a mistura de ingredientes molhados aos ingredientes secos e mexa até que a massa fique homogênea.",
        "Despeje a massa na forma preparada e alise a superfície.",
        "Asse por aproximadamente 30-35 minutos, ou até que um palito inserido no centro do bolo saia limpo.",
        "Deixe esfriar um pouco antes de desenformar e servir.",
    ],
  },
];

export default function BolosPage() {
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
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Bolos Low Carb</CardTitle>
            <CardDescription className="font-display text-lg text-foreground/90">Opções saudáveis para o seu café.</CardDescription>
            </CardHeader>
            <CardContent>
            {recipes.length > 0 ? (
                <Accordion type="multiple" className="w-full space-y-4">
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
                <p className="font-display text-foreground/80">Nenhuma receita de bolo disponível no momento.</p>
            )}
            </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );
}
