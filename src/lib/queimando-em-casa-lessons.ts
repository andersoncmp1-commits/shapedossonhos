
export interface Lesson {
    id: string;
    title: string;
    videoUrl: string;
}

export const lessons: Lesson[] = [
    { id: '1', title: 'Alongamento em casa', videoUrl: 'https://www.youtube.com/embed/CobwLeQbLBs?modestbranding=1&rel=0' },
    { id: '2', title: 'Treino de perna em casa', videoUrl: 'https://www.youtube.com/embed/5SdcPIhBMAA?modestbranding=1&rel=0' },
    { id: '3', title: 'Glúteos em Casa', videoUrl: 'https://www.youtube.com/embed/vRwsMD5WTfM?modestbranding=1&rel=0' },
    { id: '4', title: 'Circuito Funcional', videoUrl: 'https://www.youtube.com/embed/S36kplNNAjw?modestbranding=1&rel=0' },
    { id: '5', title: 'Treinão de Superiores', videoUrl: 'https://www.youtube.com/embed/TvWrevdp8mc?modestbranding=1&rel=0' },
];
