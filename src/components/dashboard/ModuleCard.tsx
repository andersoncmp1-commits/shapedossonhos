import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Undo2 } from "lucide-react";
import type { Module } from "@/lib/modules";
import Image from "next/image";

interface ModuleCardProps {
  module: Module;
  isCompleted: boolean;
  onComplete: (moduleId: string) => void;
}

export function ModuleCard({ module, isCompleted, onComplete }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Card className={`flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 overflow-hidden ${isCompleted ? 'border-primary/50' : ''}`}>
      <CardHeader className="p-0 relative">
        <Image
          src={module.imageUrl}
          alt={`Imagem do ${module.title}`}
          width={600}
          height={400}
          className="object-cover w-full h-48"
          data-ai-hint={module.imageHint}
        />
        <div className="absolute top-4 right-4">
            {isCompleted ? (
                <div className="flex items-center gap-2 text-white bg-green-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <CheckCircle2 className="w-4 h-4"/>
                    <span>Concluído</span>
                </div>
            ) : null}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
          <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl">{module.title}</CardTitle>
                <CardDescription className="font-display mt-1">{module.description}</CardDescription>
              </div>
          </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full font-display" 
          onClick={() => onComplete(module.id)}
          variant={isCompleted ? 'secondary' : 'default'}
        >
          {isCompleted ? <Undo2 className="mr-2 h-4 w-4"/> : <CheckCircle2 className="mr-2 h-4 w-4"/>}
          {isCompleted ? "Desmarcar" : "Marcar como Concluído"}
        </Button>
      </CardFooter>
    </Card>
  );
}
