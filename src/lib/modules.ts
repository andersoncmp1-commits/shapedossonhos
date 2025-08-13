import type { LucideIcon } from 'lucide-react';
import { BookOpen, Target, Construction, FlaskConical, BarChartBig } from 'lucide-react';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/*
  ONDE PERSONALIZAR MÓDULOS:
  Altere ou adicione objetos neste array para customizar os módulos do seu dashboard.
  - O 'id' deve ser único e em letras minúsculas.
  - O 'title' é o que aparece no card.
  - A 'description' é o texto de apoio.
  - O 'icon' é do pacote 'lucide-react'. Você pode encontrar outros ícones em https://lucide.dev/
*/
export const modules: Module[] = [
  {
    id: 'introducao',
    title: 'Módulo 1: Introdução',
    description: 'Comece sua jornada e entenda os fundamentos.',
    icon: BookOpen,
  },
  {
    id: 'estrategias',
    title: 'Módulo 2: Estratégias',
    description: 'Aprenda as estratégias centrais para o sucesso.',
    icon: Target,
  },
  {
    id: 'implementacao',
    title: 'Módulo 3: Implementação',
    description: 'Coloque em prática o que aprendeu.',
    icon: Construction,
  },
  {
    id: 'testes',
    title: 'Módulo 4: Testes',
    description: 'Valide suas implementações e otimize.',
    icon: FlaskConical,
  },
  {
    id: 'escala',
    title: 'Módulo 5: Escala',
    description: 'Escale suas soluções e alcance novos patamares.',
    icon: BarChartBig,
  },
];
