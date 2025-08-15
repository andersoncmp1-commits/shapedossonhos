import type { LucideIcon } from 'lucide-react';
import { Shield, Sword, Heart, Crown, BookOpenCheck, Anchor, Cross } from 'lucide-react';

export interface Module {
  id: string;
  title: string;
  icon: LucideIcon;
  imageUrl: string;
  imageHint: string;
  pdfUrl: string;
}

/*
  ONDE PERSONALIZAR MÓDULOS:
  Altere ou adicione objetos neste array para customizar os módulos do seu dashboard.
  - O 'id' deve ser único e em letras minúsculas.
  - O 'title' é o que aparece no card.
  - O 'icon' é do pacote 'lucide-react'. Você pode encontrar outros ícones em https://lucide.dev/
*/
export const modules: Module[] = [
  {
    id: 'guia-entender-quaresma',
    title: 'Guia para Entender a Quaresma de São Miguel',
    icon: Anchor,
    imageUrl: 'https://i.imgur.com/XEp3PgV.png',
    imageHint: 'scroll ancient',
    pdfUrl: 'https://drive.google.com/file/d/1d-NdJ28YnyOFcVdWY8YFWoEoC0IjWAZ1/preview',
  },
  {
    id: 'guia-quaresma',
    title: 'Guia da Quaresma de São Miguel',
    icon: Sword,
    imageUrl: 'https://i.imgur.com/VJVmKzb.png',
    imageHint: 'knight praying',
    pdfUrl: 'https://drive.google.com/file/d/19yr58V4q3icmIb87ApM50ZKX-Zs4jDs8/preview',
  },
  {
    id: 'exame-consciencia',
    title: 'Exame de Consciência',
    icon: Shield,
    imageUrl: 'https://i.imgur.com/6dkzflI.png',
    imageHint: 'angel wings',
    pdfUrl: 'https://drive.google.com/file/d/1AK61dFO00bDnuXLE53uhFHeMUCv3TTak/preview',
  },
  {
    id: 'guia-jejum-penitencia',
    title: 'Guia de Jejum e Penitência',
    icon: BookOpenCheck,
    imageUrl: 'https://i.imgur.com/WXgDXVK.png',
    imageHint: 'rosary bible',
    pdfUrl: 'https://drive.google.com/file/d/1XyMtvfxr_MzBdJSFmkZM3jVZsvztcA-g/preview',
  },
  {
    id: 'oracoes-diarias',
    title: 'Orações Diárias da Quaresma de São Miguel',
    icon: Heart,
    imageUrl: 'https://i.imgur.com/8yuVnea.png',
    imageHint: 'light heart',
    pdfUrl: 'https://drive.google.com/file/d/1C06lKbocBJRtaE2ctrJNMZ0lwCrAS0Kw/preview',
  },
  {
    id: 'terco-sao-miguel',
    title: 'Terço de São Miguel',
    icon: Crown,
    imageUrl: 'https://i.imgur.com/mcaJjy2.png',
    imageHint: 'crown light',
    pdfUrl: 'https://drive.google.com/file/d/1ASvyq8P4xIKbwti2U_EwXYn71iyzsBzy/preview',
  },
  {
    id: 'caminho-caridade',
    title: 'Caminho de 40 dias de Caridade',
    icon: Heart,
    imageUrl: 'https://i.imgur.com/aNh6b5B.png',
    imageHint: 'helping hands',
    pdfUrl: 'https://drive.google.com/file/d/121Nn27Q0pRwfoMnuaU8LfQ0Wg3OGU67Q/preview',
  },
  {
    id: 'visita-santissimo',
    title: 'Visita ao Santíssimo',
    icon: Cross,
    imageUrl: 'https://i.imgur.com/9vO2j8W.png',
    imageHint: 'monstrance church',
    pdfUrl: 'https://drive.google.com/file/d/13MOCfN4jK4yeRZSJk8bkQcrcEmxQpf03/preview',
  },
];
