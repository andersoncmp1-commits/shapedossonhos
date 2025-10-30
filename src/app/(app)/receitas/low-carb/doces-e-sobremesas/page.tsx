
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, IceCream, Citrus, Cookie, Banana, Dessert, BarChart, Blend, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const recipes = [
  {
    title: "Arroz Doce de Couve-flor",
    icon: IceCream,
    ingredients: [
      "120g de Couve-flor",
      "150ml de Leite de Coco",
      "Canela em Pau a gosto",
      "Canela em Pó a gosto",
      "4 colheres(sopa) de Adoçante Xilitol ou Stevia",
    ],
    preparation: [
      "Utilize um processador fazendo com que a couve fique em formato granular.",
      "Em uma panela, insira a couve-flor e o leite de coco. Acrescente a canela em pau e mexa até ferver.",
      "Após ferver, continue a mexer, usando uma colher de pau. Acrescente o adoçante e misture.",
      "Deixe no fogo até engrossar. Retire do fogo, disponha o arroz doce em canecas ou Taças polvilhe a canela em pó por cima.",
    ],
  },
  {
    title: "Brigadeiro de Limão",
    icon: Citrus,
    ingredients: [
      "1/2 Pacote de Gelatina em Pó sem sabor e sem açúcar",
      "Suco de 2 Limões",
      "300 ml de Creme de Leite fresco",
      "40 gramas de Manteiga",
      "Adoçante Culinário ou mel",
      "Coco ralado sem Açúcar a gosto",
    ],
    preparation: [
      "Coloque todos os ingredientes em uma panela e leve ao fogo médio até a mistura desgrudar da panela.",
      "Retire do fogo, coloque a mistura em um prato e deixe esfriar.",
      "Modele bolinhas com a mistura e passe no coco ralado.",
    ],
  },
  {
    title: "Sorvete Proteico de Morango",
    icon: IceCream,
    ingredients: [
      "Banana - 1 Unidade média (40g)",
      "Morango - 10 Unidades médias (120g)",
      "Whey protein isolado (sabor morango ou baunilha) - 1 Medidor (30g)",
      "Iogurte natural - 1 Unidade (200g)",
    ],
    preparation: [
      "Bater, no liquidificador, as duas frutas, o whey e o iogurte.",
      "Colocar em um pote e deixar no congelador até atingir o ponto de sua preferência.",
    ],
  },
  {
    title: "Cookie de Aveia",
    icon: Cookie,
    ingredients: [
      "200g de aveia",
      "2 colheres de sopa de canela em pó",
      "1 xícara de farinha de arroz",
      "1 colher de sopa de fermento em pó",
      "1/2 xícara de manteiga",
      "1 colher de sopa de leite desnatado",
    ],
    preparation: [
      "Misture os ingredientes, e amasse bem a massa até ficar homogêneo, adicione o leite por último.",
      "Abra a massa em uma superfície lisa, e corte os biscoitos no formato desejado.",
      "Coloque em um forno pré-aquecido, por aproximadamente 180 graus, por aproximadamente 30 minutos.",
      "Fique atento para que não queimar os biscoitos.",
    ],
  },
  {
    title: "Brownie de Banana",
    icon: Banana,
    ingredients: [
      "2 bananas madura",
      "2 colheres de sopa de óleo de coco",
      "2 colheres de sopa de aveia em flocos finos",
      "2 colheres de sopa de cacau em pó",
      "2 colheres de açúcar de coco",
    ],
    preparation: [
      "Misture todos os ingredientes em um recipiente e bata no liquidificador até formar uma massa homogênea.",
      "Unte um refratário pequeno com óleo de coco e despeje a massa.",
      "Leve ao forno pré-aquecido a 180°C e asse por 15 minutos.",
    ],
  },
  {
    title: "Geleia de Morango",
    icon: Dessert,
    ingredients: [
      "10 morangos (frescos ou descongelados)",
      "1 colher de sopa de adoçante",
      "2 colheres de sopa de semente de chia",
    ],
    preparation: [
      "Levar ao fogo os morangos com o adoçante em fogo baixo e amassar quando estiver cozido, acrescentar a chia e pronto!",
    ],
  },
  {
    title: "Barrinha de Cereal",
    icon: BarChart,
    ingredients: [
      "200g de aveia",
      "200g de manteiga",
      "1/2 xíc de farinha de trigo integral",
      "1 xíc de açúcar de coco",
      "100g de nozes picadas",
      "100g de castanhas do pará picada",
      "Coco ralado à gosto",
    ],
    preparation: [
      "Aqueça a manteiga 30 segundos no micro-ondas e depois misture todos os ingredientes até formar uma massa homogênea.",
      "Em uma forma forrada com papel alumínio, despeje a massa, alise bem e aperte com as costas de uma colher.",
      "Leve ao forno médio por 30 minutos, retire, espere esfriar, e coloque na geladeira por 5 horas e corte em quadradinhos.",
      "Pode armazenar na geladeira.",
    ],
  },
  {
    title: "Iogurte de Manga",
    icon: Blend,
    ingredients: [
      "1 pote de iogurte natural integral",
      "2 pedaços médios de manga",
      "1 colher de sopa de semente de chia",
    ],
    preparation: [
      "Bata todos os ingredientes no liquidificador.",
    ],
  },
  {
    title: "Brigadeiro Fit",
    icon: UtensilsCrossed,
    ingredients: [
      "1 xícara de leite em pó sem açúcar",
      "1/4 de xícara de água fervente",
      "Xilitol",
    ],
    preparation: [
      "Bata todos os ingredientes no liquidificador e depois coloque a mistura na geladeira por 5h (para dar mais consistência).",
      "Em seguida, coloque o leite condensado em uma panela + 2 colheres de sopa de cacau em pó, misture até dar ponto de brigadeiro.",
    ],
  },
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
            <p className="font-display text-foreground/80">Nenhuma receita de doce ou sobremesa disponível no momento.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
