
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Pizza, Drumstick, UtensilsCrossed, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/Header';

const recipes = [
  {
    title: "Coxinha Low Carb",
    icon: Drumstick,
    ingredients: [
      "2 xícaras de farinha de amêndoas",
      "1/2 xícara de queijo parmesão ralado",
      "2 ovos",
      "1/4 xícara de água",
      "1 colher de chá de fermento em pó",
      "Sal a gosto",
      "300g de peito de frango desfiado",
      "1 cebola pequena picada",
      "2 dentes de alho picados",
      "1 tomate picado",
      "1/2 xícara de azeitonas verdes ou pretas picadas",
      "1/4 xícara de queijo cream cheese",
      "Sal e pimenta a gosto",
      "Cheiro-verde a gosto",
      "1 ovo batido",
      "Farinha de coco (para empanar)",
    ],
    preparation: [
      "Refogue a cebola e o alho até dourar. Adicione o tomate e cozinhe um pouco.",
      "Acrescente o frango desfiado, as azeitonas e o queijo cream cheese. Tempere com sal, pimenta e cheiro-verde. Cozinhe até o cream cheese incorporar bem e reserve.",
      "Em uma tigela, misture a farinha de amêndoas, queijo parmesão, fermento e sal. Adicione os ovos e a água, misturando até formar uma massa homogênea.",
      "Modele a massa em pequenos discos, coloque uma colher do recheio no centro e feche formando coxinhas.",
      "Passe as coxinhas no ovo batido e depois na farinha de coco.",
      "Coloque as coxinhas em uma assadeira forrada com papel manteiga e asse em forno pré-aquecido a 180°C por 20-25 minutos, ou até dourar.",
    ],
  },
  {
    title: "Pizza Low Carb",
    icon: Pizza,
    ingredients: [
      "1 1/2 xícaras de farinha de amêndoas",
      "1/2 xícara de queijo parmesão ralado",
      "1 ovo",
      "1/4 xícara de queijo cream cheese",
      "1/2 colher de chá de fermento em pó",
      "Sal e pimenta a gosto",
      "1/2 xícara de molho de tomate sem açúcar",
      "1 xícara de queijo muçarela ralado",
      "Ingredientes à escolha para cobertura (pepperoni, azeitonas, pimentões, cogumelos, etc.)",
      "Ervas secas (orégano, manjericão) a gosto",
    ],
    preparation: [
      "Preaqueça o forno a 180°C.",
      "Misture a farinha de amêndoas, queijo parmesão, fermento, sal e pimenta. Adicione o ovo e o queijo cream cheese, misturando até formar uma massa homogênea.",
      "Forre uma assadeira com papel manteiga e espalhe a massa, moldando-a no formato de uma pizza.",
      "Asse a massa por 10-15 minutos, até começar a dourar.",
      "Retire a massa do forno, espalhe o molho de tomate, adicione o queijo muçarela e os ingredientes de sua escolha. Polvilhe com ervas secas.",
      "Volte ao forno e asse por mais 10-15 minutos, até o queijo derreter e dourar.",
      "Deixe esfriar por alguns minutos antes de cortar e servir.",
    ],
  },
  {
    title: "Esfirra Low Carb",
    icon: UtensilsCrossed,
    ingredients: [
      "2 xícaras de farinha de amêndoas",
      "1/4 de xícara de farinha de coco",
      "1/2 colher de chá de fermento em pó",
      "1/4 de colher de chá de sal",
      "2 ovos",
      "1/4 de xícara de óleo",
      "300 g de carne moída",
      "1 cebola pequena, picada",
      "1 tomate picado",
      "Sal e pimenta a gosto",
    ],
    preparation: [
        "Preparar a Mistura: Preaqueça o forno a 180°C. Misture a farinha de amêndoas, farinha de coco, fermento e sal em uma tigela.Adicione os ovos e o óleo. Misture até formar uma massa homogênea.",
        "Preparar o Recheio: Refogue a cebola até ficar transparente. Adicione a carne moída e cozinhe até dourar. Misture o tomate picado, tempere com sal e pimenta e cozinhe por mais alguns minutos até o líquido reduzir.",
        "Montar as Esfihas: Divida a massa em pequenas porções e abra cada uma em discos. Coloque uma colher de sopa do recheio no centro de cada disco. Dobre as bordas para cobrir o recheio e formar pequenos triângulos ou pacotinhos.",
        "Assar: Coloque as esfihas em uma assadeira e asse por 15-20 minutos, até que estejam douradas.",
    ],
  },
  {
    title: "Torta de Frango Low Carb",
    icon: PieChart,
    ingredients: [
      "2 xícaras de farinha de amêndoas",
      "1/4 xícara de farinha de coco",
      "1/4 xícara de óleo de coco ou manteiga",
      "1 ovo",
      "1/4 colher de chá de sal",
      "300 g de peito de frango cozido e desfiado",
      "1 cebola pequena, picada",
      "1 tomate picado",
      "1/2 xícara de creme de leite",
      "1/2 xícara de queijo ralado (opcional)",
      "Sal e pimenta a gosto",
    ],
    preparation: [
        "Preaqueça o forno a 180°C.",
        "Prepare a Massa: Em uma tigela, misture a farinha de amêndoas, farinha de coco e sal. Adicione o óleo de coco ou manteiga e o ovo. Misture até formar uma massa homogênea. Pressione a massa em uma forma de torta, cobrindo o fundo e as laterais.",
        "Prepare o Recheio: Em uma frigideira, refogue a cebola até ficar transparente. Adicione o tomate e cozinhe por alguns minutos. Adicione o frango desfiado, creme de leite, queijo ralado (se usar), sal e pimenta. Misture bem até o recheio estar bem combinado e quente.",
        "Monte e Asse: Despeje o recheio na massa. Asse por 30-40 minutos, ou até que a massa esteja dourada e o recheio esteja firme.",
    ],
  },
  {
    title: "Empada Low Carb",
    icon: PieChart,
    ingredients: [
      "1 ½ xícara de farinha de amêndoas",
      "¼ xícara de farinha de coco",
      "1 ovo",
      "3 colheres de sopa de manteiga derretida",
      "1 colher de sopa de psyllium em pó",
      "½ colher de chá de fermento em pó",
      "Sal a gosto",
      "200g de peito de frango desfiado",
      "1 cebola pequena picada",
      "2 dentes de alho picados",
      "1 tomate picado",
      "½ xícara de azeitonas verdes ou pretas picadas",
      "½ xícara de creme de leite",
      "1 colher de sopa de azeite de oliva",
      "Sal e pimenta a gosto",
      "Ervas finas (opcional)",
    ],
    preparation: [
        "Preparar a massa: Em uma tigela, misture a farinha de amêndoas, a farinha de coco, o psyllium e o fermento em pó. Adicione o ovo e a manteiga derretida, misturando até obter uma massa homogênea. Tempere com sal a gosto e ajuste a textura com mais farinha de amêndoas se necessário. Leve a massa à geladeira por cerca de 30 minutos para facilitar o manuseio.",
        "Preparar o recheio: Em uma panela, aqueça o azeite e refogue a cebola e o alho até ficarem macios. Adicione o tomate e cozinhe até que esteja bem desfeito. Misture o frango desfiado e as azeitonas. Cozinhe por mais alguns minutos. Acrescente o creme de leite, ajuste o sal e a pimenta e adicione as ervas finas, se estiver usando. Cozinhe até o recheio estar bem incorporado e cremoso. Deixe esfriar um pouco.",
        "Montar a empada: Preaqueça o forno a 180°C. Abra a massa em uma superfície enfarinhada com farinha de amêndoas até obter a espessura desejada. Forre forminhas de empada com a massa, pressionando bem nas laterais. Coloque o recheio nas forminhas. Com o restante da massa, faça tampas para as empadas ou decore a gosto. Asse por 20-25 minutos, ou até que a massa esteja dourada.",
        "Servir: Deixe esfriar um pouco antes de desenformar. Sirva quente ou em temperatura ambiente.",
    ],
  },
  {
    title: "Tortinha de Brócolis Low Carb",
    icon: PieChart,
    ingredients: [
      "1 ½ xícara de farinha de aveia (ou farinha integral)",
      "¼ xícara de farinha de amêndoas (opcional, para textura mais macia)",
      "1 ovo",
      "3 colheres de sopa de azeite de oliva",
      "1 colher de chá de fermento em pó",
      "Sal a gosto",
      "2 colheres de sopa de água (se necessário, para dar liga)",
      "2 xícaras de brócolis picados",
      "1 cebola pequena picada",
      "2 dentes de alho picados",
      "½ xícara de queijo cottage ou ricota",
      "2 ovos",
      "¼ xícara de leite desnatado ou leite vegetal",
      "Sal e pimenta a gosto",
      "1 colher de chá de orégano ou ervas finas (opcional)",
      "1 colher de sopa de azeite de oliva",
    ],
    preparation: [
        "Preparar a massa: Preaqueça o forno a 180°C. Em uma tigela, misture a farinha de aveia, a farinha de amêndoas, o fermento e o sal. Adicione o ovo e o azeite, misturando bem até formar uma massa homogênea. Se a massa estiver seca, adicione água aos poucos. Pressione a massa nas forminhas de torta, cobrindo o fundo e as laterais. Reserve.",
        "Preparar o recheio: Cozinhe o brócolis em água salgada por cerca de 3-4 minutos até que fique macio, depois escorra e corte em pedaços pequenos. Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até ficarem dourados. Adicione o brócolis e refogue por mais alguns minutos. Tempere com sal, pimenta e ervas finas, se estiver usando. Em uma tigela, bata os ovos e misture o queijo cottage ou ricota, o leite, e o refogado de brócolis. Ajuste o tempero conforme necessário. Despeje o recheio sobre as massas preparadas.",
        "Assar: Leve as tortinhas ao forno e asse por cerca de 20-25 minutos, ou até que o recheio esteja firme e a massa dourada.",
        "Servir: Deixe esfriar um pouco antes de desenformar. Sirva quente ou em temperatura ambiente.",
    ],
  },
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
];

export default function SalgadosPage() {
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
      </main>
    </div>
  );
}
