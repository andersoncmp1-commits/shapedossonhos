import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CoursesPage() {
  const courses = [
    {
      id: 'quaresma-sao-miguel',
      title: 'Guia para Quaresma de São Miguel Arcanjo',
      description: 'Um guia completo para você viver intensamente a Quaresma de São Miguel Arcanjo.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'archangel michael',
      modulesCount: 5,
      href: '/dashboard', 
    },
    // Adicione mais cursos aqui no futuro
  ];

  return (
    <div>
      <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">Meus Cursos</h1>
      <p className="text-muted-foreground font-display mb-8">Acesse os cursos que você adquiriu e comece a sua jornada.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0">
               <Image 
                src={course.imageUrl} 
                alt={`Capa do curso ${course.title}`}
                width={600}
                height={400}
                className="object-cover w-full h-48"
                data-ai-hint={course.imageHint}
                />
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline mb-2">{course.title}</CardTitle>
              <CardDescription className="font-display mb-4 flex-grow">{course.description}</CardDescription>
              <div className="text-sm text-muted-foreground mb-6">
                {course.modulesCount} módulos
              </div>
              <Button asChild className="w-full mt-auto font-display">
                <Link href={course.href}>
                  Acessar Curso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
