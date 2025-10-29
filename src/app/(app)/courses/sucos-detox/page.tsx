
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Clock, Leaf, Flame, Apple, Carrot, Wheat, Droplets, Coffee, Bot, Citrus, Sparkles, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const sucos = [
  {
    title: "Suco Verde Cubano",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "2 Pepinos",
      "5 folhas de hortelã",
      "1 laranja lima",
    ],
    preparation: [
      "Pode bater tudo no liquidificador e coar, ou processar na centrífuga a Laranja e os Pepinos e depois bater no liquidificador junto com as folhas de hortelã.",
    ],
  },
  {
    title: "Suco Verde Pepino E Espinafre",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
        "4 folhas de espinafre",
        "1 talo de aipo ou salsão",
        "1 pepino",
        "200 ml de água",
    ],
    preparation: [
        "Processe na centrífuga ou bata no liquidificador coando antes de servir.",
        "Se for usar o processador, não precisa adicionar a água e se for fazer no liquidificador pode diminuir pela metade o pepino e adicionar água."
    ],
  },
  {
    title: "Suco Vitamina C",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Citrus,
    ingredients: [
        "2 laranjas",
        "5 morangos",
        "Algumas folhas de espinafre.",
    ],
    preparation: [
        "Esprema as laranjas no espremedor e bata no liquidificador com os morangos e o espinafre."
    ],
  },
  {
    title: "Suco Detox de Abacaxi Com Erva Cidreira",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Sparkles,
    ingredients: [
        "1 fatia de abacaxi",
        "3 ramos de erva cidreira",
        "200 ml de água de coco",
    ],
    preparation: [
        "Faça o chá da erva cidreira e espere esfriar na geladeira.",
        "Depois de gelado bata com os outros ingredientes no liquidificador."
    ],
  },
  {
    title: "Suco Detox de Uva, Gengibre e Canela em Pó",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Bot,
    ingredients: [
        "1 copo de suco de uva",
        "1 pedaço pequeno de gengibre",
        "1 pitada de canela em pó",
    ],
    preparation: [
        "Bata todos os ingredientes no liquidificador, sirva gelado.",
    ],
  },
  {
    title: "Suco Doce Natural",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Apple,
    ingredients: [
        "1 meio copo de cramberry",
        "1 laranja",
        "1⁄2 maçã",
        "200 ml de água",
    ],
    preparation: [
        "Esprema a laranja e bata no liquidificar com os outros ingredientes, adicione gele ou use água gelada."
    ],
  },
  {
    title: "Detox de Abacaxi Com Mamão",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Sparkles,
    ingredients: [
        "1 fatia de abacaxi em pedaços",
        "1⁄4 de mamão papaia",
        "Um copo de água – 250 ml",
    ],
    preparation: [
        "Bata tudo no liquidificador, use água gelada nos dias de calor."
    ],
  },
  {
    title: "Suco Cítrico",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Citrus,
    ingredients: [
        "1 Laranja",
        "1 maçã",
        "1 cenouras",
        "1 pedaço pequeno de gengibre",
        "250 ml de água ou água de coco",
    ],
    preparation: [
        "Bata todos os ingredientes no liquidificador com água gelada e coe."
    ],
  },
  {
    title: "Detox de Laranja com Banana",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Apple,
    ingredients: [
        "1 Banana",
        "Suco de duas laranjas",
    ],
    preparation: [
        "Basta bater no liquidificador e servir."
    ],
  },
  {
    title: "Suco Verde Vegetais Vitaminados",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Carrot,
    ingredients: [
        "2 tomates",
        "Algumas folhas de salsa",
        "1⁄2 pimentão vermelho",
        "1 talo de aipo ou salsão",
        "2 folhas de acelga",
        "250 ml de água",
    ],
    preparation: [
        "Bater todos os ingredientes no liquidificador."
    ],
  },
  {
    title: "Detox Pepino, Cenoura E Espinafre",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Carrot,
    ingredients: [
        "4 folhas de espinafre",
        "1/2 pepino médio",
        "1 cenouras médias",
        "250 ml de água",
    ],
    preparation: [
        "Bater todos os ingredientes no liquidificador, usar água gelada nos dias de calor. Coar e servir."
    ],
  },
  {
    title: "Suco Antioxidante de Blueberry",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: BrainCircuit,
    ingredients: [
        "4 folhas de espinafre",
        "1/2 copo de framboesas",
        "250 ml de água",
        "1/2 copo de blueberrys (mirtilos)",
    ],
    preparation: [
        "Bater todos os ingredientes no liquidificar, coar se achar necessário."
    ],
  },
  {
    title: "Suco FZF (ferro, zinco e ácido fólico)",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Wheat,
    ingredients: [
        "1 cenouras",
        "3 folhas de espinafre",
        "1/2 beterraba",
        "250 ml de água",
    ],
    preparation: [
        "Bater no liquidificador todos os ingredientes."
    ],
  },
  {
    title: "Suco Fresco Light",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Droplets,
    ingredients: [
        "2 fatias de melão",
        "1 laranja – suco",
        "1 fatia de melancia cordada em pedaços sem a casca",
    ],
    preparation: [
        "Esprema as laranjas e junto com os outros ingredientes no liquidificador."
    ],
  },
  {
    title: "Suco Vermelho",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Flame,
    ingredients: [
        "1 limão – suco",
        "Um pedaço pequeno de pimenta dedo de moça",
        "1 talo de salsão",
        "1 tomate",
        "1 pepino",
    ],
    preparation: [
        "Passe todos os ingredientes no processador ou troque o pepino por água e use o liquidificador."
    ],
  },
  {
    title: "Suco Cítrico Com Melancia",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Citrus,
    ingredients: [
        "1 toranja ou laranja",
        "1 limão",
        "1 fatia de melancia",
    ],
    preparation: [
        "Bata o suco da toranja e limão com a melancia no liquidificador."
    ],
  },
  {
    title: "Suco Verde Com Cenoura",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Carrot,
    ingredients: [
        "3 talos de brócolis",
        "2 cenouras",
        "1 pepino",
        "1 pitada de sal",
        "200 ml de água",
    ],
    preparation: [
        "Use o processador ou bata com 200 ml de água no liquidificador."
    ],
  },
  {
    title: "Suco Verde Com Pepino",
    kcal: "100",
    timing: "Manhã/Noite",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
        "4 folhas de couve",
        "1/2 pepino",
        "2 ramos de erva doce",
        "1 cenouras",
        "1 pedaço pequeno de gengibre",
        "1 folha de manjericão",
        "200 ml de água",
    ],
    preparation: [
        "Bata todos os ingredientes no liquidificador e sirva após coar."
    ],
  },
];

