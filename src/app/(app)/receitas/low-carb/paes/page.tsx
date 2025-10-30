
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CookingPot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const recipes = [
  {
    title: "Pão de Ricota Low Carb",
    icon: CookingPot,
    kcal: "130",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "250g de ricota",
      "3 ovos",
      "1/4 xícara de farinha de amêndoas",
      "1/4 xícara de farinha de coco",
      "1 colher de sopa de fermento em pó",
      "1/4 xícara de óleo de coco (ou outro óleo vegetal)",
      "1 colher de chá de sal",
      "1/2 colher de chá de ervas secas (opcional)",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C (350°F) e unte uma forma de pão com óleo ou forre com papel manteiga.",
      "Misture os ingredientes úmidos: em uma tigela grande, bata os ovos e adicione a ricota e o óleo de coco. Misture bem até obter uma mistura homogênea.",
      "Adicione os ingredientes secos: em outra tigela, combine a farinha de amêndoas, a farinha de coco, o fermento em pó, o sal e as ervas secas (se estiver usando). Misture bem.",
      "Junte tudo: adicione os ingredientes secos à mistura de ricota e ovos. Misture até que todos os ingredientes estejam bem incorporados.",
      "Despeje na forma: coloque a massa na forma de pão preparada e espalhe uniformemente.",
      "Asse no forno pré-aquecido por cerca de 30-35 minutos, ou até que o pão esteja dourado e um palito inserido no centro saia limpo.",
      "Deixe esfriar: retire o pão do forno e deixe esfriar na forma por alguns minutos antes de desenformar e deixar esfriar completamente sobre uma grade.",
    ],
  },
  {
    title: "Pão de Abóbora Low Carb",
    icon: CookingPot,
    kcal: "120",
    timing: "45 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 1/2 xícaras de purê de abóbora (feito com abóbora assada e amassada)",
      "3 ovos",
      "1/2 xícara de farinha de amêndoas",
      "1/4 xícara de farinha de coco",
      "1/4 xícara de eritritol ou outro adoçante low carb",
      "1/4 xícara de óleo de coco (ou outro óleo vegetal)",
      "1 colher de chá de fermento em pó",
      "1 colher de chá de canela em pó",
      "1/2 colher de chá de noz-moscada em pó",
      "1/4 colher de chá de sal",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C (350°F). Unte uma forma de pão com óleo ou forre com papel manteiga.",
      "Misture os ingredientes úmidos: em uma tigela grande, bata os ovos e adicione o purê de abóbora e o óleo de coco. Misture bem até obter uma mistura homogênea.",
      "Combine os ingredientes secos: em outra tigela, misture a farinha de amêndoas, a farinha de coco, o adoçante, o fermento em pó, a canela, a noz-moscada e o sal.",
      "Junte tudo: adicione a mistura de ingredientes secos à mistura de ingredientes úmidos e mexa até que todos os ingredientes estejam bem incorporados.",
      "Despeje na forma: coloque a massa na forma de pão preparada e espalhe uniformemente.",
      "Asse por cerca de 40-45 minutos, ou até que um palito inserido no centro saia limpo e o pão esteja firme ao toque.",
      "Deixe esfriar: retire o pão do forno e deixe esfriar na forma por alguns minutos antes de desenformar e deixar esfriar completamente sobre uma grade.",
    ],
  },
  {
    title: "Pão de Linhaça Low Carb",
    icon: CookingPot,
    kcal: "110",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 xícara de farinha de linhaça",
      "1/2 xícara de farinha de amêndoas",
      "3 ovos",
      "1/4 xícara de óleo de coco (ou outro óleo vegetal)",
      "1 colher de sopa de fermento em pó",
      "1 colher de chá de sal",
      "1 colher de chá de sementes de chia (opcional, para adicionar mais fibra e textura)",
      "1/4 xícara de água (ou conforme necessário para ajustar a consistência)",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C (350°F). Unte uma forma de pão com óleo ou forre com papel manteiga.",
      "Misture os ingredientes secos: em uma tigela grande, combine a farinha de linhaça, a farinha de amêndoas, o fermento em pó, o sal e as sementes de chia (se estiver usando).",
      "Adicione os ingredientes úmidos: em outra tigela, bata os ovos e adicione o óleo de coco. Misture bem.",
      "Combine tudo: adicione os ingredientes úmidos à mistura de ingredientes secos e mexa até obter uma massa uniforme. Se a massa estiver muito seca, adicione a água aos poucos até atingir a consistência desejada.",
      "Despeje na forma: coloque a massa na forma de pão preparada e espalhe uniformemente.",
      "Asse por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo e o pão esteja dourado e firme ao toque.",
      "Deixe esfriar: retire o pão do forno e deixe esfriar na forma por alguns minutos antes de desenformar e deixar esfriar completamente sobre uma grade.",
    ],
  },
  {
    title: "Pão de Amendoim Low Carb",
    icon: CookingPot,
    kcal: "150",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 xícara de farinha de amendoim (pode ser feita processando amendoins torrados e sem sal até virar uma farinha fina)",
      "1/2 xícara de farinha de amêndoas",
      "3 ovos",
      "1/4 xícara de óleo de coco (ou outro óleo vegetal)",
      "1 colher de sopa de fermento em pó",
      "1/4 xícara de eritritol ou outro adoçante low carb (opcional, se preferir um pão doce)",
      "1/4 colher de chá de sal",
      "1/4 xícara de água (ou conforme necessário para ajustar a consistência)",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C (350°F). Unte uma forma de pão com óleo ou forre com papel manteiga.",
      "Misture os ingredientes secos: em uma tigela grande, combine a farinha de amendoim, a farinha de amêndoas, o fermento em pó, o adoçante (se estiver usando) e o sal.",
      "Adicione os ingredientes úmidos: em outra tigela, bata os ovos e adicione o óleo de coco. Misture bem.",
      "Combine tudo: adicione os ingredientes úmidos à mistura de ingredientes secos e mexa até obter uma massa uniforme. Se a massa estiver muito espessa, adicione água aos poucos até obter a consistência desejada.",
      "Despeje na forma: coloque a massa na forma de pão preparada e espalhe uniformemente.",
      "Asse por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo e o pão esteja dourado e firme ao toque.",
      "Deixe esfriar: retire o pão do forno e deixe esfriar na forma por alguns minutos antes de desenformar e deixar esfriar completamente sobre uma grade.",
    ],
  },
  {
    title: "Pão de Couve Flor Low Carb",
    icon: CookingPot,
    kcal: "120",
    timing: "30 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 cabeça de couve-flor (aproximadamente 4 xícaras de couve-flor ralada)",
      "2 ovos",
      "1/2 xícara de farinha de amêndoas",
      "1/4 xícara de queijo ralado (parmesão ou mozarela)",
      "1/4 xícara de óleo de coco (ou outro óleo vegetal)",
      "1 colher de chá de fermento em pó",
      "1/2 colher de chá de sal",
      "1/4 colher de chá de pimenta-do-reino (opcional)",
      "1/2 colher de chá de ervas secas (opcional)",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C (350°F). Unte uma forma de pão com óleo ou forre com papel manteiga.",
      "Prepare a couve-flor: rale a couve-flor usando um ralador fino ou processe em um processador de alimentos até obter uma textura semelhante ao arroz. Cozinhe a couve-flor ralada em uma frigideira seca em fogo médio por 5-7 minutos, mexendo ocasionalmente, até que esteja macia. Deixe esfriar um pouco e depois esprema o excesso de umidade com um pano de prato limpo.",
      "Misture os ingredientes secos: em uma tigela grande, combine a farinha de amêndoas, o fermento em pó, o sal, a pimenta-do-reino e as ervas secas (se estiver usando).",
      "Adicione os ingredientes úmidos: em outra tigela, bata os ovos e adicione o queijo ralado e o óleo de coco. Misture bem.",
      "Combine tudo: adicione a couve-flor ralada à mistura de ingredientes úmidos e depois adicione a mistura de ingredientes secos. Mexa até obter uma massa uniforme.",
      "Despeje na forma: coloque a massa na forma de pão preparada e espalhe uniformemente.",
      "Asse por cerca de 30-35 minutos, ou até que o pão esteja dourado e firme ao toque. Um palito inserido no centro deve sair limpo.",
      "Deixe esfriar: retire o pão do forno e deixe esfriar na forma por alguns minutos antes de desenformar e deixar esfriar completamente sobre uma grade.",
    ],
  },
  {
    title: "Pão de Amêndoas Low Carb",
    icon: CookingPot,
    kcal: "140",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "2 xícaras de farinha de amêndoas",
      "4 ovos",
      "1/4 xícara de óleo de coco (ou outro óleo vegetal)",
      "1/4 xícara de água (ou conforme necessário para ajustar a consistência)",
      "1 colher de sopa de fermento em pó",
      "1/2 colher de chá de sal",
      "1 colher de sopa de eritritol ou outro adoçante low carb (opcional, se preferir um pão doce)",
      "1/4 xícara de sementes de chia ou linhaça (opcional, para adicionar textura e fibra)",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C (350°F). Unte uma forma de pão com óleo ou forre com papel manteiga.",
      "Misture os ingredientes secos: em uma tigela grande, combine a farinha de amêndoas, o fermento em pó, o sal e o adoçante (se estiver usando). Se estiver usando sementes de chia ou linhaça, adicione-as também.",
      "Adicione os ingredientes úmidos: em outra tigela, bata os ovos e adicione o óleo de coco. Misture bem.",
      "Combine tudo: adicione a mistura de ingredientes úmidos à mistura de ingredientes secos. Misture até obter uma massa uniforme. Se a massa estiver muito espessa, adicione água aos poucos até atingir a consistência desejada.",
      "Despeje na forma: coloque a massa na forma de pão preparada e espalhe uniformemente.",
      "Asse por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo e o pão esteja dourado e firme ao toque.",
      "Deixe esfriar: retire o pão do forno e deixe esfriar na forma por alguns minutos antes de desenformar e deixar esfriar completamente sobre uma grade.",
    ],
  },
  {
    title: "Pão de Aveia Low Carb",
    icon: CookingPot,
    kcal: "140",
    timing: "50 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 xícara de farinha de aveia (certifique-se de que seja de baixo carboidrato)",
      "1/4 xícara de farinha de amêndoas",
      "1/4 xícara de sementes de linhaça moídas",
      "1 colher de chá de fermento em pó",
      "1/2 colher de chá de sal",
      "3 ovos",
      "1/4 xícara de óleo de coco (ou outro óleo saudável)",
      "1/4 xícara de água (ou um pouco mais, se necessário)",
    ],
    preparation: [
      "Pré-aqueça o forno a 180°C e unte uma forma de pão pequena ou forre com papel manteiga.",
      "Misture os ingredientes secos: em uma tigela grande, combine a farinha de aveia, a farinha de amêndoas, as sementes de linhaça, o fermento e o sal.",
      "Adicione os ingredientes molhados: em outra tigela, bata os ovos e depois misture com o óleo de coco.",
      "Combine tudo: adicione os ingredientes molhados aos ingredientes secos e misture até obter uma massa homogênea. Se a massa estiver muito seca, adicione a água aos poucos até atingir a consistência desejada.",
      "Despeje a massa na forma de pão e nivele com uma espátula.",
      "Asse por aproximadamente 30-35 minutos ou até que um palito saia limpo ao ser inserido no centro do pão.",
      "Deixe esfriar antes de fatiar e servir.",
    ],
  },
  {
    title: "Pão de Batata Low Carb",
    icon: CookingPot,
    kcal: "100",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 batata-doce média (aproximadamente 200g)",
      "2 colheres de sopa de farinha de amêndoas",
      "2 colheres de sopa de farinha de coco",
      "3 ovos",
      "1 colher de chá de fermento em pó",
      "1/4 xícara de óleo de coco (ou outro óleo saudável)",
      "1/2 colher de chá de sal",
      "1/2 colher de chá de canela (opcional, para um toque de sabor)",
    ],
    preparation: [
      "Prepare a batata-doce: Cozinhe a batata-doce até que fique bem macia. Descasque e amasse bem até obter um purê liso. Deixe esfriar um pouco.",
      "Pré-aqueça o forno: A 180°C e unte uma forma de pão pequena ou forre com papel manteiga.",
      "Misture os ingredientes: Em uma tigela grande, combine o purê de batata-doce, os ovos e o óleo de coco. Misture bem.",
      "Adicione os ingredientes secos: Em outra tigela, misture as farinhas, o fermento em pó, o sal e a canela, se estiver usando. Adicione essa mistura aos ingredientes úmidos e mexa até obter uma massa homogênea.",
      "Despeje a massa na forma de pão e nivele com uma espátula.",
      "Asse por aproximadamente 30-35 minutos, ou até que um palito saia limpo ao ser inserido no centro do pão.",
      "Deixe esfriar antes de fatiar e servir.",
    ],
  },
  {
    title: "Pão de Leite Low Carb",
    icon: CookingPot,
    kcal: "145",
    timing: "40 Minutos",
    difficulty: "Fácil",
    ingredients: [
      "1 xícara de leite de amêndoas sem açúcar (ou outro leite vegetal baixo em carboidratos)",
      "1/4 xícara de óleo de coco (ou outro óleo saudável)",
      "3 ovos",
      "1 xícara de farinha de amêndoas",
      "1/4 xícara de farinha de coco",
      "1/4 xícara de psyllium em pó",
      "2 colheres de chá de fermento em pó",
      "1/2 colher de chá de sal",
      "1 colher de chá de adoçante em pó (opcional, se preferir um pão levemente adocicado)",
    ],
    preparation: [
      "Pré-aqueça o forno: a 180°C e unte uma forma de pão pequena ou forre com papel manteiga.",
      "Misture os ingredientes líquidos: Em uma tigela grande, combine o leite de amêndoas, o óleo de coco e os ovos. Misture bem.",
      "Adicione os ingredientes secos: Em outra tigela, misture a farinha de amêndoas, a farinha de coco, o psyllium, o fermento em pó, o sal e o adoçante, se estiver usando.",
      "Combine tudo: Adicione os ingredientes secos aos líquidos e misture até obter uma massa homogênea. A massa deve ficar espessa.",
      "Despeje a massa na forma de pão e nivele com uma espátula.",
      "Asse por aproximadamente 30-35 minutos, ou até que o pão esteja dourado e um palito saia limpo ao ser inserido no centro.",
      "Deixe esfriar antes de fatiar e servir.",
    ],
  },
];

export default function PaesPage() {
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
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Pães Low Carb</CardTitle>
          <CardDescription className="font-display text-lg text-foreground/90">Alternativas saudáveis para o seu pão de cada dia.</CardDescription>
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
            <p className="font-display text-foreground/80">Nenhuma receita de pão disponível no momento.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
