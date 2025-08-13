import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { Module } from "@/lib/modules";
import Image from "next/image";

interface ModuleCardProps {
  module: Module;
  isCompleted: boolean;
  onComplete: (moduleId: string) => void;
}

export function ModuleCard({ module, isCompleted, onComplete }: ModuleCardProps) {
  return (
    <Card 
      onClick={() => onComplete(module.id)}
      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 group
                  hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 
                  focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background
                  ${isCompleted ? 'border-primary' : 'border-transparent'}`}
    >
      <Image
        src={module.imageUrl}
        alt={`Imagem do módulo ${module.title}`}
        width={1080}
        height={1920}
        className="object-cover w-full h-full aspect-[9/16]"
        data-ai-hint={module.imageHint}
      />
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isCompleted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      
      {isCompleted && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CheckCircle2 className="w-16 h-16 text-white/90" />
        </div>
      )}
    </Card>
  );
}
