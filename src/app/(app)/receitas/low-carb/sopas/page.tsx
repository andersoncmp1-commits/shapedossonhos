
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Soup } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/Header';

const recipes = [
  {
    title: "Sopa de Legumes com Frango Desfiado",
    icon: Soup,
    ingredients: [
      "1 peito de frango cozido e desfiado",
      "2 cenouras em cubos",
      "1 abobrinha em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 tomate sem pele e sem sementes, picado",
      "1 xícara de couve-flor em floretes",
      "1 litro de caldo de galinha caseiro (ou água)",
      "Sal e pimenta a gosto",
      "Folhas de manjericão fresco para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho até dourarem.",
      "Adicione o frango desfiado e mexa por alguns minutos.",
      "Acrescente a cenoura, abobrinha, tomate e couve-flor.",
      "Cozinhe por mais alguns minutos.",
      "Despeje o caldo de galinha na panela. Tempere com sal e pimenta a gosto.",
      "Deixe a sopa ferver e, em seguida, reduza o fogo. Cozinhe até os legumes ficarem macios.",
      "Ao servir, adicione folhas de manjericão fresco para um toque de sabor.",
    ],
  },
  {
    title: "Canja de Galinha",
    icon: Soup,
    ingredients: [
      "1 peito de frango sem pele",
      "1 cebola média, picada",
      "2 dentes de alho, picados",
      "2 cenouras, descascadas e cortadas em rodelas",
      "1 talo de aipo, picado",
      "1 xícara de arroz integral",
      "6 xícaras de caldo de galinha caseiro (sem adição de sal)",
      "1 colher de chá de azeite de oliva",
      "Sal e pimenta a gosto",
      "Salsa fresca picada para decorar",
    ],
    preparation: [
      "Em uma panela grande, aqueça o azeite de oliva em fogo médio.",
      "Adicione a cebola e o alho e refogue até que fiquem dourados. Acrescente o peito de frango e doure de ambos os lados.",
      "Adicione as cenouras, o aipo e o caldo de galinha à panela. Deixe ferver e reduza o fogo para médio-baixo.",
      "Cozinhe por cerca de 20 minutos, até que o frango esteja cozido e os legumes estejam macios.",
      "Retire o frango da panela e desfie-o em pedaços pequenos. Retorne o frango desfiado à panela e adicione o arroz integral.",
      "Cozinhe por mais 15-20 minutos, até que o arroz esteja cozido.",
      "Tempere com sal e pimenta a gosto.",
      "Sirva a canja quente, decorada com salsa fresca picada.",
    ],
  },
  {
    title: "Sopa de Agrião e Brócolis",
    icon: Soup,
    ingredients: [
      "1 maço de agrião, lavado e picado",
      "1 maço de brócolis, separado em floretes",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 batata-doce pequena, descascada e em cubos (opcional)",
      "1 litro de caldo de legumes",
      "Sal e pimenta a gosto",
      "Azeite de oliva para refogar",
      "Sementes de abóbora torradas para decorar (opcional)",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho em um pouco de azeite de oliva até dourarem.",
      "Adicione os brócolis e a batata-doce (se estiver usando). Refogue por alguns minutos.",
      "Despeje o caldo de legumes na panela. Tempere com sal e pimenta a gosto.",
      "Deixe ferver e, em seguida, reduza o fogo. Cozinhe até os vegetais ficarem macios.",
      "Adicione o agrião e cozinhe por mais alguns minutos até que esteja murchando.",
      "Use um liquidificador ou mixer para obter uma consistência mais cremosa, se preferir.",
      "Sirva quente, decorado com sementes de abóbora torradas, se desejar.",
    ],
  },
  {
    title: "Sopa de Lentilhas com Vegetais",
    icon: Soup,
    ingredients: [
      "1 xícara de lentilhas secas, lavadas e escorridas",
      "1 cenoura em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 talo de aipo picado",
      "1 batata média em cubos",
      "1 tomate sem pele e sem sementes, picado",
      "1 folha de louro",
      "1 colher de chá de cominho em pó",
      "1 colher de chá de páprica",
      "4 xícaras de caldo de legumes",
      "Sal e pimenta a gosto",
      "Azeite de oliva para refogar",
      "Salsa fresca picada para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho em azeite de oliva até ficarem dourados.",
      "Adicione a cenoura, aipo, batata e tomate. Mexa e cozinhe por alguns minutos.",
      "Acrescente as lentilhas, o louro, o cominho, a páprica e tempere com sal e pimenta a gosto.",
      "Despeje o caldo de legumes na panela. Deixe ferver e reduza o fogo para cozinhar até que as lentilhas estejam macias.",
      "Retire a folha de louro e ajuste o tempero, se necessário.",
      "Sirva quente, polvilhado com salsa fresca.",
    ],
  },
  {
    title: "Sopa de Frango com Vegetais",
    icon: Soup,
    ingredients: [
      "1 peito de frango cozido e desfiado",
      "1 cenoura em rodelas",
      "1 abobrinha em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 batata em cubos",
      "1 xícara de brócolis em floretes",
      "1 litro de caldo de galinha",
      "Sal e pimenta a gosto",
      "Ervas frescas (como salsa ou cebolinha) para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho até dourarem.",
      "Adicione o frango desfiado e mexa por alguns minutos.",
      "Acrescente a cenoura, abobrinha, batata e brócolis.",
      "Cozinhe por mais alguns minutos.",
      "Despeje o caldo de galinha na panela. Tempere com sal e pimenta a gosto.",
      "Deixe a sopa ferver e, em seguida, reduza o fogo. Cozinhe até os legumes ficarem macios.",
      "Ao servir, adicione ervas frescas para um toque de sabor.",
    ],
  },
  {
    title: "Sopa de Tomate com Quinoa e Espinafre",
    icon: Soup,
    ingredients: [
      "1 lata de tomate pelado (400g)",
      "1/2 xícara de quinoa lavada",
      "2 xícaras de espinafre fresco, lavado e picado",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 cenoura em cubos",
      "1 litro de caldo de legumes",
      "1 colher de chá de orégano",
      "Sal e pimenta a gosto",
      "Azeite de oliva para refogar",
      "Queijo parmesão ralado para servir (opcional)",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho em azeite de oliva até dourarem.",
      "Adicione a cenoura e continue refogando por alguns minutos.",
      "Despeje o tomate pelado na panela, esmagando-o com uma colher. Mexa bem.",
      "Adicione a quinoa, o caldo de legumes, o orégano, sal e pimenta. Deixe ferver.",
      "Reduza o fogo e cozinhe até a quinoa ficar macia, geralmente em torno de 15-20 minutos.",
      "Adicione o espinafre e cozinhe até que ele murche.",
      "Ajuste o tempero conforme necessário.",
      "Sirva quente, com queijo parmesão ralado por cima, se desejar.",
    ],
  },
  {
    title: "Sopa de Abóbora com Gengibre e Cenoura",
    icon: Soup,
    ingredients: [
      "500g de abóbora descascada e em cubos",
      "2 cenouras em rodelas",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 colher de chá de gengibre fresco ralado",
      "1 batata média em cubos (opcional)",
      "1 litro de caldo de legumes",
      "Sal e pimenta a gosto",
      "1 colher de sopa de azeite de oliva",
      "Sementes de abóbora torradas para decorar (opcional)",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho no azeite de oliva até dourarem.",
      "Adicione a abóbora, cenouras e batata (se estiver usando).",
      "Refogue por alguns minutos. Acrescente o gengibre fresco e misture bem.",
      "Despeje o caldo de legumes na panela. Tempere com sal e pimenta a gosto.",
      "Deixe ferver e, em seguida, reduza o fogo. Cozinhe até que os legumes estejam macios.",
      "Use um liquidificador ou mixer para obter uma consistência mais cremosa, se preferir.",
      "Ajuste o tempero conforme necessário.",
      "Sirva quente, decorado com sementes de abóbora torradas, se desejar.",
    ],
  },
  {
    title: "Sopa de Ervilha com Frango",
    icon: Soup,
    ingredients: [
      "1 peito de frango cozido e desfiado",
      "2 xícaras de ervilhas frescas ou congeladas",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 cenoura em cubos",
      "1 batata em cubos",
      "1 litro de caldo de galinha",
      "Sal e pimenta a gosto",
      "Folhas de hortelã para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho até dourarem.",
      "Adicione o frango desfiado e mexa por alguns minutos.",
      "Acrescente as ervilhas, a cenoura e a batata. Cozinhe por mais alguns minutos.",
      "Despeje o caldo de galinha na panela. Tempere com sal e pimenta a gosto.",
      "Deixe a sopa ferver e, em seguida, reduza o fogo. Cozinhe até que os legumes estejam macios.",
      "Ao servir, adicione folhas de hortelã fresca para um toque de sabor.",
    ],
  },
  {
    title: "Sopa de Feijão com Legumes",
    icon: Soup,
    ingredients: [
      "1 xícara de feijão (preto, carioca, ou de sua preferência), deixado de molho por algumas horas",
      "1 cenoura em rodelas",
      "1 abobrinha em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 batata em cubos",
      "1 tomate sem pele e sem sementes, picado",
      "1 litro de caldo de legumes",
      "Sal e pimenta a gosto",
      "1 colher de chá de cominho em pó",
      "1 colher de chá de páprica",
      "Azeite de oliva para refogar",
      "Salsa fresca picada para finalizar",
    ],
    preparation: [
      "Cozinhe o feijão até que esteja macio, seguindo as instruções da embalagem.",
      "Em uma panela, refogue a cebola e o alho em azeite de oliva até dourarem.",
      "Adicione a cenoura, abobrinha, batata e tomate. Refogue por alguns minutos.",
      "Acrescente o feijão cozido, o caldo de legumes, o cominho, a páprica, sal e pimenta. Deixe ferver.",
      "Reduza o fogo e cozinhe até que os legumes estejam macios. Ajuste o tempero conforme necessário.",
      "Sirva quente, polvilhado com salsa fresca.",
    ],
  },
  {
    title: "Sopa de Quinoa com Vegetais",
    icon: Soup,
    ingredients: [
      "1 xícara de quinoa lavada",
      "1 cenoura em cubos",
      "1 abobrinha em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 tomate sem pele e sem sementes, picado",
      "1 litro de caldo de legumes",
      "Sal e pimenta a gosto",
      "1 colher de chá de azeite de oliva",
      "Ervas frescas (como coentro ou salsa) para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho no azeite de oliva até dourarem.",
      "Adicione a cenoura, abobrinha e tomate. Refogue por alguns minutos.",
      "Enxágue a quinoa e adicione à panela. Misture bem.",
      "Despeje o caldo de legumes na panela. Tempere com sal e pimenta a gosto.",
      "Deixe ferver e, em seguida, reduza o fogo. Cozinhe até que a quinoa e os vegetais estejam macios.",
      "Ajuste o tempero conforme necessário.",
      "Sirva quente, finalizando com ervas frescas.",
    ],
  },
  {
    title: "Sopa de Peixe com Vegetais",
    icon: Soup,
    ingredients: [
      "300g de filé de peixe branco (como linguado ou tilápia), cortado em pedaços",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 cenoura em rodelas",
      "1 abobrinha em cubos",
      "1 talo de aipo picado",
      "1 tomate sem pele e sem sementes, picado",
      "1 litro de caldo de peixe ou caldo de legumes",
      "Suco de meio limão",
      "Sal e pimenta a gosto",
      "1 colher de sopa de azeite de oliva",
      "Ervas frescas (como coentro ou salsa) para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho no azeite de oliva até dourarem.",
      "Adicione a cenoura, abobrinha, aipo e tomate. Refogue por alguns minutos.",
      "Despeje o caldo de peixe ou caldo de legumes na panela. Tempere com sal e pimenta a gosto.",
      "Deixe ferver e, em seguida, reduza o fogo. Cozinhe até que os vegetais estejam macios.",
      "Adicione o filé de peixe e cozinhe por mais alguns minutos até que o peixe esteja cozido.",
      "Acrescente o suco de limão e ajuste o tempero conforme necessário.",
      "Sirva quente, finalizando com ervas frescas.",
    ],
  },
  {
    title: "Sopa de Frango com Quinoa e Vegetais Verdes",
    icon: Soup,
    ingredients: [
      "1 peito de frango cozido e desfiado",
      "1 xícara de quinoa lavada",
      "2 xícaras de vegetais verdes (espinafre, couve, brócolis, por exemplo)",
      "1 cenoura em rodelas",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 litro de caldo de galinha",
      "Sal e pimenta a gosto",
      "1 colher de chá de azeite de oliva",
      "Suco de meio limão",
      "Salsa fresca picada para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho no azeite de oliva até dourarem.",
      "Adicione o frango desfiado, a quinoa, a cenoura e os vegetais verdes. Refogue por alguns minutos.",
      "Despeje o caldo de galinha na panela. Tempere com sal e pimenta a gosto.",
      "Deixe ferver e, em seguida, reduza o fogo. Cozinhe até que a quinoa e os vegetais estejam macios.",
      "Adicione o suco de limão e ajuste o tempero conforme necessário.",
      "Sirva quente, finalizando com salsa fresca.",
    ],
  },
  {
    title: "Sopa de Tomate Assado com Manjericão",
    icon: Soup,
    ingredients: [
      "1 kg de tomates maduros",
      "2 cebolas médias, cortadas em quartos",
      "4 dentes de alho",
      "2 colheres de sopa de azeite de oliva",
      "Sal e pimenta a gosto",
      "1 litro de caldo de legumes",
      "Um punhado de manjericão fresco",
      "Queijo parmesão ralado para servir (opcional)",
    ],
    preparation: [
      "Pré-aqueça o forno a 200°C. Corte os tomates ao meio e coloque-os em uma assadeira, com as cebolas e o alho. Regue com azeite de oliva e tempere com sal e pimenta.",
      "Asse no forno por cerca de 30-40 minutos, ou até que os tomates estejam caramelizados.",
      "Retire do forno e transfira os tomates assados, cebolas e alho para uma panela.",
      "Adicione o caldo de legumes e leve ao fogo médio até ferver. Use um mixer ou liquidificador para obter uma consistência mais suave.",
      "Acrescente o manjericão fresco e ajuste o tempero conforme necessário.",
      "Sirva quente, com queijo parmesão ralado por cima, se desejar.",
    ],
  },
  {
    title: "Sopa de Tomate com Grão de Bico",
    icon: Soup,
    ingredients: [
      "1 kg de tomates maduros, sem pele e sem sementes, picados",
      "1 lata de grão de bico escorrido e lavado",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 cenoura em rodelas",
      "1 litro de caldo de legumes",
      "2 colheres de sopa de azeite de oliva",
      "Sal e pimenta a gosto",
      "1 colher de chá de orégano",
      "Folhas de manjericão fresco para finalizar",
    ],
    preparation: [
      "Em uma panela, refogue a cebola e o alho no azeite de oliva até dourarem.",
      "Adicione os tomates, a cenoura e o grão de bico. Refogue por alguns minutos.",
      "Despeje o caldo de legumes na panela. Tempere com sal, pimenta e orégano a gosto.",
      "Deixe ferver e, em seguida, reduza o fogo. Cozinhe até que os vegetais estejam macios.",
      "Use um mixer ou liquidificador para obter uma consistência mais suave, se desejar.",
      "Ajuste o tempero conforme necessário.",
      "Sirva quente, finalizando com folhas de manjericão fresco.",
    ],
  },
];

export default function SopasPage() {
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
              <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Sopas Low Carb</CardTitle>
              <CardDescription className="font-display text-lg text-foreground/90">Opções quentinhas e reconfortantes.</CardDescription>
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
                <p className="font-display text-foreground/80">Nenhuma receita de sopa disponível no momento.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
