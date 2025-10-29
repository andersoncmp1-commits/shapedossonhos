
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export default function CoursesPage() {
  const courses = [
    {
      id: 'comece-por-aqui',
      title: 'Comece Por Aqui',
      description: 'O seu guia inicial para uma jornada de transformação e bem-estar completo.',
      imageUrl: 'https://i.imgur.com/bqsMdwl.png',
      imageHint: 'path beginning',
      modulesCount: 4,
      href: '/courses/comece-por-aqui', 
    },
    {
      id: 'planos-alimentares',
      title: 'Planos Alimentares',
      description: 'Encontre planos de dieta personalizados para seus objetivos de saúde e bem-estar.',
      imageUrl: 'https://picsum.photos/seed/diet/1024/1024',
      imageHint: 'healthy food',
      modulesCount: 4,
      href: '/planos-alimentares', 
    },
    {
      id: 'exercicios-funcionais',
      title: 'Exercícios Funcionais',
      description: 'Acesse rotinas de exercícios para fazer em casa ou na academia e atinja suas metas.',
      imageUrl: 'https://picsum.photos/seed/exercise/1024/1024',
      imageHint: 'person exercising',
      modulesCount: 5,
      href: '/courses/como-se-confessar-melhor', 
    },
    {
      id: 'receitas',
      title: 'Receitas',
      description: 'Descubra receitas deliciosas e saudáveis para complementar sua dieta e seus treinos.',
      imageUrl: 'https://picsum.photos/seed/recipes/1024/1024',
      imageHint: 'healthy cooking',
      modulesCount: 10,
      href: '#',
    },
     {
      id: 'jejum-intermitente',
      title: 'Jejum Intermitente',
      description: 'Aprenda os segredos e benefícios do jejum intermitente para potencializar seus resultados.',
      imageUrl: 'https://picsum.photos/seed/fasting/1024/1024',
      imageHint: 'clock time',
      modulesCount: 5,
      href: '/courses/jejum-intermitente',
    },
    {
      id: 'sucos-detox',
      title: 'Sucos Detox',
      description: 'Receitas de sucos detox para limpar o organismo e renovar suas energias.',
      imageUrl: 'https://picsum.photos/seed/detox/1024/1024',
      imageHint: 'green juice',
      modulesCount: 7,
      href: '#',
    },
    {
      id: 'chas-secretos',
      title: 'Chás Secretos para Secar',
      description: 'Descubra chás poderosos que ajudam a acelerar o metabolismo e a queima de gordura.',
      imageUrl: 'https://picsum.photos/seed/tea/1024/1024',
      imageHint: 'cup of tea',
      modulesCount: 9,
      href: '#',
    },
    {
      id: 'shots-matinais',
      title: 'Shots Matinais',
      description: 'Comece o dia com shots matinais que dão um boost na sua imunidade e energia.',
      imageUrl: 'https://picsum.photos/seed/shots/1024/1024',
      imageHint: 'health shot',
      modulesCount: 12,
      href: '#',
    },
    {
      id: 'marmitas-fitness',
      title: 'Marmitas Fitness',
      description: 'Aprenda a preparar marmitas práticas e saudáveis para a semana toda.',
      imageUrl: 'https://picsum.photos/seed/mealprep/1024/1024',
      imageHint: 'meal prep containers',
      modulesCount: 8,
      href: '#',
    },
  ];

  return (
    <div>
      <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">Meus Cursos</h1>
      <p className="text-muted-foreground font-display mb-8">Acesse os cursos que você adquiriu e comece a sua jornada.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Link key={course.id} href={course.href} className="block group">
            <Card className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
                             group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1">
              <Image
                src={course.imageUrl}
                alt={`Capa do curso ${course.title}`}
                width={1080}
                height={1920}
                className="object-cover w-full h-full aspect-[9/16]"
                data-ai-hint={course.imageHint}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
