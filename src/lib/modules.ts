import type { LucideIcon } from 'lucide-react';
import { Shield, Sword, Heart, Crown, Sun, Anchor, Pray } from 'lucide-react';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  imageHint: string;
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
    id: 'preparacao',
    title: 'Módulo 1: A Preparação',
    description: 'Entenda o propósito da Quaresma e prepare seu espírito para a jornada.',
    icon: Anchor,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'scroll ancient',
  },
  {
    id: 'o-combate',
    title: 'Módulo 2: O Combate Espiritual',
    description: 'Aprenda a reconhecer e a lutar contra as tentações com a ajuda de São Miguel.',
    icon: Sword,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'knight praying',
  },
  {
    id: 'a-protecao',
    title: 'Módulo 3: A Proteção do Arcanjo',
    description: 'Medite sobre o poder de São Miguel como nosso guardião e protetor.',
    icon: Shield,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'angel wings',
  },
  {
    id: 'a-oracao',
    title: 'Módulo 4: A Força da Oração',
    description: 'Aprofunde-se nas orações e súplicas a São Miguel Arcanjo.',
    icon: Pray,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'rosary bible',
  },
  {
    id: 'a-conversao',
    title: 'Módulo 5: A Conversão do Coração',
    description: 'Busque a transformação interior e a conversão sincera do coração.',
    icon: Heart,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'light heart',
  },
  {
    id: 'a-vitoria',
    title: 'Módulo 6: A Vitória sobre o Mal',
    description: 'Celebre a vitória de Cristo e a intercessão de São Miguel na nossa vida.',
    icon: Crown,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'crown light',
  },
  {
    id: 'a-perseveranca',
    title: 'Módulo 7: A Perseverança na Fé',
    description: 'Leve os frutos desta Quaresma para a sua vida e persevere no caminho da fé.',
    icon: Sun,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sunshine forest',
  },
];
