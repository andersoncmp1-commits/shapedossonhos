"use client";

import { useState } from "react";
import Link from 'next/link';
import { lessons, type Lesson } from "@/lib/confession-modules";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ConfessionCoursePage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleOpenLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };
  
  const handleCloseDialog = () => {
    setSelectedLesson(null);
  };

  const courseTitle = "Curso: Como se Confessar melhor";

  return (
    <div>
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/courses">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Cursos
                </Link>
            </Button>
        </div>
        <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">{courseTitle}</h1>
        <p className="text-muted-foreground font-display mb-8">Aprenda o passo a passo para fazer uma boa confissão.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map(lesson => (
                <Card 
                    key={lesson.id} 
                    onClick={() => handleOpenLesson(lesson)}
                    className="overflow-hidden rounded-lg cursor-pointer transition-all duration-300 group hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
                >
                    <div className="relative">
                        <Image
                            src={lesson.thumbnailUrl}
                            alt={`Thumbnail da aula ${lesson.title}`}
                            width={480}
                            height={360}
                            className="object-cover w-full h-auto aspect-video"
                            data-ai-hint={lesson.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transform group-hover:scale-110 transition-transform" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold font-display">{`Aula ${lesson.id}: ${lesson.title}`}</h3>
                    </div>
                </Card>
            ))}
        </div>

        {selectedLesson && (
          <Dialog open={!!selectedLesson} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
            <DialogContent className="max-w-4xl w-full h-auto flex flex-col p-0 aspect-video">
                <DialogHeader className="p-4 pb-0 absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-black/50 to-transparent">
                    <DialogTitle className="text-white">{selectedLesson.title}</DialogTitle>
                     <DialogClose className="text-white" />
                </DialogHeader>
                <div className="flex-grow overflow-hidden rounded-lg">
                    <iframe 
                        src={selectedLesson.videoUrl} 
                        title={selectedLesson.title}
                        width="100%" 
                        height="100%" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="border-0"
                    ></iframe>
                </div>
            </DialogContent>
          </Dialog>
        )}
    </div>
  );
}
