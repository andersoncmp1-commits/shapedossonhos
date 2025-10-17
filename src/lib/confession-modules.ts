export interface Lesson {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    imageHint: string;
}

export const lessons: Lesson[] = [
    {
        id: '1',
        title: 'Como fazer uma boa confissão?',
        videoUrl: 'https://www.youtube.com/embed/1uBufZ8ThBM',
        thumbnailUrl: 'https://i.ytimg.com/vi/1uBufZ8ThBM/hqdefault.jpg',
        imageHint: 'priest talking'
    },
    {
        id: '2',
        title: 'Como fazer um bom EXAME DE CONSCIÊNCIA para se confessar?',
        videoUrl: 'https://www.youtube.com/embed/duhmYewFyS4',
        thumbnailUrl: 'https://i.ytimg.com/vi/duhmYewFyS4/hqdefault.jpg',
        imageHint: 'person thinking'
    },
    {
        id: '3',
        title: 'CONFISSÃO: O que significa arrepender-se dos próprios pecados?',
        videoUrl: 'https://www.youtube.com/embed/wrw9HqRw1yo',
        thumbnailUrl: 'https://i.ytimg.com/vi/wrw9HqRw1yo/hqdefault.jpg',
        imageHint: 'person praying'
    },
    {
        id: '4',
        title: 'Que propósito devo fazer para que minha confissão seja válida?',
        videoUrl: 'https://www.youtube.com/embed/M7LMNL1uryk',
        thumbnailUrl: 'https://i.ytimg.com/vi/M7LMNL1uryk/hqdefault.jpg',
        imageHint: 'hands together'
    },
    {
        id: '5',
        title: 'Como é que eu devo confessar os meus pecados para o sacerdote?',
        videoUrl: 'https://www.youtube.com/embed/pmFTT2SGPvU',
        thumbnailUrl: 'https://i.ytimg.com/vi/pmFTT2SGPvU/hqdefault.jpg',
        imageHint: 'priest listening'
    },
    {
        id: '6',
        title: 'Qual a importância da penitência que você recebe do sacerdote na Confissão?',
        videoUrl: 'https://www.youtube.com/embed/xZBFlYXQEGE',
        thumbnailUrl: 'https://i.ytimg.com/vi/xZBFlYXQEGE/hqdefault.jpg',
        imageHint: 'rosary cross'
    }
];
