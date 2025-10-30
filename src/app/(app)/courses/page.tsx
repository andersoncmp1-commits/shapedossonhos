
"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AuthWrapper } from '@/components/auth/AuthWrapper';
import { ClientAppLayout } from '../ClientAppLayout';

function CoursesContent() {
  const courses = [
    {
      id: 'comece-por-aqui',
      title: 'Comece Por Aqui',
      description: 'O seu guia inicial para uma jornada de transformação e bem-estar completo.',
      imageUrl: 'https://i.imgur.com/bqsMdwl.png',
      imageHint: 'path beginning',
      href: '/courses/comece-por-aqui',
      isLocked: false,
    },
    {
      id: 'planos-alimentares',
      title: 'Planos Alimentares',
      description: 'Encontre planos de dieta personalizados para seus objetivos de saúde e bem-estar.',
      imageUrl: 'https://i.imgur.com/rB56imf.png',
      imageHint: 'healthy food',
      href: '/planos-alimentares',
      isLocked: false,
    },
    {
      id: 'exercicios-funcionais',
      title: 'Exercícios Funcionais',
      description: 'Acesse rotinas de exercícios para fazer em casa ou na academia e atinja suas metas.',
      imageUrl: 'https://i.imgur.com/SKOn9WS.png',
      imageHint: 'person exercising',
      href: '/courses/como-se-confessar-melhor',
      isLocked: false,
    },
    {
      id: 'receitas',
      title: 'Receitas',
      description: 'Descubra receitas deliciosas e saudáveis para complementar sua dieta e seus treinos.',
      imageUrl: 'https://i.imgur.com/gQLDEeZ.png',
      imageHint: 'healthy cooking',
      href: '/receitas',
      isLocked: false,
    },
     {
      id: 'jejum-intermitente',
      title: 'Jejum Intermitente',
      description: 'Aprenda os segredos e benefícios do jejum intermitente para potencializar seus resultados.',
      imageUrl: 'https://i.imgur.com/5ciMYwL.png',
      imageHint: 'clock time',
      href: '/courses/jejum-intermitente',
      isLocked: false,
    },
    {
      id: 'sucos-detox',
      title: 'Sucos Detox',
      description: 'Receitas de sucos detox para limpar o organismo e renovar suas energias.',
      imageUrl: 'https://i.imgur.com/NGRLtL0.png',
      imageHint: 'green juice',
      href: '/courses/sucos-detox',
      isLocked: false,
    },
    {
      id: 'chas-secretos',
      title: 'Chás Secretos para Secar',
      description: 'Descubra chás poderosos que ajudam a acelerar o metabolismo e a queima de gordura.',
      imageUrl: 'https://i.imgur.com/322VseA.png',
      imageHint: 'cup of tea',
      href: '/courses/chas-secretos',
      isLocked: false,
    },
    {
      id: 'shots-matinais',
      title: 'Shots Matinais',
      description: 'Comece o dia com shots matinais que dão um boost na sua imunidade e energia.',
      imageUrl: 'https://i.imgur.com/2OEIa3L.png',
      imageHint: 'health shot',
      href: '/courses/shots-matinais',
      isLocked: false,
    },
    {
      id: 'marmitas-fitness',
      title: 'Marmitas Fitness',
      description: 'Liberado em 3 dias',
      imageUrl: 'https://i.imgur.com/W2Hpko3.png',
      imageHint: 'meal prep containers',
      href: '#',
      isLocked: true,
    },
  ];
  
  const renderCourseCard = (course: (typeof courses)[0]) => {
    const cardContent = (
      <Card className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300", 
        course.isLocked 
          ? "cursor-not-allowed" 
          : "cursor-pointer group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1"
      )}>
        <Image
          src={course.imageUrl}
          alt={`Capa do curso ${course.title}`}
          width={1080}
          height={1920}
          className={cn(
            "object-cover w-full h-full aspect-[9/16]",
            course.isLocked && "filter grayscale"
          )}
          data-ai-hint={course.imageHint}
        />
        {course.isLocked && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4">
            <Lock className="h-12 w-12 text-white/80 mb-4" />
            <p className="text-white font-bold text-center font-headline">{course.title}</p>
            <p className="text-white/80 text-sm text-center font-display">{course.description}</p>
          </div>
        )}
      </Card>
    );

    if (course.isLocked) {
      return (
        <TooltipProvider key={course.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="block group">{cardContent}</div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{course.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <Link href={course.href} className="block group" key={course.id}>
        {cardContent}
      </Link>
    );
  };


  return (
    <ClientAppLayout>
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">Meus Cursos</h1>
        <p className="text-muted-foreground font-display mb-8">Acesse os cursos que você adquiriu e comece a sua jornada.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {courses.map(renderCourseCard)}
        </div>
      </div>
    </ClientAppLayout>
  );
}

export default function CoursesPage() {
    return (
        <AuthWrapper>
            <CoursesContent />
        </AuthWrapper>
    )
}
