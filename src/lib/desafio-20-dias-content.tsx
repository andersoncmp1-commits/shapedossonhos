
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
                            description: `Panqueca de banana e aveia\n(Receita no aplicativo)\nChá verde (1 xícara)`,
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
    },
    {
        day: 3,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Café puro (1 xícara)\nPão integral (1 fatia)\nQueijo ricota (2 colheres sopa)\nUvas roxas (1 xícara)`,
                            kcal: "227",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Mingau de Aveia\n(Receita no aplicativo)\nMorangos (8 unidades 100g)`,
                            kcal: "177",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Omelete fácil, alface, tomate, ovo e cenoura\n(Receita no aplicativo)\nCafé sem açúcar (1 xícara)\nPêra (1 unidade)`,
                            kcal: "116",
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
                            description: `Maçã picada (1 xícara)\nCanela em pó (1 colher de chá)`,
                            kcal: "71",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Iogurte desnatado (160g)\nMorangos picados (8 unidades 100g)`,
                            kcal: "73",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Ameixa em cubos (1 xícara)`,
                            kcal: "76",
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
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nPatinho grelhado (2 filés médios 80g)\nCenoura cozida (4 colheres sopa)\nRepolho refogado (3 colheres sopa)\nPepino em rodelas (10 fatias)\nAlface cortada (à vontade)`,
                            kcal: "312",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Arroz branco (4 colheres sopa)\nStrogonoff Fit (4 colheres sopa)\nCenoura cozida (3 colheres sopa)\nPurê de abóbora (2 colheres sopa)\nAlface e tomate (à vontade)`,
                            kcal: "281",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão preto (3 colheres sopa 70g)\nOvo frito na água (2 unidades)\nTomate fatiado (1 xícara)\nAlface cortada (1 xícara)\nCenoura crua ralada (1 xícara)`,
                            kcal: "334",
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
                            description: `Panqueca de banana com aveia\n(Receita no aplicativo)\nChá verde (1 xícara)`,
                            kcal: "202",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Banana da prata em rodelas (1 unidade)\nMel (1 colher de sopa)\nChia (1 colher de sopa)`,
                            kcal: "180",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Omelete de tomate\n(Receita no aplicativo)\nSuco de melancia natural (200ml)`,
                            kcal: "107",
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
                            description: `Alface cortada (1 xícara)\nMacarrão sem glúten (4 colheres sopa)\nOvos cozidos (2 unidades)\nBrócolis cozido (5 talos)\nTomate fatiado (1 unidade)`,
                            kcal: "263",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Arroz branco (3 colheres sopa 75g)\nBrócolis cozido (5 talos)\nAbrobrinha refogada (3 colheres sopa 70g)\nCenoura crua ralada (3 colheres sopa)\nTomate fatiado (1 unidade)\nAlface fatiada (1 xícara)\nOvos cozidos (2 unidades)`,
                            kcal: "291",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Purê de batata (7 colheres sopa 120g)\nFrango desfiado (5 colheres sopa 80g)\nBrócolis cozido (5 talos)\nTomate e alface (à vontade)`,
                            kcal: "275",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 4,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Pão de forma integral (1 fatia)\nOvo mexido (1 unidade)\nQueijo branco ( 1 fatia média)\nCafé sem açúcar (1 xícara)\nMamão em cubos (1 xícara)`,
                            kcal: "280",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Pão de forma integral (1 fatia)\nRequeijão light (1 colher sopa)\nCafé sem açúcar (1 xícara)\nUvas roxas (1 xícara)`,
                            kcal: "219",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nCafé sem açúcar (1 xícara)\nMamão em cubos (1 xícara)\nSementes de chia (1 colher sopa)`,
                            kcal: "266",
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
                            description: `Maçã picada (1 xícara fatiada)\nMel (1 colher sopa)`,
                            kcal: "121",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Melancia em cubos (1 xícara)\nSementes de chia (1 colher sopa)`,
                            kcal: "104",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Melão fatiado (1 xícara)`,
                            kcal: "53",
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
                            description: `Batata cozida (3 unidades média, 120g)\nOmelete (ovo 1 unidade)\nRepolho ralado refogado (3 colheres sopa)\nCenoura cozida (à vontade)\nTomate (1 unidade cortado em rodelas)\nSuco de acerola natural (150ml)`,
                            kcal: "326",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nPeito de frango grelhado (2 filés médios 100g)\nAlface cortada (1 xícara)\nTomate cortado em rodelas (1 unidade)\nCenoura crua ralada (2 colheres sopa 30g)`,
                            kcal: "348",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nCarne bovina (1 filé médio 80g)\nCenoura cozida em rodelas (10 fatias)\nAlface cortada (1 xícara)\nPepino cortado (1 xícara)`,
                            kcal: "281",
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
                            description: `Melão em cubos (1 xícara)\nBiscoitos de polvilho 5 unidades)`,
                            kcal: "69",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Banana prata (1 unidade)\nFarelo de aveia 1 colher sopa 10g)`,
                            kcal: "92",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Mamão (1 fatia ou 100g)\nFarelo de aveia (1 colher sopa 10g)`,
                            kcal: "80",
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
                            description: `Creme de abóbora (5 colheres sopa 60)\nCarne moída refogada (3 colheres sopa 50g)\nArroz com brócolis (3 colheres sopa 75g)\nAlface cortada (1 xícara)`,
                            kcal: "238",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Espinafre refogado (3 colheres sopa 50g)\nFrango desfiado (5 colheres sopa 80g)\nArroz integral (4 colheres sopa)\nAlface cortada (1 xícara)`,
                            kcal: "250",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz com ervilhas (3 colheres sopa)\nCouve folha crua cortada ( 1 xícara)\nAbobrinha cozida (porção 110g)\nOmelete (1 ovo)`,
                            kcal: "287",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 5,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Pão francês (1 unidade)\nQueijo ricota (2 fatias 30g)\nCafé sem açúcar (1 xícara)\nGoiaba fatiada (1 unidade)`,
                            kcal: "268",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Ovo mexido (1 unidade)\nBanana da terra na frigideira (metade)\nCafé sem açúcar (1 xícara)\nMamão papaia (1 metade)`,
                            kcal: "234",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Pão francês (1 unidade)\nOvo mexido (1 unidade)\nCafé sem açúcar (1 xícara)\nMaçã fatiada (1 unidade)`,
                            kcal: "242",
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
                            description: `Pêra fatiada (1 xícara)`,
                            kcal: "96",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Shake de banana congelada e aveia\n(Receita no aplicativo)`,
                            kcal: "128",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Maçã fatiada (1 xícara)\nSuco ou chá verde (170ml)`,
                            kcal: "118",
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
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão (1 concha rasa 80g)\nLombo grelhado (2 files 100g)\nAlface e tomate cortada (1 xícara)`,
                            kcal: "288",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Batata cozida (3 unidades ou 120g)\nCarne cozida (2 files cozido ou 80g)\nRepolho refogado com cenoura (4 colheres sopa)\nTomate cereja (4 unidades fatiado)\nSuco de acerola sem açúcar (170ml)`,
                            kcal: "321",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão (4 colheres sopa)\nFrango Desfiado (4 colheres sopa 100g)\nBrócolis cozido (5 talos)\nPepino fatiado (1 xícara)\nTomate cereja (4 unidades fatiado)`,
                            kcal: "370",
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
                            description: `Iogurte Natural (170g)\nMorango fatiado (3 unidades)`,
                            kcal: "189",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Coxinha Low carb\n(Receita no aplicativo)`,
                            kcal: "121",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Iogurte natural desnatado (170g)\nBanana prata em rodelas(1 unidade)\nFarelo de aveia (1 colher sopa)`,
                            kcal: "155",
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
                            description: `Patinho moído (3 colheres sopa)\nPurê de batata (4 colheres sopa)\nSalada de alface e tomate (1 xícara)\nCenoura ralada (3 colheres sopa)`,
                            kcal: "255",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Omelete de legumes\n(Receita no aplicativo)\nFilé de peixe grelhado (1 filé ou 100g)\nSalada de alface fatiado (1 xícara)`,
                            kcal: "223",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Mini pizza de cenoura e frango Low carb\n(Receita no aplicativo)\nSobremesa de manga\n(Receita no aplicativo)`,
                            kcal: "180",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 6,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Cuscuz cozido com sal (4 colheres sopa 100g)\nOvo mexido (1 unidade)\nCreme de ricota light (1 colher sopa)\nCafé sem açúcar, pode ser com leite desnatado (1 xícara)`,
                            kcal: "260",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Pão integral (1 fatia)\nCreme de ricota light (1 colher sopa)\nOvo mexido (1 unidade)\nCafé com leite desnatado (1 xícara)\nGoiaba fatiada (1 unidade)`,
                            kcal: "253",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Pão francês sem miolo (1 unidade)\nQueijo mussarela (1 fatia)\nOvo mexido (1 unidade)\nCafé puro sem açúcar (1 xícara)\nMamão papaia em cubos (1 xícara)`,
                            kcal: "344",
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
                            description: `Pote de iogurte natural (170g)`,
                            kcal: "117",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Melancia em cubos (1 xícara)`,
                            kcal: "46",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Pote de iogurte natural desnatado(160g)`,
                            kcal: "50",
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
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa)\nPeito de frango grelhado (2 filés 80g)\nOvo de codorna cozido (3 unidades)\nAlface e tomate (à vontade)\nBrócolis cozido (4 Ramos)`,
                            kcal: "330",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Escondidinho de frango\n(Receita no aplicativo)\nAlface e tomate fatiado (1/5 xícara)`,
                            kcal: "250",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nPatinho moído (4 colheres sopa 80g)\nChuchu cru ralado (4 colheres sopa)\nCenoura cozida (3 colheres sopa)\nBrócolis cozido (4 talos)\nTomate fatiado (1 unidade)`,
                            kcal: "246",
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
                            description: `Queijo branco (2 fatias pequenas 40g)\nCafé sem açúcar (1 xícara)\nFruta da sua ideia`,
                            kcal: "94",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Iogurte natural desnatado (160g)\nFrutas em pedaços\nSementes de chia (1 colher sopa)`,
                            kcal: "108",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Pão integral (1 fatia)\nCreme de ricota light (1 colher sopa)\nAlface (1 folha)\nMaçã fatiada (1 xícara)`,
                            kcal: "111",
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
                            description: `Escondidinho de abóbora com frango\n(Receita no aplicativo)\nMaçã fatiada (1 xícara)`,
                            kcal: "255",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Rap 10 Low carb\n(Receita no aplicativo)`,
                            kcal: "223",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Bolinho de frango e tapioca fit\n(Receita no aplicativo)`,
                            kcal: "180",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 7,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: `Mini pizza de frigideira\n(Receita no aplicativo)\nMamão papaia fatiado (1 xícara)`,
                            kcal: "230",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Salada de frutas cremosa\n(Receita no aplicativo)`,
                            kcal: "74",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Pão francês (1 unidade)\nAlface (2 folhas)\nFrango desfiado (3 colheres sopa 50g)\nTomates cereja (5 unidades)\nMaçã picada (1 xícara)`,
                            kcal: "238",
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
                            description: `Chocolate 40% (5 cubinhos)`,
                            kcal: "131",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Maçã fatiada (1 xícara)\nCopo de água`,
                            kcal: "57",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Morangos (6 unidades 100g)`,
                            kcal: "32",
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
                            description: `Filé de peixe grelhado (1 filé 80g)\nBrócolis cozidos (8 talos)\nPurê de batata (6 colheres 120g)\nAlface fatiada (1/5 xícara)`,
                            kcal: "221",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão tropeiro (2 colheres sopa 50g)\nPeito de frango grelhado (2 filés 80g)\nBrócolis cozido (6 talos)\nCenoura cozida (à vontade)\nTomate fatiado (1 unidade)`,
                            kcal: "342",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nCarne bovina cozida com cenoura (4 colheres sopa 70g)\nAlface e tomate (2 xícaras)\nBrócolis cozido (4 unidades)`,
                            kcal: "299",
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
                            description: `Sopa detox de legumes\n(Receita no aplicativo)\nTorrada integral (1 fatia)`,
                            kcal: "170",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: `Peito de frango grelhado (2 filés 120g)\nBrócolis cozido (5 Ramos)\nCenoura cozida (6 colheres sopa)\nChuchu cru ralado (4 colheres sopa)\nAlface e tomate cortado (1/5 xícara)`,
                            kcal: "160",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 8,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: "Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nCafé puro (1 xícara)\nMamão (1 metade = 100g)",
                            kcal: "216",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Pão francês (1 unidade)\nOvos mexidos (1 unidade)\nCafé puro (1 xícara)\nUvas roxas (1 xícara)",
                            kcal: "254",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Cuscuz cozido (8 Colheres Sopa 100g)\nOvos mexidos (1 unidade)\nCafé puro (1 xícara)\nMamão (1 metade 100g)",
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
                            description: "Manga em cubos (1 xícara)\nSementes de chia (1 colher sopa)",
                            kcal: "165",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Panqueca de banana e aveia\n(Receita no aplicativo)\nChá verde (1 xícara)",
                            kcal: "121",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Mamão papaia (1 metade)\nFarelo de aveia (1 xícara)",
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
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nPatinho grelhado (2 filés médios 80g)\nCenoura cozida (4 colheres sopa)\nRepolho refogado (3 colheres sopa)\nPepino em rodelas (10 fatias)\nAlface cortada (à vontade)",
                            kcal: "312",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (4 colheres sopa)\nStrogonoff Fit (4 colheres sopa)\n(Receita no aplicativo)\nCenoura cozida (3 colheres sopa)\nPurê de abóbora (2 colheres sopa)\nAlface e tomate (à vontade)",
                            kcal: "281",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão preto (3 colheres sopa 70g)\nOvo frito na água (2 unidades)\nTomate fatiado (1 xícara)\nAlface cortada (1 xícara)\nCenoura crua ralada (1 xícara)",
                            kcal: "334",
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
                            description: "Melão em cubos (1 xícara)\nBiscoitos de polvilho 5 unidades)",
                            kcal: "69",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Banana prata (1 unidade)\nFarelo de aveia 1 colher sopa 10g)",
                            kcal: "92",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Mamão (1 fatia ou 100g)\nFarelo de aveia (1 colher sopa 10g)",
                            kcal: "80",
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
                            description: "Patinho moído (3 colheres sopa)\nPurê de batata (4 colheres sopa)\nSalada de alface e tomate (1 xícara)\nCenoura ralada (3 colheres sopa)",
                            kcal: "255",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Omelete de legumes\n(Receita no aplicativo)\nFilé de peixe grelhado (1 filé ou 100g)\nSalada de alface fatiado (1 xícara)",
                            kcal: "223",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Mini pizza de cenoura e frango Low carb\n(Receita no aplicativo)\nSobremesa de manga\n(Receita no aplicativo)",
                            kcal: "180",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 9,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: "Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nQueijo branco (2 pedaços médio)\nCafé puro (1 xícara)\nMaçã fatiada (1 unidade)",
                            kcal: "257",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Pão de forma Integral (1 fatia)\nCreme de ricota light (1 colher sopa)\nCafé puro (1 xícara)\nMelão fatiado (1 xícara)",
                            kcal: "186",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Panqueca de Banana\n(Receita no Aplicativo)\nChá verde (1 xícara)\nGoiaba fatiada (1 unidade)",
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
                            description: "Melancia em cubos (1 xícara)",
                            kcal: "46",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Maçã fatiada (1 xícara)",
                            kcal: "65",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Mamão papaia (1 xícara em cubos)\nFarelo de aveia (1 xícara)",
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
                            description: "Batata cozida (3 unidades média, 120g)\nOmelete (ovo 1 unidade)\nRepolho ralado refogado (3 colheres sopa)\nCenoura cozida (à vontade)\nTomate (1 unidade cortado em rodelas)\nSuco de acerola natural (150ml)",
                            kcal: "326",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nPeito de frango grelhado (2 filés médios 100g)\nAlface cortada (1 xícara)\nTomate cortado em rodelas (1 unidade)\nCenoura crua ralada (2 colheres sopa 30g)",
                            kcal: "348",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nCarne bovina (1 filé médio 80g)\nCenoura cozida em rodelas (10 fatias)\nAlface cortada (1 xícara)\nPepino cortado (1 xícara)",
                            kcal: "281",
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
                            description: "Panqueca de banana com aveia\n(Receita no aplicativo)\nChá verde (1 xícara)",
                            kcal: "202",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Banana da prata em rodelas (1 unidade)\nMel (1 colher de sopa)\nChia (1 colher de sopa)",
                            kcal: "180",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Omelete de tomate\n(Receita no aplicativo)\nSuco de melancia natural (200ml)",
                            kcal: "107",
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
                            description: "Cuscuz de milho cozido com sal\n(1 pedaço médio ou 130g)\nOvo de galinha mexido (2 unidades ou 90g)\nGelatina diet (5 colheres sopa cheia)",
                            kcal: "372",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Sanduíche de atum (Atum enlatado, Maionese, Alface e tomate)\n(Receita completa no aplicativo)\nSuco de laranja natural (copo 150ml)",
                            kcal: "356",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Prato fundo de Sopa de legumes com frango Desfiado\n(Receita no aplicativo)\nTorrada integral (1 fatia)",
                            kcal: "264",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 10,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: "Pão de forma integral (1 fatia)\nOvo mexido (1 unidade)\nQueijo branco ( 1 fatia média)\nCafé sem açúcar (1 xícara)\nMamão em cubos (1 xícara)",
                            kcal: "280",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Pão de forma integral (1 fatia)\nRequeijão light (1 colher sopa)\nCafé sem açúcar (1 xícara)\nUvas roxas (1 xícara)",
                            kcal: "219",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nCafé sem açúcar (1 xícara)\nMamão em cubos (1 xícara)\nSementes de chia (1 colher sopa)",
                            kcal: "266",
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
                            description: "Maçã picada (1 xícara)\nCanela em pó (1 colher de chá)",
                            kcal: "71",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Iogurte desnatado (160g)\nMorangos picados (8 unidades 100g)",
                            kcal: "73",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Ameixa em cubos (1 xícara)",
                            kcal: "76",
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
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nLombo magro grelhado (2 filés médios 80g)\nBrócolis cozido (5 talos)\nAlface e tomate cereja à vontade\nCenoura crua ralada à vontade",
                            kcal: "290",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nCarne bovina grelhada (2 files 80g)\nRepolho refogado (5 colheres sopa)\nCenoura cozida (à vontade)\nSalada de alface e tomate (à vontade)",
                            kcal: "280",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Arroz branco (3 colheres sopa 75g)\nOvos cozidos (2 unidades)\nCenoura cozida (à vontade)\nRepolho cru desfiado (1 xícara)\nSalada de Pepino sem caroço (10 fatias)\nSalada de alface (à vontade)",
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
                            description: "Iogurte Natural (170g)\nMorango fatiado (3 unidades)",
                            kcal: "189",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Coxinha Low carb\n(Receita no aplicativo)",
                            kcal: "121",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Iogurte natural desnatado (170g)\nBanana prata em rodelas(1 unidade)\nFarelo de aveia (1 colher sopa)",
                            kcal: "155",
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
                            description: "Alface cortada (1 xícara)\nMacarrão sem glúten (4 colheres sopa)\nOvos cozidos (2 unidades)\nBrócolis cozido (5 talos)\nTomate fatiado (1 unidade)",
                            kcal: "263",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa 75g)\nBrócolis cozido (5 talos)\nAbrobrinha refogada (3 colheres sopa 70g)\nCenoura crua ralada (3 colheres sopa)\nTomate fatiado (1 unidade)\nAlface fatiada (1 xícara)\nOvos cozidos (2 unidades)",
                            kcal: "291",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Purê de batata (7 colheres sopa 120g)\nFrango desfiado (5 colheres sopa 80g)\nBrócolis cozido (5 talos)\nTomate e alface (à vontade)",
                            kcal: "260",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 11,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: "Ovos mexidos (2 unidades)\nPão integral (1 fatia)\nCafé com leite desnatado (1 xícara)\nMorangos (5 unidades)",
                            kcal: "304",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Mingau de Aveia\n*Receita no aplicativo)\nMorangos (8 unidades 100g)",
                            kcal: "177",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Omelete fácil, alface, tomate, ovo e cenoura (Receita no aplicativo)\nCafé sem açúcar (1 xícara)\nPêra (1 unidade)",
                            kcal: "140",
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
                            description: "Pêra fatiada (1 xícara)",
                            kcal: "96",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Shake de banana congelada e aveia\n(Receita no aplicativo)",
                            kcal: "128",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Maçã fatiada (1 xícara)\nSuco ou chá verde (170ml)",
                            kcal: "118",
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
                            description: "Arroz integral (5 colheres sopa 50g)\nFeijão cozido (1 concha rasa 80g)\nFrango grelhado (2 filés médios 100g)\nBrócolis cozido (4 talos)\nAlface e tomate (à vontade)",
                            kcal: "287",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Batata cozida (3 unidades ou 120g)\nCarne cozida (2 files cozido ou 80g)\nRepolho refogado com cenoura (4 colheres sopa)\nTomate cereja (4 unidades fatiado)\nSuco de acerola sem açúcar (170ml)",
                            kcal: "321",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão (4 colheres sopa)\nFrango Desfiado (4 colheres sopa 100g)\nBrócolis cozido (5 talos)\nPepino fatiado (1 xícara)\nTomate cereja (4 unidades fatiado)",
                            kcal: "370",
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
                            description: "Leite desnatado (150ml)\nGranola (1 colher sopa)",
                            kcal: "114",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Banana prata fatiada (1 unidade)\nAveia em flocos (2 colheres sopa)\nMel puro (1 colher sopa)",
                            kcal: "228",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Abacaxi (3 fatias média ou 100g)\nCanela em pó (2 colher sopa rasa)",
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
                            description: "Tofu grelhado (4 blocos 70g)\nBatata inglesa (7 colheres sopa 100g)\nCenoura cozida (à vontade)\nAlface e tomate (à vontade)",
                            kcal: "177",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa 75g)\nBrócolis cozido (5 talos)\nAbrobrinha refogada (3 colheres sopa 70g)\nCenoura crua ralada (3 colheres sopa)\nTomate fatiado (1 unidade)\nAlface fatiada (1 xícara)\nOvos cozidos (2 unidades)",
                            kcal: "291",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Purê de batata (7 colheres sopa 120g)\nFrango desfiado (5 colheres sopa 80g)\nBrócolis cozido (5 talos)\nTomate e alface (à vontade)",
                            kcal: "260",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 12,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: "Café com leite desnatado (1 xícara)\nPão integral (2 fatias)\nQueijo branco (1 fatia)\nMamão papaia (1 fatia)",
                            kcal: "277",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Ovos mexidos (2 unidades)\nCafé puro (1 xícara)\nBanana prata fatiada (1 unidade)\nCanela em pó (1 colher rasa)",
                            kcal: "274",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Ovos mexidos (1 unidade)\nPão integral (1 fatia)\nCafé sem açúcar (1 xícara)\nMamão em cubos (1 xícara)\nSementes de chia (1 colher sopa)",
                            kcal: "266",
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
                            description: "Manga em cubos (1 xícara)\nSementes de chia (1 colher sopa)",
                            kcal: "165",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Panqueca de banana e aveia\n(Receita no aplicativo)\nChá verde (1 xícara)",
                            kcal: "121",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Mamão papaia (1 metade)\nFarelo de aveia (1 xícara)",
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
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa)\nPeito de frango grelhado (2 filés 80g)\nOvo de codorna cozido (3 unidades)\nAlface e tomate (à vontade)\nBrócolis cozido (4 Ramos)",
                            kcal: "330",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nLombo magro grelhado (2 filés médios 80g)\nBrócolis cozido (5 talos)\nAlface e tomate cereja à vontade\nCenoura crua ralada à vontade",
                            kcal: "290",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Arroz branco (3 colheres sopa 75g)\nPatinho moído (4 colheres sopa 80g)\nChuchu cru ralado (4 colheres sopa)\nCenoura cozida (3 colheres sopa)\nBrócolis cozido (4 talos)\nTomate fatiado (1 unidade)",
                            kcal: "246",
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
                            description: "Iogurte Natural (170g)\nMorangos (4 unidades)",
                            kcal: "132",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Iogurte natural desnatado (160g)\nAveia em flocos (1 colher sopa)\nMorangos (4 unidades)",
                            kcal: "118",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Café com canela (1 xícara)\nSanduíche de frango\n(Receita no aplicativo)\nMaçã fatiada (1 unidade)",
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
                            description: "Rap 10 Low carb\n(Receita no aplicativo)\nAbacaxi (1 fatia)\nCanela em pó (1 colher sopa)",
                            kcal: "233",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa)\nCouve folha picada (1 xícara)\nFrango Desfiado (1 xícara 100g)\nBrócolis cozido (5 talos)",
                            kcal: "291",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Purê de batata (7 colheres sopa 120g)\nFrango desfiado (5 colheres sopa 80g)\nBrócolis cozido (5 talos)\nTomate e alface (à vontade)",
                            kcal: "260",
                        },
                    ]
                }
            },
        ]
    },
    {
        day: 13,
        meals: [
            {
                name: "Café da Manhã",
                content: {
                    title: "Escolha uma das opções abaixo!",
                    options: [
                        {
                            title: "OPÇÃO 1",
                            description: "Iogurte natural desnatado (160g)\nGranola (2 colheres sopa)\nMorangos fatiados (3 unidades)\nTorrada integral (1 fatia)",
                            kcal: "195",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Misto quente: Pão integral (2 fatias)\nQueijo branco (1 fatia)\nPresunto magro (1 fatia)\nCafé puro (1 xícara)\nMamão em cubos (1 xícara)",
                            kcal: "298",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Panqueca de Banana\n(Receita no Aplicativo)\nChá verde (1 xícara)\nGoiaba fatiada (1 unidade)",
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
                            description: "Pote de iogurte natural (170g)\nFrutas que você tiver em casa",
                            kcal: "117",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Melancia em cubos (1 xícara)",
                            kcal: "46",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Pote de iogurte natural desnatado(160g)\nFrutas que você tiver em casa",
                            kcal: "50",
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
                            description: "Strogonoff Fit (4 colheres sopa 80g)\n(Receita no aplicativo)\nArroz branco (3 colheres sopa 75g)\nEspinafre refogado (4 colheres sopa)\nCenoura crua ralada(3 colheres sopa)",
                            kcal: "268",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nPeito de frango grelhado (2 filés médios 100g)\nAlface cortada (1 xícara)\nTomate cortado em rodelas (1 unidade)\nCenoura crua ralada (2 colheres sopa 30g)",
                            kcal: "348",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Arroz branco (3 colheres sopa 75g)\nFeijão cozido (1 concha rasa 80g)\nCarne bovina (1 filé médio 80g)\nCenoura cozida em rodelas (10 fatias)\nAlface cortada (1 xícara)\nPepino cortado (1 xícara)",
                            kcal: "281",
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
                            description: "Queijo branco (2 fatias pequenas 40g)\nCafé sem açúcar (1 xícara)\nFruta da sua ideia",
                            kcal: "94",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Iogurte natural desnatado (160g)\nFrutas em pedaços\nSementes de chia (1 colher sopa)",
                            kcal: "108",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Pão integral (1 fatia)\nCreme de ricota light (1 colher sopa)\nAlface (1 folha)\nMaçã fatiada (1 xícara)",
                            kcal: "111",
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
                            description: "Alface fatiada (1 xícara)\nPeito de frango grelhado sem pele\n( 2 filés médio ou 100g)\nPurê de batata (5 colheres sopa ou (100g)",
                            kcal: "272",
                        },
                        {
                            title: "OPÇÃO 2",
                            description: "Crepioca light com brócolis\n(Receita no Aplicativo)",
                            kcal: "212",
                        },
                        {
                            title: "OPÇÃO 3",
                            description: "Frango grelhado (2 filés médio 100g)\nArroz branco (3 colheres)\nCenoura cozida (5 colheres sopa)\nBrócolis cozido (4 talos)\nAlface e tomate (a vontade)",
                            kcal: "260",
                        },
                    ]
                }
            },
        ]
    }
];

export function getChallengeDay(day: number): ChallengeDay | undefined {
    const foundDay = challengeContent.find(d => d.day === day);
    if(foundDay) return foundDay;

    // Fallback for days > 13 for now, mirroring previous days
    if (day > 13 && day <= 20) {
        const dayToMirror = day % 13 === 0 ? 13 : day % 13;
        const mirroredDay = challengeContent.find(d => d.day === dayToMirror);
        if (mirroredDay) {
            return { ...mirroredDay, day };
        }
    }

    return undefined;
}

    