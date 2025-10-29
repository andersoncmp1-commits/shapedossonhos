
interface MealOption {
    title: string;
    description: string;
    kcal: string;
}

interface MealContent {
    title: string;
    options: MealOption[];
}

interface Meal {
    name: string;
    content: MealContent;
}

interface ChallengeDay {
    day: number;
    meals: Meal[];
}

const challengeContent: ChallengeDay[] = [
    {
        day: 1,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nCafé puro (1 xícara)\nMamão (1 metade = 100g)`,
                            kcal: "216",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Pão francês (1 unidade)\nOvos mexidos (1 unidade)\nCafé puro (1 xícara)\nUvas roxas (1 xícara)`,
                            kcal: "254",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Cuscuz cozido (8 Colheres Sopa 100g)\nOvos mexidos (1 unidade)\nCafé puro (1 xícara)\nMamão (1 metade 100g)`,
                            kcal: "260",
                        },
                    ]
                }
            },
            {
                name: "Lanche da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Melancia em cubos (1 xícara)`,
                            kcal: "46",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Maçã fatiada (1 xícara)`,
                            kcal: "65",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Mamão papaia (1 xícara em cubos)\nFarelo de aveia (1 xícara)`,
                            kcal: "98",
                        },
                    ]
                }
            },
            {
                name: "Almoço",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nLombo magro grelhado (2 filés médios 80g)\nBrócolis cozido (5 talos)\nAlface e tomate cereja à vontade\nCenoura crua ralada à vontade`,
                            kcal: "290",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nCarne bovina grelhada (2 files 80g)\nRepolho refogado (5 colheres sopa)\nCenoura cozida (à vontade)\nSalada de alface e tomate (à vontade)`,
                            kcal: "280",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nOvos cozidos (2 unidades)\nCenoura cozida (à vontade)\nRepolho cru desfiado (1 xícara)\nSalada de Pepino sem caroço (10 fatias)\nSalada de alface (à vontade)`,
                            kcal: "285",
                        },
                    ]
                }
            },
            {
                name: "Lanche da Tarde",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Iogurte Natural (170g)\nMorangos (4 unidades)`,
                            kcal: "132",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Iogurte natural desnatado (160g)\nAveia em flocos (1 colher sopa)\nMorangos (4 unidades)`,
                            kcal: "118",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Café com canela (1 xícara)\nSanduíche de frango\n(Receita no aplicativo)\nMaçã fatiada (1 unidade)`,
                            kcal: "177",
                        },
                    ]
                }
            },
            {
                name: "Jantar",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Alface fatiada (1 xícara)\nPeito de frango grelhado sem pele\n( 2 filés médio ou 100g)\nPurê de batata (5 colheres sopa ou (100g)`,
                            kcal: "272",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Crepioca light com brócolis\n(Receita no Aplicativo)`,
                            kcal: "212",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Frango grelhado (2 filés médio 100g)\nArroz branco (3 colheres)\nCenoura cozida (5 colheres sopa)\nBrócolis cozido (4 talos)\nAlface e tomate (a gosto)`,
                            kcal: "340",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 2,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nQueijo branco (2 pedaços médio)\nCafé puro (1 xícara)\nMaçã fatiada (1 unidade)`,
                            kcal: "257",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Pão de forma Integral (1 fatia)\nCreme de ricota light (1 colher sopa)\nCafé puro (1 xícara)\nMelão fatiado (1 xícara)`,
                            kcal: "186",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Panqueca de Banana\n(Receita no Aplicativo)\nChá verde (1 xícara)\nGoiaba fatiada (1 unidade)`,
                            kcal: "239",
                        },
                    ]
                }
            },
            {
                name: "Lanche da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Manga em cubos (1 xícara)\nSementes de chia (1 colher sopa)`,
                            kcal: "165",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Panqueca de banana e aveia\nChá verde (1 xícara)`,
                            kcal: "121",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Mamão papaia (1 metade)\nFarelo de aveia (1 xícara)`,
                            kcal: "98",
                        },
                    ]
                }
            },
            {
                name: "Almoço",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Arroz branco ( 3 colheres sopa 75g)\nFeijão (1 concha rasa 80g)\nCarne moída refogada (1 porção ou 80g)\nBrócolis cozido ao vapor (5 ramos)\nCenoura crua ralada (1 xícara)\nVinagrete (4 colheres sopa ou 40g)`,
                            kcal: "326",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Filé de peixe grelhado (2 files médio)\nArroz integral (4 colheres sopa ou 80g)\nCouve flor refogada (3 ramos)\nBeterraba cozida fatiada\n(4 colheres sopa 50g)\nSalada de alface e tomate (1 xícara)`,
                            kcal: "321",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão (1 concha rasa 80g)\nCoxa de frango na airfreyr (1 unidade)\nBrócolis cozido no vapor (5 ramos)\nVinagrete (4 colheres sopa ou 40g)\nAlface fatiada (à vontade)`,
                            kcal: "268",
                        },
                    ]
                }
            },
            {
                name: "Lanche da Tarde",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Leite desnatado (150ml)\nGranola (1 colher sopa)`,
                            kcal: "114",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Banana prata fatiada (1 unidade)\nAveia em flocos (2 colheres sopa)\nMel puro (1 colher sopa)`,
                            kcal: "228",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Abacaxi (3 fatias média ou 100g)\nCanela em pó (2 colher sopa rasa)`,
                            kcal: "84",
                        },
                    ]
                }
            },
            {
                name: "Jantar",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Cuscuz de milho cozido com sal\n(1 pedaço médio ou 130g)\nOvo de galinha mexido (2 unidades ou 90g)\nGelatina diet (5 colheres sopa cheia)`,
                            kcal: "372",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Sanduíche de atum (Atum enlatado, Maionese, Alface e tomate)\n(Receita completa no aplicativo)\nSuco de laranja natural (copo 150ml)`,
                            kcal: "356",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Prato fundo de Sopa de legumes com frango Desfiado\n(Receita no aplicativo)\nTorrada integral (1 fatia)`,
                            kcal: "264",
                        },
                    ]
                }
            },
        ]
    }
];

export function getChallengeDay(day: number): ChallengeDay | undefined {
    return challengeContent.find(d => d.day === day);
}
