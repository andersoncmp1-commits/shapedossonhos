
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { getFirebase } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FirestorePermissionError } from '@/lib/errors';
import { errorEmitter } from '@/lib/error-emitter';
import { Header } from '@/components/layout/Header';

export default function Desafio20DiasPage() {
  const { user } = useAuth();
  const { db } = getFirebase();
  const [completedDays, setCompletedDays] = useState<string[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user && db) {
        setLoadingProgress(true);
        const userDocRef = doc(db, "users", user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setCompletedDays(userDoc.data().completedChallengeDays || []);
          } else {
             await setDoc(userDocRef, { email: user.email, completedChallengeDays: [] }, { merge: true })
              .catch(serverError => {
                  const permissionError = new FirestorePermissionError({
                    path: userDocRef.path,
                    operation: 'create',
                    requestResourceData: { email: user.email, completedChallengeDays: [] },
                  });
                  errorEmitter.emit('permission-error', permissionError);
              });
          }
        } catch (error) {
          console.error("Error fetching user progress: ", error);
        } finally {
          setLoadingProgress(false);
        }
      }
    };
    fetchProgress();
  }, [user, db]);

  const challengeModules = [
    { id: 'lista-compras', title: 'Lista de Compras', href: '/planos-alimentares/desafio-20-dias/lista-de-compras' },
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `desafio-dia-${i + 1}`,
      title: `Dia ${i + 1}`,
      href: `/planos-alimentares/desafio-20-dias/${i + 1}`,
    })),
  ];

  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Button asChild variant="ghost">
            <Link href="/planos-alimentares">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Planos Alimentares
            </Link>
            </Button>
        </div>

        <div className="mb-8 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">
            Desafio 20 Dias
            </h1>
            <p className="text-muted-foreground font-display mt-2">
            Selecione um módulo para começar seu desafio.
            </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-lg">
            <CardContent className="p-4">
            <ScrollArea className="h-[65vh] w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {challengeModules.map((module) => {
                    const isCompleted = module.id.startsWith('desafio-dia-') && completedDays.includes(module.id);
                    return (
                    <Link key={module.id} href={module.href} passHref>
                        <Card className="h-full transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/20 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium font-display">
                            {module.title}
                            </CardTitle>
                            {isCompleted ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                            <BookCheck className="h-4 w-4 text-muted-foreground" />
                            )}
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                            Acessar conteúdo
                            </div>
                        </CardContent>
                        </Card>
                    </Link>
                    );
                })}
                </div>
            </ScrollArea>
            </CardContent>
        </Card>
        </div>
        </main>
    </div>
  );
}
