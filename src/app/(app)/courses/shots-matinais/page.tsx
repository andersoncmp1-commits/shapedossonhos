
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Clock, Leaf, Flame, Apple, Carrot, Wheat, Droplets, Coffee, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const shots = [
  {
    title: "Shot Matinal de Limão e Pimenta Caiena",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Flame,
    ingredients: [
      "Suco de 1 limão",
      "1 pitada de pimenta caiena",
      "1 colher de chá de mel (opcional)",
    ],
    preparation: [
      "Misture o suco de limão e a pimenta caiena.",
      "Adoce com mel, se desejar.",
      "Consuma este shot pela manhã antes do café.",
    ],
  },
  {
    title: "Shot Matinal de Açafrão e Pimenta Preta",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Zap,
    ingredients: [
      "1 colher de chá de açafrão em pó",
      "Uma pitada de pimenta preta (ajuda na absorção da cúrcuma)",
      "1 colher de chá de mel (opcional)",
      "1/2 copo de água morna",
    ],
    preparation: [
      "Misture o açafrão em pó com a pimenta preta.",
      "Adoce com mel, se preferir.",
      "Adicione água morna e misture bem.",
      "Consuma pela manhã com o estômago vazio.",
    ],
  },
  {
    title: "Shot Detox de Maçã e Gengibre",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Apple,
    ingredients: [
      "Suco de 1 maçã",
      "1 colher de chá de gengibre fresco ralado",
      "1 colher de chá de suco de limão",
      "1/2 copo de água",
    ],
    preparation: [
      "Misture o suco de maçã, gengibre ralado e suco de limão.",
      "Adicione água e misture bem.",
      "Consuma como um shot detox revitalizante.",
    ],
  },
  {
    title: "Shot Detox de Beterraba e Cenoura",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Carrot,
    ingredients: [
      "Suco de 1/2 beterraba",
      "Suco de 1 cenoura",
      "1 colher de chá de suco de limão",
      "1/2 copo de água",
    ],
    preparation: [
      "Misture o suco de beterraba, suco de cenoura e suco de limão.",
      "Adicione água e misture bem.",
      "Consuma este shot para um impulso antioxidante.",
    ],
  },
  {
    title: "Shot Matinal Anti-inflamatório de Cúrcuma",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Bot,
    ingredients: [
      "1 colher de chá de cúrcuma em pó",
      "Uma pitada de pimenta preta (aumenta a absorção da cúrcuma)",
      "1 colher de chá de mel",
      "1/2 copo de água morna",
    ],
    preparation: [
      "Misture a cúrcuma em pó com a pimenta preta.",
      "Adoce com mel e misture bem.",
      "Adicione água morna e mexa até dissolver.",
      "Consuma este shot para benefícios anti-inflamatórios.",
    ],
  },
  {
    title: "Shot Matinal de Vinagre de Maçã e Canela",
    timing: "Manhã/Tarde",
    difficulty: "Fácil",
    icon: Apple,
    ingredients: [
      "1 colher de sopa de vinagre de maçã",
      "1/2 colher de chá de canela em pó",
      "1 colher de chá de mel (opcional)",
      "1/2 copo de água morna",
    ],
    preparation: [
      "Misture o vinagre de maçã e a canela em pó.",
      "Adoce com mel, se preferir.",
      "Adicione água morna e misture bem.",
      "Consuma este shot antes do café da manhã.",
    ],
  },
  {
    title: "Shot Matinal de Água com Limão e Chia",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Wheat,
    ingredients: [
      "Suco de 1 limão",
      "1 colher de sopa de sementes de chia",
      "1/2 copo de água",
    ],
    preparation: [
      "Misture o suco de limão com as sementes de chia.",
      "Adicione água e mexa bem.",
      "Deixe as sementes de chia absorverem a água por alguns minutos.",
      "Consuma este shot para um impulso de fibras e hidratação.",
    ],
  },
  {
    title: "Shot Matinal de Couve e Maçã",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Leaf,
    ingredients: [
      "1 folha de couve",
      "1 maçã verde, cortada em pedaços",
      "Suco de 1 limão",
      "1/2 copo de água",
    ],
    preparation: [
      "Bata a couve, maçã e suco de limão no liquidificador.",
      "Adicione água e bata até obter uma mistura homogênea.",
      "Coe se preferir uma textura mais suave.",
      "Consuma este shot para um impulso de nutrientes pela manhã.",
    ],
  },
  {
    title: "Shot Matinal de Chá Verde e Limão",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Coffee,
    ingredients: [
      "1/2 copo de chá verde (resfriado)",
      "Suco de 1 limão",
      "1 colher de chá de mel (opcional)",
    ],
    preparation: [
      "Misture o chá verde com o suco de limão.",
      "Adoce com mel, se desejar.",
      "Consuma este shot para um impulso antioxidante pela manhã.",
    ],
  },
  {
    title: "Shot Matinal de Canela e Maçã",
    timing: "Manhã",
    difficulty: "Fácil",
    icon: Droplets,
    ingredients: [
      "1/2 copo de água",
      "1 colher de chá de canela em pó",
      "1 maçã pequena, cortada em pedaços",
      "Uma pitada de noz-moscada (opcional)",
    ],
    preparation: [
      "Misture a água com a canela em pó.",
      "Adicione os pedaços de maçã.",
      "Se desejar, adicione uma pitada de noz-moscada.",
      "Consuma este shot matinal para um sabor delicioso e suporte ao metabolismo.",
    ],
  },
];

export default function ShotsMatinaisPage() {
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
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Shots Matinais</CardTitle>
          <CardDescription className="font-display text-lg text-foreground/90">Comece o dia com um boost de energia e nutrientes!</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-4">
            {shots.map((shot, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-muted/30 rounded-lg px-4 border">
                <AccordionTrigger className="font-headline text-xl hover:no-underline">
                  <div className="flex items-center gap-4">
                    <shot.icon className="h-6 w-6 text-primary" />
                    {shot.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h4 className="font-bold font-headline text-primary mb-3">Ingredientes</h4>
                      <ul className="list-disc list-inside space-y-2 font-display text-foreground/80">
                        {shot.ingredients.map((ing, i) => (
                          <li key={i}>{ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-headline text-primary mb-3">Modo de Preparo</h4>
                      <ol className="list-decimal list-inside space-y-2 font-display text-foreground/80">
                        {shot.preparation.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                   <div className="flex justify-end gap-4 text-xs text-muted-foreground mt-4">
                        <span><Clock className="inline mr-1 h-3 w-3" />{shot.timing}</span>
                        <span><Zap className="inline mr-1 h-3 w-3" />{shot.difficulty}</span>
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
