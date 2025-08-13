import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Undo2 } from "lucide-react";
import type { Module } from "@/lib/modules";

interface ModuleCardProps {
  module: Module;
  isCompleted: boolean;
  onComplete: (moduleId: string) => void;
}

export function ModuleCard({ module, isCompleted, onComplete }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <Card className={`flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 ${isCompleted ? 'border-primary/50' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="bg-primary/10 p-3 rounded-full">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          {isCompleted ? (
              <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5"/>
                  <span className="text-sm font-medium">Concluído</span>
              </div>
          ) : null}
        </div>
        <CardTitle className="font-headline pt-4">{module.title}</CardTitle>
        <CardDescription className="font-display">{module.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Can add more content here later */}
      </CardContent>
      <CardFooter>
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
