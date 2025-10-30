
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getChallengeDay } from '@/lib/desafio-20-dias-content';
import { useAuth } from '@/hooks/useAuth';
import { getFirebase } from '@/lib/firebase';
import { doc, getDoc, setDoc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/lib/errors';
import { errorEmitter } from '@/lib/error-emitter';

function MealOption({ option }: { option: { title: string; description: string; kcal: string } }) {
  return (
    <div className="p-4 bg-muted/50 rounded-lg not-prose">
        <h4 className="font-bold text-primary mb-2">{option.title}</h4>
        <div className="whitespace-pre-line text-sm text-foreground/90 font-display">{option.description}</div>
        <p className="text-right font-bold text-sm text-primary mt-2">{option.kcal} Kcal</p>
    </div>
  );
}

function MealContent({ title, options }: { title: string, options: { title: string; description: string; kcal: string }[] }) {
    return (
        <div className="prose prose-sm max-w-none text-foreground/80 font-display">
            <h3 className="text-foreground/90">{title}</h3>
            <div className="space-y-4">
                {options.map((option, index) => (
                    <MealOption key={index} option={option} />
                ))}
            </div>
        </div>
    );
}

export default function DayChallengePage({ params }: { params: { day: string } }) {
  const { user } = useAuth();
  const { db } = getFirebase();
  const { toast } = useToast();
  
  const day = params.day;
  const dayNumber = parseInt(day, 10);
  const dayData = getChallengeDay(dayNumber);
  const dayId = `desafio-dia-${dayNumber}`;

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

  const handleToggleComplete = () => {
    if (!user || !db) return;
    const userDocRef = doc(db, "users", user.uid);
    const isCompleted = completedDays.includes(dayId);

    const updateData = { completedChallengeDays: isCompleted ? arrayRemove(dayId) : arrayUnion(dayId) };
    
    updateDoc(userDocRef, updateData).then(() => {
      if (isCompleted) {
        setCompletedDays(prev => prev.filter(id => id !== dayId));
        toast({ title: `Dia ${dayNumber} desmarcado` });
      } else {
        setCompletedDays(prev => [...prev, dayId]);
        toast({ title: `Dia ${dayNumber} concluído!`, description: "Você está indo muito bem!" });
      }
    }).catch(serverError => {
        const permissionError = new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'update',
          requestResourceData: updateData,
        });
        errorEmitter.emit('permission-error', permissionError);
    });
  };

  if (!dayData) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/planos-alimentares/desafio-20-dias">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Desafio
            </Link>
          </Button>
        </div>
        <Card className="bg-card/80 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">
              Dia {day}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Conteúdo para este dia ainda não disponível.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isCurrentDayCompleted = completedDays.includes(dayId);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <Button asChild variant="ghost">
          <Link href="/planos-alimentares/desafio-20-dias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Desafio
          </Link>
        </Button>
      </div>

      <Card className="bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary">
              Dia {day}
            </CardTitle>
            <Button
              variant={isCurrentDayCompleted ? "secondary" : "default"}
              onClick={handleToggleComplete}
              disabled={loadingProgress}
              className="w-full sm:w-auto"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              {isCurrentDayCompleted ? "Desmarcar como concluído" : "Marcar como concluído"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="font-display text-lg text-foreground/90 mb-6">
            Confira o plano alimentar para o dia de hoje. Escolha uma das opções para cada refeição.
          </p>
          
          <Accordion type="multiple" className="w-full" defaultValue={['item-0']}>
            {dayData.meals.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.name}>
                <AccordionTrigger className="font-headline text-xl">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent>
                   <MealContent title={item.content.title} options={item.content.options} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </CardContent>
      </Card>
    </div>
  );
}
