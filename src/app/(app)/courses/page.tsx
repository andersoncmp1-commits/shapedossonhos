
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CoursesPage() {
  const courses = [
    {
      id: 'dietas',
      title: 'Dietas',
      description: 'Encontre planos de dieta personalizados para seus objetivos de saúde e bem-estar.',
      imageUrl: 'https://picsum.photos/seed/diet/1024/1024',
      imageHint: 'healthy food',
      modulesCount: 8,
      href: '/dashboard', 
    },
    {
      id: 'exercicios',
      title: 'Exercícios',
      description: 'Acesse rotinas de exercícios para fazer em casa ou na academia e atinja suas metas.',
      imageUrl: 'https://picsum.photos/seed/exercise/1024/1024',
      imageHint: 'person exercising',
      modulesCount: 6,
      href: '/courses/como-se-confessar-melhor', 
    },
    {
      id: 'receitas',
      title: 'Receitas',
      description: 'Descubra receitas deliciosas e saudáveis para complementar sua dieta e seus treinos.',
      imageUrl: 'https://picsum.photos/seed/recipes/1024/1024',
      imageHint: 'healthy cooking',
      modulesCount: 10,
      href: '#', // TODO: Crie a página para este curso
    },
  ];

  return (
    <div>
      <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">Meus Cursos</h1>
      <p className="text-muted-foreground font-display mb-8">Acesse os cursos que você adquiriu e comece a sua jornada.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link key={course.id} href={course.href} className="block transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 rounded-lg">
            <Card className="flex flex-col overflow-hidden h-full">
              <CardHeader className="p-0 relative">
                 <Image 
                  src={course.imageUrl} 
                  alt={`Capa do curso ${course.title}`}
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-auto aspect-video"
                  data-ai-hint={course.imageHint}
                  />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline mb-2">{course.title}</CardTitle>
                <CardDescription className="font-display mb-4 flex-grow">{course.description}</CardDescription>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-muted-foreground">
                        {course.modulesCount} módulos
                    </span>
                    <div className="flex items-center text-primary font-display">
                        Acessar Curso
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
