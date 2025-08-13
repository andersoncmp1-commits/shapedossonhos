import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { Module } from "@/lib/modules";
import Image from "next/image";

interface ModuleCardProps {
  module: Module;
  isCompleted: boolean;
  onOpen: (module: Module) => void;
}

export function ModuleCard({ module, isCompleted, onOpen }: ModuleCardProps) {
  return (
    <Card 
      onClick={() => onOpen(module)}
      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 group
                  hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 
                  focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background
                  border-2 ${isCompleted ? 'border-primary' : 'border-transparent'}`}
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
        <div className="absolute top-4 right-4">
          <CheckCircle2 className="w-8 h-8 text-white/90 drop-shadow-lg" />
        </div>
      )}
    </Card>
  );
}