export default function SucosDetoxPage() {
  return (
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
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Sucos Detox</CardTitle>
          <CardDescription className="font-display text-lg text-foreground/90">Limpe o organismo e renove suas energias!</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            {sucos.map((suco, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-muted/30 rounded-lg px-4 border">
                <AccordionTrigger className="font-headline text-xl hover:no-underline">
                  <div className="flex items-center gap-4">
                    <suco.icon className="h-6 w-6 text-primary" />
                    {suco.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h4 className="font-bold font-headline text-primary mb-3">Ingredientes</h4>
                      <ul className="list-disc list-inside space-y-2 font-display text-foreground/80">
                        {suco.ingredients.map((ing, i) => (
                          <li key={i}>{ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-headline text-primary mb-3">Modo de Preparo</h4>
                      <ol className="list-decimal list-inside space-y-2 font-display text-foreground/80">
                        {suco.preparation.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                   <div className="flex justify-end gap-4 text-xs text-muted-foreground mt-4">
                        <span><Clock className="inline mr-1 h-3 w-3" />{suco.timing}</span>
                        <span><Zap className="inline mr-1 h-3 w-3" />{suco.difficulty}</span>
                        <span className="font-bold"><Flame className="inline mr-1 h-3 w-3" />{suco.kcal} Kcal</span>
                    </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
