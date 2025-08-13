import type { LucideIcon } from 'lucide-react';
import { Shield, Sword, Heart, Crown, Sun, Anchor, BookOpenCheck } from 'lucide-react';

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
    id: 'guia-entender-quaresma',
    title: 'Guia para Entender a Quaresma de São Miguel',
    description: 'Entenda o propósito da Quaresma e prepare seu espírito para a jornada.',
    icon: Anchor,
    imageUrl: 'https://i.imgur.com/XEp3PgV.png',
    imageHint: 'scroll ancient',
  },
  {
    id: 'guia-quaresma',
    title: 'Guia da Quaresma de São Miguel',
    description: 'Aprenda a reconhecer e a lutar contra as tentações com a ajuda de São Miguel.',
    icon: Sword,
    imageUrl: 'https://i.imgur.com/VJVmKzb.png',
    imageHint: 'knight praying',
  },
  {
    id: 'exame-consciencia',
    title: 'Exame de Consciência',
    description: 'Medite sobre o poder de São Miguel como nosso guardião e protetor.',
    icon: Shield,
    imageUrl: 'https://i.imgur.com/6dkzflI.png',
    imageHint: 'angel wings',
  },
  {
    id: 'guia-jejum-penitencia',
    title: 'Guia de Jejum e Penitência',
    description: 'Aprofunde-se nas orações e súplicas a São Miguel Arcanjo.',
    icon: BookOpenCheck,
    imageUrl: 'https://i.imgur.com/WXgDXVK.png',
    imageHint: 'rosary bible',
  },
  {
    id: 'oracoes-diarias',
    title: 'Orações Diárias da Quaresma de São Miguel',
    description: 'Busque a transformação interior e a conversão sincera do coração.',
    icon: Heart,
    imageUrl: 'https://i.imgur.com/8yuVnea.png',
    imageHint: 'light heart',
  },
  {
    id: 'terco-sao-miguel',
    title: 'Terço de São Miguel',
    description: 'Celebre a vitória de Cristo e a intercessão de São Miguel na nossa vida.',
    icon: Crown,
    imageUrl: 'https://i.imgur.com/mcaJjy2.png',
    imageHint: 'crown light',
  },
];
