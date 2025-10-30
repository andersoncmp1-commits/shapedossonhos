
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Header } from '@/components/layout/Header';

const categories = [
    {
        name: "Legumes & Verduras",
        items: ["Brócolis", "Alface", "Tomate", "Cenoura", "Repolho", "Pepino", "Beterraba", "Abóbora", "Banana da terra", "Abobrinha", "Chuchu", "Espinafre", "Couve folha", "Ervilhas"]
    },
    {
        name: "Frutas",
        items: ["Mamão papaia", "Uvas roxas", "Melancia", "Maçã", "Melão", "Banana da prata", "Goiaba", "Manga", "Abacaxi", "Morangos", "Pera", "Ameixa"]
    },
    {
        name: "Itens diversos",
        items: ["Farelo de aveia", "Sementes de chia", "Mel", "Canela em pó", "Torrada integral", "Chocolate 40%", "Biscoitos de polvilho", "Ovos de codorna"]
    },
    {
        name: "Proteínas",
        items: ["Ovos", "Lombo", "Peito de frango", "Peixe", "Patinho bovino", "Atum enlatado", "Tofu", "Presunto magro", "Carne moída"]
    },
    {
        name: "Grãos/Amidos",
        items: ["Pão integral", "Cuscuz", "Arroz branco", "Feijão carioca", "Feijão preto", "Batata inglesa", "Granola", "Macarrão sem glúten", "Batata doce"]
    },
    {
        name: "Produtos lácteos",
        items: ["Queijo branco", "Creme de ricota", "Queijo ricota", "Iogurte Desnatado", "Iogurte Natural", "Leite desnatado", "Queijo mussarela", "Requeijão Light"]
    }
];

export default function ListaDeComprasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Button asChild variant="ghost">
            <Link href="/planos-alimentares/desafio-20-dias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o Desafio 20 Dias
            </Link>
            </Button>
        </div>

        <Card className="bg-card/80 backdrop-blur-lg">
            <CardHeader>
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Lista de Compras Fit</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="font-display text-lg text-foreground/90 mb-6">
                Para ampliar suas opções e facilitar nas suas compras, cada semana você pode fazer diversas combinações antes de ir ao supermercado, verifique o que você tem na sua casa e utilize essa lista para te orientar nas escolhas!
            </p>
            <ScrollArea className="h-[60vh] pr-4">
                <div className="space-y-6">
                {categories.map((category) => (
                    <div key={category.name}>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3">{category.name}</h3>
                    <ul className="list-disc list-inside space-y-1 font-display text-foreground/80">
                        {category.items.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            </ScrollArea>
            </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );
}
