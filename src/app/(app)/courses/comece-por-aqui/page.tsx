
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share, PlusSquare, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ClientAppLayout } from '../../ClientAppLayout';

export default function ComecePorAquiPage() {
  return (
    <ClientAppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Cursos
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <Card className="bg-card/80 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Por onde começar?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-lg font-display text-foreground/90">
                <p>
                  Nosso aplicativo é um facilitador no processo de emagrecimento, você já pode começar agora mesmo ou você pode se preparar, o desafio alimentar de 20 dias já está disponível no app, basta ir na opção de “Plano Alimentar” lá você consegue visualizar as receitas, lista de compras, desafios diário e muito mais coisas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">Como Instalar o Aplicativo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-display text-lg text-foreground/90 mb-6">
                Para uma experiência melhor, instale nosso aplicativo na tela inicial do seu celular. Assim, você terá acesso rápido a todo o conteúdo, como se fosse um aplicativo da loja.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Instruções Android */}
                <div className="space-y-4">
                  <h3 className="font-headline text-xl font-bold text-primary">Para Android (Chrome)</h3>
                  <ol className="list-decimal list-inside space-y-3 font-display text-foreground/80">
                    <li>Abra o aplicativo no navegador Chrome.</li>
                    <li>Toque no ícone de menu (<MoreVertical className="inline h-5 w-5" />) no canto superior direito.</li>
                    <li>Selecione a opção <span className="font-bold">"Instalar aplicativo"</span> ou <span className="font-bold">"Adicionar à tela inicial"</span>.</li>
                    <li>Siga as instruções para adicionar o atalho.</li>
                  </ol>
                </div>

                <Separator orientation="vertical" className="hidden md:block" />

                {/* Instruções iPhone */}
                <div className="space-y-4">
                  <h3 className="font-headline text-xl font-bold text-primary">Para iPhone (Safari)</h3>
                  <ol className="list-decimal list-inside space-y-3 font-display text-foreground/80">
                    <li>Abra o aplicativo no navegador Safari.</li>
                    <li>Toque no ícone de compartilhamento (<Share className="inline h-5 w-5" />) na barra inferior.</li>
                    <li>Role para baixo e selecione a opção <span className="font-bold">"Adicionar à Tela de Início"</span>.</li>
                    <li>Confirme o nome do aplicativo e toque em <span className="font-bold">"Adicionar"</span> (<PlusSquare className="inline h-5 w-5" />).</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClientAppLayout>
  );
}
