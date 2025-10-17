import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CoursesPage() {
  const courses = [
    {
      id: 'quaresma-sao-miguel',
      title: 'Guia para Quaresma de São Miguel Arcanjo',
      description: 'Um guia completo para você viver intensamente a Quaresma de São Miguel Arcanjo.',
      imageUrl: 'https://quaresmasaomiguel.primefocus.com.br/wp-content/uploads/2025/08/ChatGPT-Image-Aug-12-2025-11_21_25-PM.png',
      imageHint: 'archangel michael',
      modulesCount: 8,
      href: '/dashboard', 
    },
    {
      id: 'como-se-confessar-melhor',
      title: 'Curso: Como se Confessar melhor',
      description: 'Aprenda o passo a passo para fazer uma boa confissão e receber a misericórdia de Deus.',
      imageUrl: 'https://picsum.photos/seed/confession/1024/1024',
      imageHint: 'priest confession',
      modulesCount: 6,
      href: '/courses/como-se-confessar-melhor', 
    },
  ];

  return (
    <div>
      <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">Meus Cursos</h1>
      <p className="text-muted-foreground font-display mb-8">Acesse os cursos que você adquiriu e comece a sua jornada.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <Link key={course.id} href={course.href} className="block transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 rounded-lg">
            <Card className="flex flex-col overflow-hidden h-full">
              <CardHeader className="p-0 relative">
                 <Image 
                  src={course.imageUrl} 
                  alt={`Capa do curso ${course.title}`}
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-auto aspect-square"
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
