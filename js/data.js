const trilhaBahiasPrime = [

  /* =====================================================
     MÓDULO 01
     MATEMÁTICA — OPERAÇÕES E PROPRIEDADES
  ===================================================== */

  {
    id: 1,
    ordem: 1,
    area: "Matemática",
    titulo: "Operações e Propriedades dos Números",
    descricao:
      "Construa a base numérica necessária para resolver problemas matemáticos do ENEM com segurança.",

    dificuldade: "Fundamental",
    xp: 100,

    teoria: {

      introducao:
        "Grande parte da Matemática do ENEM depende de uma habilidade aparentemente simples: manipular números corretamente. Neste módulo, você vai revisar as quatro operações, sinais, prioridade das operações e propriedades fundamentais. O objetivo não é apenas fazer contas, mas entender como elas funcionam.",

      topicos: [

        {
          titulo: "1. As quatro operações",
          texto:
            "Adição representa a combinação de quantidades. Subtração representa diferença ou retirada. Multiplicação pode ser entendida como uma soma repetida ou como uma relação entre grandezas. Divisão representa repartição ou a razão entre duas quantidades. Exemplo: se 5 caixas possuem 12 garrafas cada, temos 5 × 12 = 60 garrafas."
        },

        {
          titulo: "2. Números positivos e negativos",
          texto:
            "Números negativos aparecem em situações como temperaturas abaixo de zero, dívidas e variações. Ao somar números de sinais iguais, somamos os valores e mantemos o sinal. Com sinais diferentes, calculamos a diferença entre os valores e mantemos o sinal daquele de maior módulo. Exemplo: -8 + 3 = -5."
        },

        {
          titulo: "3. Multiplicação e divisão com sinais",
          texto:
            "Na multiplicação e na divisão, sinais iguais produzem resultado positivo e sinais diferentes produzem resultado negativo. Assim, (-4) × (-3) = 12, enquanto (-4) × 3 = -12."
        },

        {
          titulo: "4. Ordem das operações",
          texto:
            "Uma expressão deve ser resolvida seguindo uma ordem. Primeiro resolvemos o que estiver entre parênteses. Depois, potências e raízes. Em seguida, multiplicações e divisões. Por último, adições e subtrações. Operações do mesmo nível são resolvidas da esquerda para a direita."
        },

        {
          titulo: "5. Propriedade distributiva",
          texto:
            "A distributiva permite multiplicar um número por cada termo dentro de um parêntese. Por exemplo: 3 × (10 + 2) = 3 × 10 + 3 × 2 = 36. Essa propriedade será muito importante quando estudarmos álgebra."
        },

        {
          titulo: "6. Estratégia para o ENEM",
          texto:
            "Antes de começar uma conta longa, identifique exatamente o que o problema está pedindo e quais informações realmente serão utilizadas. Muitas questões do ENEM exigem mais interpretação do que cálculo."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Uma escola comprou 8 caixas com 24 cadernos em cada caixa. Quantos cadernos foram comprados?",
        alternativas: [
          "32",
          "96",
          "192",
          "224",
          "240"
        ],
        correta: 2
      },

      {
        pergunta:
          "Qual é o resultado de 18 - 5 × 2?",
        alternativas: [
          "8",
          "13",
          "26",
          "36",
          "10"
        ],
        correta: 0
      },

      {
        pergunta:
          "Uma temperatura estava em -3 °C e aumentou 8 °C. Qual passou a ser a temperatura?",
        alternativas: [
          "-11 °C",
          "-5 °C",
          "3 °C",
          "5 °C",
          "11 °C"
        ],
        correta: 3
      },

      {
        pergunta:
          "Qual expressão é equivalente a 4 × (10 + 3)?",
        alternativas: [
          "4 × 10 + 3",
          "4 × 10 + 4 × 3",
          "10 + 4 × 3",
          "4 + 10 + 3",
          "40 + 3"
        ],
        correta: 1
      },

      {
        pergunta:
          "Qual é o resultado de (-6) × (-5)?",
        alternativas: [
          "-30",
          "-11",
          "11",
          "30",
          "1"
        ],
        correta: 3
      }

    ]

  },


  /* =====================================================
     MÓDULO 02
     LINGUAGENS — INTERPRETAÇÃO
  ===================================================== */

  {
    id: 2,
    ordem: 2,
    area: "Linguagens",
    titulo: "Interpretação de Texto I",
    descricao:
      "Aprenda a identificar tema, ideia central, informações explícitas e inferências.",

    dificuldade: "Fundamental",
    xp: 120,

    teoria: {

      introducao:
        "Interpretação de texto está presente em praticamente toda a prova de Linguagens e também ajuda nas demais áreas. Interpretar não significa imaginar o que o autor quis dizer: significa construir uma resposta apoiada nas informações e relações presentes no texto.",

      topicos: [

        {
          titulo: "1. Tema",
          texto:
            "O tema é o assunto geral tratado pelo texto. Para identificá-lo, pergunte: sobre o que esse texto fala? Um texto pode mencionar vários elementos, mas normalmente existe um assunto que conecta todos eles."
        },

        {
          titulo: "2. Ideia principal",
          texto:
            "A ideia principal é aquilo que o texto comunica sobre o tema. Tema e ideia principal não são a mesma coisa. O tema pode ser 'uso das redes sociais', enquanto a ideia principal pode ser 'o uso excessivo das redes sociais modifica hábitos de comunicação'."
        },

        {
          titulo: "3. Informação explícita",
          texto:
            "Uma informação explícita está diretamente apresentada no texto. A questão pode apenas reformular essa informação usando outras palavras. Por isso, é importante comparar o sentido das alternativas com o texto."
        },

        {
          titulo: "4. Inferência",
          texto:
            "Inferir é chegar a uma conclusão a partir de pistas presentes no texto. A conclusão não está escrita literalmente, mas precisa ser sustentada pelo que foi apresentado. Uma inferência válida não pode contradizer o texto."
        },

        {
          titulo: "5. Contexto",
          texto:
            "Uma palavra pode assumir sentidos diferentes dependendo do contexto. Por isso, questões de interpretação não devem ser resolvidas analisando palavras isoladamente."
        },

        {
          titulo: "6. Estratégia de prova",
          texto:
            "Leia o comando da questão com atenção. Depois identifique exatamente qual informação deve ser encontrada. Ao analisar as alternativas, elimine aquelas que contradizem, exageram ou apresentam informações que o texto não permite concluir."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Em interpretação textual, o tema corresponde principalmente:",
        alternativas: [
          "À opinião pessoal do leitor.",
          "Ao assunto geral desenvolvido pelo texto.",
          "À primeira frase do texto.",
          "À palavra mais repetida.",
          "Ao título obrigatoriamente."
        ],
        correta: 1
      },

      {
        pergunta:
          "Uma inferência é:",
        alternativas: [
          "Uma informação inventada pelo leitor.",
          "Uma cópia literal de uma frase.",
          "Uma conclusão sustentada por pistas do texto.",
          "Uma opinião sem relação com o texto.",
          "Um erro de interpretação."
        ],
        correta: 2
      },

      {
        pergunta:
          "Ao encontrar uma palavra desconhecida em um texto, a melhor estratégia inicial é:",
        alternativas: [
          "Ignorar todo o parágrafo.",
          "Escolher qualquer significado conhecido.",
          "Analisar o contexto em que ela aparece.",
          "Considerar a palavra um erro.",
          "Abandonar a questão."
        ],
        correta: 2
      },

      {
        pergunta:
          "Uma alternativa que apresenta uma afirmação muito mais ampla do que aquilo que o texto permite concluir deve ser:",
        alternativas: [
          "Preferida.",
          "Aceita automaticamente.",
          "Analisada como possível exagero.",
          "Considerada sempre correta.",
          "Escolhida se for mais longa."
        ],
        correta: 2
      },

      {
        pergunta:
          "A ideia principal de um texto representa:",
        alternativas: [
          "A mensagem central desenvolvida sobre o tema.",
          "Qualquer exemplo apresentado.",
          "A quantidade de parágrafos.",
          "Somente o título.",
          "A opinião do leitor."
        ],
        correta: 0
      }

    ]

  },


  /* =====================================================
     MÓDULO 03
     MATEMÁTICA — FRAÇÕES E DECIMAIS
  ===================================================== */

  {
    id: 3,
    ordem: 3,
    area: "Matemática",
    titulo: "Frações e Números Decimais",
    descricao:
      "Entenda diferentes representações de uma mesma quantidade e aprenda a operar com elas.",

    dificuldade: "Fundamental",
    xp: 120,

    teoria: {

      introducao:
        "Frações e números decimais aparecem constantemente em porcentagens, probabilidades, proporções, escalas e problemas financeiros. Mais importante que decorar regras é compreender que essas representações podem indicar a mesma quantidade.",

      topicos: [

        {
          titulo: "1. O significado de uma fração",
          texto:
            "Na fração a/b, o número a é chamado numerador e b é o denominador. O denominador indica em quantas partes iguais o todo foi dividido, enquanto o numerador indica quantas dessas partes estamos considerando."
        },

        {
          titulo: "2. Frações equivalentes",
          texto:
            "Frações diferentes podem representar a mesma quantidade. Por exemplo, 1/2, 2/4 e 50/100 são equivalentes. Multiplicar ou dividir numerador e denominador pelo mesmo número diferente de zero preserva o valor da fração."
        },

        {
          titulo: "3. Soma e subtração",
          texto:
            "Quando os denominadores são iguais, operamos apenas os numeradores. Quando são diferentes, precisamos encontrar um denominador comum. Exemplo: 1/2 + 1/4 = 2/4 + 1/4 = 3/4."
        },

        {
          titulo: "4. Multiplicação de frações",
          texto:
            "Multiplicamos numerador por numerador e denominador por denominador. Assim, 2/3 × 3/5 = 6/15, que pode ser simplificado para 2/5."
        },

        {
          titulo: "5. Divisão de frações",
          texto:
            "Para dividir por uma fração, multiplicamos pela fração inversa. Por exemplo: 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3."
        },

        {
          titulo: "6. Fração e decimal",
          texto:
            "Uma fração também representa uma divisão. Assim, 1/2 = 1 ÷ 2 = 0,5. Da mesma forma, 3/4 = 0,75. Essa relação será essencial para porcentagem e probabilidade."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Qual número decimal representa a fração 1/4?",
        alternativas: [
          "0,10",
          "0,20",
          "0,25",
          "0,40",
          "0,50"
        ],
        correta: 2
      },

      {
        pergunta:
          "Qual das frações abaixo é equivalente a 1/2?",
        alternativas: [
          "2/3",
          "2/4",
          "3/4",
          "1/3",
          "4/5"
        ],
        correta: 1
      },

      {
        pergunta:
          "Quanto é 1/2 + 1/4?",
        alternativas: [
          "1/6",
          "2/6",
          "2/4",
          "3/4",
          "1"
        ],
        correta: 3
      },

      {
        pergunta:
          "Quanto é 2/3 × 3/4?",
        alternativas: [
          "1/2",
          "2/7",
          "5/7",
          "6/7",
          "1"
        ],
        correta: 0
      },

      {
        pergunta:
          "O número decimal 0,75 corresponde a:",
        alternativas: [
          "1/4",
          "1/2",
          "2/3",
          "3/4",
          "4/3"
        ],
        correta: 3
      }

    ]

  },


  /* =====================================================
     MÓDULO 04
     HUMANAS — TEMPO, ESPAÇO E FONTES
  ===================================================== */

  {
    id: 4,
    ordem: 4,
    area: "Ciências Humanas",
    titulo: "Tempo, Espaço e Fontes Históricas",
    descricao:
      "Aprenda conceitos fundamentais para interpretar processos históricos e sociais.",

    dificuldade: "Fundamental",
    xp: 120,

    teoria: {

      introducao:
        "Ciências Humanas no ENEM exige interpretação de acontecimentos, documentos, mapas, imagens e transformações sociais. Antes de estudar períodos históricos específicos, precisamos compreender como o conhecimento histórico é construído.",

      topicos: [

        {
          titulo: "1. História e processo histórico",
          texto:
            "História não é apenas uma sequência de datas. Ela estuda ações humanas e transformações das sociedades ao longo do tempo, buscando compreender relações entre acontecimentos, permanências e mudanças."
        },

        {
          titulo: "2. Tempo histórico",
          texto:
            "O tempo histórico não se limita ao relógio ou calendário. Diferentes transformações acontecem em ritmos distintos. Uma guerra pode durar poucos anos, enquanto mudanças culturais podem ocorrer durante várias gerações."
        },

        {
          titulo: "3. Espaço",
          texto:
            "Os acontecimentos históricos ocorrem em espaços que também são transformados pela ação humana. Território, cidade, campo e fronteira não são apenas localizações: envolvem relações sociais, econômicas e políticas."
        },

        {
          titulo: "4. Fontes históricas",
          texto:
            "Fontes históricas são vestígios utilizados para estudar sociedades. Documentos escritos, fotografias, objetos, construções, mapas, relatos orais, músicas e obras de arte podem funcionar como fontes."
        },

        {
          titulo: "5. Análise crítica das fontes",
          texto:
            "Uma fonte não deve ser tratada como uma descrição neutra e perfeita do passado. É necessário observar quem a produziu, quando, em qual contexto, para qual público e com quais possíveis interesses."
        },

        {
          titulo: "6. Mudança e permanência",
          texto:
            "Ao analisar sociedades, podemos identificar elementos que mudaram e outros que permaneceram. O ENEM frequentemente apresenta documentos de épocas diferentes para que o estudante reconheça essas transformações."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Qual dos itens abaixo pode ser considerado uma fonte histórica?",
        alternativas: [
          "Somente documentos oficiais.",
          "Somente textos antigos.",
          "Fotografias, objetos, textos e relatos orais.",
          "Apenas livros escritos por historiadores.",
          "Somente construções antigas."
        ],
        correta: 2
      },

      {
        pergunta:
          "Ao analisar uma fonte histórica, é importante considerar:",
        alternativas: [
          "Apenas sua aparência.",
          "Somente sua idade.",
          "Quem a produziu e em qual contexto.",
          "A quantidade de palavras.",
          "Somente se concordamos com ela."
        ],
        correta: 2
      },

      {
        pergunta:
          "O estudo histórico busca compreender principalmente:",
        alternativas: [
          "Somente datas.",
          "Ações humanas e transformações das sociedades.",
          "Apenas guerras.",
          "Somente personagens famosos.",
          "Previsões sobre o futuro."
        ],
        correta: 1
      },

      {
        pergunta:
          "Mudança e permanência são conceitos utilizados para:",
        alternativas: [
          "Identificar transformações e continuidades históricas.",
          "Calcular datas.",
          "Substituir fontes históricas.",
          "Determinar o futuro.",
          "Ignorar processos sociais."
        ],
        correta: 0
      },

      {
        pergunta:
          "Uma fotografia antiga deve ser analisada:",
        alternativas: [
          "Como reprodução totalmente neutra da realidade.",
          "Como uma possível fonte produzida em determinado contexto.",
          "Apenas se possuir texto.",
          "Somente pelo seu valor artístico.",
          "Como uma fonte sem autor."
        ],
        correta: 1
      }

    ]

  },


  /* =====================================================
     MÓDULO 05
     NATUREZA — GRANDEZAS E UNIDADES
  ===================================================== */

  {
    id: 5,
    ordem: 5,
    area: "Ciências da Natureza",
    titulo: "Grandezas, Unidades e Notação Científica",
    descricao:
      "Aprenda a interpretar medidas e ordens de grandeza usadas em Física, Química e Biologia.",

    dificuldade: "Fundamental",
    xp: 130,

    teoria: {

      introducao:
        "Ciências da Natureza utiliza constantemente medidas: distância, massa, tempo, temperatura, energia, volume e muitas outras. Saber interpretar unidades e ordens de grandeza evita erros e facilita conteúdos futuros de Física, Química e Biologia.",

      topicos: [

        {
          titulo: "1. O que é uma grandeza?",
          texto:
            "Grandeza é uma propriedade que pode ser medida. Comprimento, massa, tempo, temperatura e velocidade são exemplos. Uma medida normalmente combina um número com uma unidade, como 5 metros ou 20 segundos."
        },

        {
          titulo: "2. Sistema Internacional",
          texto:
            "O Sistema Internacional de Unidades padroniza medidas utilizadas na ciência. Entre suas unidades estão metro para comprimento, quilograma para massa e segundo para tempo."
        },

        {
          titulo: "3. Prefixos",
          texto:
            "Prefixos representam múltiplos ou frações de uma unidade. Quilo representa mil, centi representa um centésimo e mili representa um milésimo. Assim, 1 km = 1000 m e 1 m = 100 cm."
        },

        {
          titulo: "4. Conversão de unidades",
          texto:
            "Converter uma unidade significa representar a mesma quantidade utilizando outra unidade. Por exemplo, 2,5 km correspondem a 2500 m. É essencial verificar se a conversão envolve comprimento, área ou volume, pois os fatores mudam."
        },

        {
          titulo: "5. Notação científica",
          texto:
            "Números muito grandes ou muito pequenos podem ser escritos na forma a × 10^n, em que o valor absoluto de a é maior ou igual a 1 e menor que 10. Por exemplo, 300 000 = 3 × 10^5."
        },

        {
          titulo: "6. Ordem de grandeza",
          texto:
            "A ordem de grandeza permite comparar aproximadamente escalas numéricas. Esse raciocínio é útil quando o ENEM apresenta fenômenos que variam desde dimensões microscópicas até distâncias astronômicas."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Quantos metros existem em 3 km?",
        alternativas: [
          "30",
          "300",
          "3000",
          "30 000",
          "300 000"
        ],
        correta: 2
      },

      {
        pergunta:
          "Qual é a unidade de tempo do Sistema Internacional?",
        alternativas: [
          "Hora",
          "Minuto",
          "Segundo",
          "Dia",
          "Milissegundo"
        ],
        correta: 2
      },

      {
        pergunta:
          "O número 500 000 pode ser escrito em notação científica como:",
        alternativas: [
          "5 × 10²",
          "5 × 10³",
          "5 × 10⁴",
          "5 × 10⁵",
          "5 × 10⁶"
        ],
        correta: 3
      },

      {
        pergunta:
          "Um comprimento de 250 cm corresponde a:",
        alternativas: [
          "0,25 m",
          "2,5 m",
          "25 m",
          "2500 m",
          "25 000 m"
        ],
        correta: 1
      },

      {
        pergunta:
          "O prefixo 'mili' representa:",
        alternativas: [
          "10",
          "100",
          "1000",
          "1/100",
          "1/1000"
        ],
        correta: 4
      }

    ]

  },
    // =========================================
  // MÓDULO 6 — QUESTÕES ENEM
  // =========================================
  {
    id: 6,
    ordem: 6,
    area: "REVISÃO ENEM",
    titulo: "Questões reais do ENEM",
    descricao:
      "Pratique interpretação e resolução de questões no estilo do ENEM, utilizando conteúdos cobrados em provas anteriores.",
    dificuldade: "Intermediário",
      xp: 150,


    teoria: {
      intro:
        "Agora é hora de aplicar o que você estudou. Leia cada questão com atenção, identifique o que o enunciado realmente pede e elimine as alternativas incompatíveis antes de marcar sua resposta.",

      topicos: [
        {
          titulo: "Leia primeiro o comando",
          texto:
            "Antes de analisar todas as alternativas, descubra exatamente o que a questão está pedindo. Isso evita releituras desnecessárias."
        },
        {
          titulo: "Elimine alternativas",
          texto:
            "Mesmo quando você não souber imediatamente a resposta, tente eliminar alternativas claramente incorretas."
        },
        {
          titulo: "Use as informações do enunciado",
          texto:
            "Questões do ENEM costumam fornecer no próprio texto, gráfico ou situação-problema as informações necessárias para chegar à resposta."
        }
      ]
    },

    exercicios: [

      {
        pergunta:
          "Em uma sala de aula, o nível sonoro da fala de um professor é de 60 dB a 1 metro e diminui com a distância. Se o ruído de fundo pode chegar a 45 dB e a fala precisa estar 5 dB acima dele, qual é aproximadamente a maior distância permitida?",
        alternativas: [
          "3,0 m",
          "4,5 m",
          "6,5 m",
          "8,0 m",
          "9,5 m"
        ],
        correta: 2
      },

      {
        pergunta:
          "Uma agricultora mergulha espigas de milho em água fervente por alguns minutos e depois em água gelada para preservar seu sabor. A conservação ocorre principalmente devido à:",
        alternativas: [
          "desnaturação enzimática pela alta temperatura",
          "conversão de nutrientes pela redução de temperatura",
          "degradação das reservas nutritivas pelo choque térmico",
          "entrada de oxigênio provocada pela fervura",
          "desidratação dos grãos"
        ],
        correta: 0
      },

      {
        pergunta:
          "Em um aquecedor solar, a água é aquecida nos coletores e depois transfere energia térmica para a água armazenada no reservatório. Esse processo de transferência de calor ocorre principalmente por:",
        alternativas: [
          "difusão",
          "absorção",
          "condução",
          "irradiação",
          "convecção"
        ],
        correta: 4
      },

      {
        pergunta:
          "Em uma reação entre mármore, constituído principalmente por carbonato de cálcio, e ácido clorídrico, qual gás é liberado?",
        alternativas: [
          "H₂",
          "O₂",
          "CO₂",
          "CO",
          "Cl₂"
        ],
        correta: 2
      },

      {
        pergunta:
          "Uma empresa produzia chocolates em formato de cone com diâmetro da base de 8 cm e altura de 10 cm. Se o novo chocolate possui o mesmo formato e altura, mas volume 19% menor, qual deve ser aproximadamente o novo raio da base?",
        alternativas: [
          "1,52 cm",
          "3,24 cm",
          "3,60 cm",
          "6,48 cm",
          "7,20 cm"
        ],
        correta: 2
      },

      {
        pergunta:
          "Em janeiro de 2013 foram criadas 28 900 vagas de emprego, quantidade 75% menor que no mesmo período de 2012. Quantas vagas foram criadas aproximadamente em janeiro de 2012?",
        alternativas: [
          "16 514",
          "86 700",
          "115 600",
          "441 343",
          "448 568"
        ],
        correta: 2
      },

      {
        pergunta:
          "Após uma reforma eleitoral no Brasil do século XIX, a participação no processo eleitoral sofreu forte redução. Uma das principais razões históricas para essa redução foi a:",
        alternativas: [
          "restrição de gênero",
          "exclusão de imigrantes",
          "comprovação de domicílio",
          "exigência da alfabetização",
          "obrigatoriedade do sufrágio"
        ],
        correta: 3
      },

      {
        pergunta:
          "Segundo a teoria política clássica apresentada por Aristóteles, quais são três formas de governo?",
        alternativas: [
          "tirania, oligarquia e república",
          "burocracia, autarquia e império",
          "ditadura, autocracia e anarquia",
          "plutocracia, tecnocracia e demagogia",
          "monarquia, aristocracia e democracia"
        ],
        correta: 4
      },

      {
        pergunta:
          "A preservação de uma variedade linguística tradicional está relacionada principalmente à manutenção de:",
        alternativas: [
          "um registro exclusivamente escrito",
          "prestígio econômico dos falantes",
          "sua função original sem alterações",
          "um sentimento de identidade linguística",
          "um perfil etário homogêneo"
        ],
        correta: 3
      },

      {
        pergunta:
          "As variedades linguísticas regionais existentes no Brasil demonstram que elas:",
        alternativas: [
          "impedem o entendimento mútuo",
          "enaltecem apenas uma região específica",
          "são constitutivas do português brasileiro",
          "exigem a criação de dicionários para toda comunicação",
          "existem somente em situações coloquiais"
        ],
        correta: 2
      },

      {
        pergunta:
          "A automação da dublagem por inteligência artificial pode reduzir postos de trabalho anteriormente ocupados por profissionais. Esse fenômeno está associado à:",
        alternativas: [
          "proteção da economia nacional",
          "valorização da cultura tradicional",
          "diminuição da formação acadêmica",
          "estagnação da manifestação artística",
          "ampliação do desemprego estrutural"
        ],
        correta: 4
      },

      {
        pergunta:
          "O Mercosul estabelece uma Tarifa Externa Comum entre seus integrantes. Essa característica está relacionada ao funcionamento de uma:",
        alternativas: [
          "limitação da circulação financeira",
          "padronização da política monetária",
          "união aduaneira",
          "dependência da exportação agrícola",
          "equivalência da legislação trabalhista"
        ],
        correta: 2
      },

      {
        pergunta:
          "Na expressão inglesa 'at odds with', utilizada para indicar conflito entre dois desejos, a expressão revela:",
        alternativas: [
          "necessidade de acessar informações confiáveis",
          "dificuldade de conciliar diferentes anseios",
          "desejo de dominar novas tecnologias",
          "desafio de permanecer imparcial",
          "vontade de ler notícias positivas"
        ],
        correta: 1
      },

      {
        pergunta:
          "Ao avaliar um lugar turístico, diferentes pessoas podem formar opiniões distintas porque essa avaliação depende principalmente da:",
        alternativas: [
          "beleza objetiva do local",
          "perspectiva do visitante",
          "história oficial do lugar",
          "duração obrigatória da viagem",
          "finalidade econômica do turismo"
        ],
        correta: 1
      }

    ]
  }

,

/* =====================================================
   MÓDULO 07
   LINGUAGENS — GÊNEROS E TIPOS TEXTUAIS
===================================================== */

{
  id: 7,
  ordem: 7,
  area: "Linguagens",

  titulo: "Gêneros, Tipos Textuais e Finalidade Comunicativa",

  descricao:
    "Aprenda a reconhecer como textos são construídos, para quem são dirigidos e qual função cumprem — habilidade central na prova de Linguagens do ENEM.",

  dificuldade: "Intermediário",
  xp: 160,


  teoria: {

    introducao:
      "No ENEM, identificar um gênero textual não significa apenas saber se um texto é uma notícia, anúncio, poema ou charge. A prova costuma exigir que você compreenda por que aquele gênero foi escolhido, quem é seu público, qual efeito pretende produzir e como linguagem verbal, visual e contexto trabalham juntos. Este módulo desenvolve uma das habilidades mais importantes de toda a prova de Linguagens: compreender textos como práticas reais de comunicação.",


    topicos: [

      {
        titulo: "1. O que é gênero textual?",

        texto:
          "Gêneros textuais são formas de comunicação que surgem de necessidades sociais concretas. Notícia, propaganda, receita, comentário, artigo de opinião, meme, charge, entrevista, carta aberta, postagem de rede social e manual são exemplos. Cada gênero apresenta certas características recorrentes, mas elas não são regras absolutas: os gêneros mudam conforme a sociedade e os meios de comunicação se transformam."
      },

      {
        titulo: "2. Gênero textual não é tipo textual",

        texto:
          "Gênero textual e tipo textual são conceitos diferentes. Gênero é a forma social concreta do texto, como reportagem ou receita. Tipo textual é a organização predominante da linguagem. Os principais tipos são narração, descrição, exposição, argumentação e injunção. Uma reportagem, por exemplo, pode combinar exposição, descrição e até narração."
      },

      {
        titulo: "3. Narração",

        texto:
          "A narração apresenta acontecimentos organizados no tempo. Normalmente envolve ações, personagens, espaço e alguma progressão temporal. Contos, romances, relatos pessoais e muitas crônicas utilizam estruturas narrativas. No ENEM, porém, um pequeno trecho narrativo pode aparecer dentro de outro gênero e cumprir uma finalidade específica."
      },

      {
        titulo: "4. Descrição",

        texto:
          "A descrição apresenta características de pessoas, objetos, ambientes, situações ou fenômenos. Em vez de destacar principalmente ações sucessivas, concentra-se em propriedades e detalhes. É comum que descrição e narração apareçam juntas."
      },

      {
        titulo: "5. Exposição",

        texto:
          "O texto expositivo busca apresentar, explicar ou organizar conhecimentos. Verbete, texto didático, divulgação científica e muitas reportagens apresentam sequências expositivas. Isso não significa ausência total de opinião, mas a função predominante costuma estar ligada à apresentação de informações."
      },

      {
        titulo: "6. Argumentação",

        texto:
          "Na argumentação, uma ideia, tese ou ponto de vista é defendido por meio de justificativas, exemplos, dados ou relações lógicas. Artigos de opinião, editoriais, cartas abertas e campanhas podem utilizar argumentação. O ENEM frequentemente pede que o aluno identifique qual estratégia está sendo usada para convencer o público."
      },

      {
        titulo: "7. Injunção",

        texto:
          "Textos injuntivos orientam ações ou comportamentos. Receitas culinárias, manuais, instruções, regras e determinados anúncios utilizam verbos no imperativo ou outras estruturas que indicam o que deve ser feito. A injunção pode também aparecer em campanhas: 'Vacine-se', 'Economize água' ou 'Não compartilhe sem verificar'."
      },

      {
        titulo: "8. Finalidade comunicativa",

        texto:
          "Uma pergunta decisiva no ENEM é: para que esse texto foi produzido? Informar, convencer, criticar, denunciar, ensinar, orientar, divertir, emocionar e provocar reflexão são finalidades possíveis. A resposta deve considerar o texto inteiro, não apenas uma frase isolada."
      },

      {
        titulo: "9. Público-alvo",

        texto:
          "As escolhas linguísticas dependem de quem receberá a mensagem. Uma campanha dirigida a adolescentes pode usar referências digitais e linguagem mais próxima da juventude. Um documento oficial tende a empregar linguagem formal. Reconhecer o público ajuda a entender escolhas de vocabulário, imagens e estrutura."
      },

      {
        titulo: "10. Textos multimodais",

        texto:
          "Muitos textos atuais combinam palavras, imagens, símbolos, cores, disposição gráfica e outros recursos. Charges, memes, cartazes, anúncios e infográficos são exemplos. Em questões desse tipo, ignorar a imagem e ler apenas as palavras pode impedir a compreensão do efeito de sentido."
      },

      {
        titulo: "11. Suporte e contexto de circulação",

        texto:
          "O lugar onde o texto circula também produz sentido. Uma frase em um livro didático pode ter uma função diferente da mesma frase usada em uma propaganda. Jornal, rede social, outdoor, embalagem, site oficial e aplicativo são suportes que influenciam a construção e a interpretação do texto."
      }

    ],


    exemplosResolvidos: [

      {
        titulo:
          "Campanha de saúde",

        problema:
          "Um cartaz apresenta a frase 'Proteja quem você ama. Mantenha a vacinação em dia.' acompanhada da imagem de uma família.",

        raciocinio:
          "Precisamos observar gênero, finalidade e recursos utilizados. Trata-se de uma campanha pública. A presença de uma orientação direta e de uma imagem ligada à família busca estimular determinado comportamento.",

        resolucao:
          "O texto apresenta caráter predominantemente injuntivo e persuasivo. Ele orienta o leitor a manter a vacinação atualizada e utiliza a ideia de proteção da família como estratégia emocional.",

        conclusao:
          "Em questões desse tipo, não basta identificar o tema 'vacinação'. É necessário perceber o objetivo comunicativo: incentivar uma ação."
      },

      {
        titulo:
          "Notícia ou artigo de opinião?",

        problema:
          "Um texto apresenta um acontecimento recente, informa data, local e pessoas envolvidas, mas não desenvolve explicitamente uma tese do autor.",

        raciocinio:
          "A organização está centrada na apresentação de um acontecimento e de informações verificáveis.",

        resolucao:
          "Essas características aproximam o texto do gênero notícia. Um artigo de opinião normalmente desenvolve uma posição e utiliza argumentos para defendê-la.",

        conclusao:
          "Observe a função predominante do texto, e não simplesmente o assunto tratado."
      },

      {
        titulo:
          "Meme e multimodalidade",

        problema:
          "Um meme utiliza a fotografia de uma pessoa demonstrando tranquilidade e uma legenda dizendo 'Eu cinco minutos antes do prazo acabar'.",

        raciocinio:
          "A imagem isoladamente representa tranquilidade, mas a legenda cria um contexto contraditório. O humor nasce da relação entre os dois elementos.",

        resolucao:
          "O significado não está apenas na fotografia nem apenas na frase. Ele é construído pela interação entre linguagem verbal e visual.",

        conclusao:
          "No ENEM, textos multimodais devem ser interpretados como um conjunto."
      }

    ],


    estrategiasEnem: [

      {
        titulo:
          "Pergunte 'para quê?'",

        texto:
          "Depois de identificar o assunto, pergunte qual ação o texto tenta realizar: informar, convencer, orientar, ironizar, denunciar ou provocar reflexão."
      },

      {
        titulo:
          "Não confunda assunto com finalidade",

        texto:
          "Um texto pode falar sobre desperdício de água, mas sua finalidade pode ser convencer o leitor a mudar hábitos. 'Água' é o assunto; 'estimular economia' é a finalidade."
      },

      {
        titulo:
          "Observe os verbos",

        texto:
          "Verbos como 'faça', 'evite', 'procure' e 'participe' podem indicar orientação ou injunção. Verbos avaliativos e construções argumentativas podem revelar posicionamento."
      },

      {
        titulo:
          "Use o suporte como pista",

        texto:
          "Observe onde o texto provavelmente circula. Uma embalagem, campanha governamental, rede social ou jornal possui funções comunicativas diferentes."
      },

      {
        titulo:
          "Leia imagem e texto juntos",

        texto:
          "Em charge, meme, publicidade e cartaz, frequentemente a resposta correta depende justamente da relação entre elementos verbais e não verbais."
      },

      {
        titulo:
          "Cuidado com classificações rígidas",

        texto:
          "Um gênero pode combinar vários tipos textuais. A questão normalmente pede a característica predominante ou a função de determinado recurso."
      }

    ],


    errosComuns: [

      {
        titulo:
          "Decorar gênero pelo formato",

        texto:
          "Nem todo texto com imagem é propaganda e nem todo texto longo é reportagem. Analise finalidade, linguagem, circulação e estrutura."
      },

      {
        titulo:
          "Achar que um texto só possui um tipo textual",

        texto:
          "Um gênero pode combinar narração, descrição, exposição e argumentação. O importante é identificar qual organização predomina no trecho analisado."
      },

      {
        titulo:
          "Ignorar o público",

        texto:
          "O vocabulário e os recursos escolhidos quase sempre possuem relação com os leitores que o produtor pretende alcançar."
      },

      {
        titulo:
          "Interpretar apenas literalmente",

        texto:
          "Charges, memes e propagandas podem utilizar ironia, humor, oposição e duplo sentido. A leitura puramente literal frequentemente leva à alternativa errada."
      },

      {
        titulo:
          "Escolher uma alternativa que apenas repete o tema",

        texto:
          "O ENEM frequentemente oferece uma alternativa verdadeira sobre o assunto, mas que não responde ao comando da questão. Leia exatamente o que está sendo perguntado."
      }

    ],


    resumo:
      "Para dominar gêneros textuais no ENEM, não basta memorizar nomes. Você deve relacionar gênero, tipo textual, finalidade, público-alvo, suporte e recursos linguísticos. A prova quer saber se você compreende por que um texto foi construído daquela maneira e qual efeito essa construção produz."

  },


  videoaula: {
    titulo:
      "Videoaula complementar",
    url:
      ""
  },


  exercicios: [

    {
      nivel:
        "Fundamental",

      pergunta:
        "Uma prefeitura publica em suas redes sociais a mensagem: 'Ao encontrar água parada, elimine o recipiente ou procure a unidade de saúde mais próxima.' Considerando sua finalidade predominante, esse texto utiliza principalmente uma sequência:",

      alternativas: [
        "Narrativa, pois apresenta acontecimentos em ordem temporal.",
        "Descritiva, pois caracteriza detalhadamente um ambiente.",
        "Injuntiva, pois orienta o leitor a realizar determinadas ações.",
        "Argumentativa, pois apresenta uma tese desenvolvida por argumentos.",
        "Poética, pois explora predominantemente efeitos estéticos."
      ],

      correta:
        2,

      explicacao:
        "O texto apresenta orientações diretas ao leitor: eliminar recipientes e procurar uma unidade de saúde. Isso caracteriza uma sequência injuntiva, usada para orientar comportamentos."
    },


    {
      nivel:
        "Fundamental",

      pergunta:
        "Um texto jornalístico apresenta data, local, pessoas envolvidas e informações sobre um acontecimento recente, sem desenvolver uma defesa explícita de opinião. A característica descrita corresponde principalmente ao gênero:",

      alternativas: [
        "Receita.",
        "Notícia.",
        "Poema.",
        "Carta pessoal.",
        "Manual."
      ],

      correta:
        1,

      explicacao:
        "A notícia possui como função predominante informar sobre acontecimentos de interesse público, normalmente apresentando informações como o que aconteceu, onde, quando e quem esteve envolvido."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Uma campanha de economia de energia apresenta a fotografia de uma lâmpada apagada acompanhada da frase 'O planeta também precisa descansar'. Nesse caso, a imagem e a frase atuam conjuntamente para:",

      alternativas: [
        "apresentar uma descrição técnica do funcionamento das lâmpadas.",
        "explicar cientificamente o consumo de eletricidade.",
        "produzir uma mensagem persuasiva associando economia de energia à preservação ambiental.",
        "narrar a história da produção de energia elétrica.",
        "demonstrar que o consumo doméstico de energia é irrelevante."
      ],

      correta:
        2,

      explicacao:
        "A campanha associa a ação de apagar a luz à ideia de cuidado ambiental. A imagem e a frase formam uma mensagem multimodal cujo objetivo é persuadir o leitor a economizar energia."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Em uma postagem de rede social voltada a adolescentes, uma instituição utiliza emojis, frases curtas e referências comuns ao universo digital para divulgar uma campanha educacional. Essas escolhas linguísticas são explicadas principalmente pela:",

      alternativas: [
        "necessidade de eliminar qualquer informação objetiva.",
        "adaptação da linguagem ao público-alvo e ao meio de circulação.",
        "obrigatoriedade de utilizar linguagem informal em todo texto digital.",
        "impossibilidade de empregar linguagem formal nas redes sociais.",
        "substituição completa da linguagem verbal por elementos visuais."
      ],

      correta:
        1,

      explicacao:
        "Quem produz um texto adapta suas escolhas ao público e ao contexto de circulação. Emojis e referências digitais podem aproximar a mensagem de adolescentes, mas isso não significa que toda comunicação digital precise ser informal."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Um artigo apresenta inicialmente dados sobre o crescimento do lixo eletrônico e, em seguida, defende que fabricantes e consumidores devem assumir maior responsabilidade pelo descarte dos equipamentos. Nesse texto, informações e dados são utilizados principalmente para:",

      alternativas: [
        "construir uma narrativa ficcional.",
        "caracterizar fisicamente os equipamentos.",
        "sustentar uma argumentação.",
        "ensinar a desmontar aparelhos.",
        "produzir exclusivamente humor."
      ],

      correta:
        2,

      explicacao:
        "Os dados funcionam como evidências para fortalecer uma posição defendida pelo autor. Portanto, estão a serviço da argumentação."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Uma receita apresenta uma breve descrição do prato, uma lista de ingredientes e, depois, instruções numeradas de preparo. Esse exemplo demonstra que:",

      alternativas: [
        "todo gênero apresenta apenas um único tipo textual.",
        "gêneros textuais podem combinar diferentes sequências tipológicas.",
        "textos injuntivos não podem apresentar informações descritivas.",
        "uma receita é necessariamente um texto narrativo.",
        "a presença de números transforma o texto em gênero científico."
      ],

      correta:
        1,

      explicacao:
        "Uma receita é um gênero textual que pode combinar descrição, exposição e, principalmente, injunção. Isso demonstra que gêneros não estão limitados a apenas um tipo textual."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Um anúncio mostra uma garrafa reutilizável ao lado de dezenas de copos descartáveis e apresenta apenas a frase: 'Uma escolha. Centenas de consequências.' O efeito persuasivo do anúncio depende principalmente:",

      alternativas: [
        "da apresentação de uma sequência detalhada de acontecimentos.",
        "da relação entre a imagem e a frase, que leva o leitor a inferir impactos ambientais do consumo.",
        "da explicação científica completa sobre a fabricação de plástico.",
        "da ausência de qualquer posicionamento sobre consumo.",
        "da descrição objetiva das dimensões dos objetos."
      ],

      correta:
        1,

      explicacao:
        "O anúncio não explica diretamente todo o argumento. O leitor deve relacionar a imagem dos descartáveis à frase e inferir que escolhas individuais podem produzir grande quantidade de resíduos. É um exemplo típico de multimodalidade e inferência."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Uma charge apresenta dois personagens diante de uma enorme quantidade de informações em uma tela. Um deles afirma: 'Nunca tivemos acesso a tanta informação.' O outro responde: 'Agora só falta descobrir em qual acreditar.' A finalidade crítica da charge está relacionada principalmente:",

      alternativas: [
        "à falta absoluta de acesso à internet.",
        "à impossibilidade de comunicação por meios digitais.",
        "ao contraste entre abundância de informação e dificuldade de avaliar sua confiabilidade.",
        "à defesa da substituição da leitura pela tecnologia.",
        "à necessidade de reduzir a velocidade das conexões."
      ],

      correta:
        2,

      explicacao:
        "O humor e a crítica surgem do contraste: existe grande quantidade de informação disponível, mas isso não garante que ela seja confiável. A charge problematiza a necessidade de avaliação crítica das fontes."
    }

  ]

}

,

/* =====================================================
   MÓDULO 08
   CIÊNCIAS DA NATUREZA — MATÉRIA, ENERGIA E TRANSFORMAÇÕES
===================================================== */

{
  id: 8,
  ordem: 8,
  area: "Ciências da Natureza",

  titulo: "Matéria, Energia e Transformações",

  descricao:
    "Entenda como a matéria se comporta, como a energia é transferida e como reconhecer transformações físicas e químicas em situações típicas do ENEM.",

  dificuldade: "Intermediário",
  xp: 170,


  teoria: {

    introducao:
      "O ENEM costuma apresentar situações do cotidiano para cobrar conceitos de Física, Química e Biologia de forma integrada. Aquecimento de alimentos, funcionamento de aquecedores, reações químicas, mudanças de estado, conservação de energia e propriedades da matéria aparecem em contextos práticos. Neste módulo, o objetivo é aprender a reconhecer o fenômeno antes de tentar decorar uma fórmula.",


    topicos: [

      {
        titulo: "1. Matéria, corpo e objeto",

        texto:
          "Matéria é tudo aquilo que possui massa e ocupa espaço. Um corpo é uma porção limitada de matéria, enquanto um objeto é um corpo utilizado para determinada finalidade. Essa distinção é simples, mas ajuda a organizar o estudo das propriedades da matéria."
      },

      {
        titulo: "2. Propriedades gerais e específicas",

        texto:
          "Massa, volume e inércia são propriedades gerais da matéria. Já densidade, temperatura de fusão, temperatura de ebulição e solubilidade são propriedades específicas, úteis para identificar e diferenciar substâncias."
      },

      {
        titulo: "3. Densidade",

        texto:
          "Densidade relaciona massa e volume. Dois corpos com o mesmo volume podem ter massas diferentes porque possuem densidades diferentes. Em situações de flutuação, a comparação entre a densidade do corpo e a do líquido é fundamental."
      },

      {
        titulo: "4. Estados físicos da matéria",

        texto:
          "Nos estados sólido, líquido e gasoso, as partículas apresentam diferentes graus de organização e mobilidade. Mudanças de estado, como fusão, vaporização, condensação e solidificação, envolvem absorção ou liberação de energia."
      },

      {
        titulo: "5. Transformações físicas",

        texto:
          "Uma transformação física altera o estado, a forma ou a aparência da matéria sem produzir necessariamente novas substâncias. Derretimento do gelo, evaporação da água e fragmentação de um material são exemplos."
      },

      {
        titulo: "6. Transformações químicas",

        texto:
          "Em uma transformação química, substâncias iniciais são convertidas em outras substâncias. Mudança de cor, formação de gás, produção de precipitado, emissão de luz ou alteração de temperatura podem ser indícios, embora a análise do contexto seja sempre necessária."
      },

      {
        titulo: "7. Energia nas transformações",

        texto:
          "Transformações físicas e químicas podem envolver troca de energia com o ambiente. Em alguns processos, o sistema absorve energia; em outros, libera energia. O ENEM frequentemente apresenta situações em que essa troca precisa ser interpretada qualitativamente."
      },

      {
        titulo: "8. Calor e temperatura",

        texto:
          "Temperatura está relacionada ao estado térmico de um corpo, enquanto calor é energia em trânsito devido a uma diferença de temperatura. Dois corpos em contato podem trocar energia até atingirem equilíbrio térmico."
      },

      {
        titulo: "9. Condução térmica",

        texto:
          "Na condução, a energia térmica é transferida por interações entre partículas, sem transporte macroscópico de matéria. É predominante em sólidos. O cabo metálico de uma panela pode aquecer por condução."
      },

      {
        titulo: "10. Convecção",

        texto:
          "Na convecção, o transporte de energia ocorre com movimento de massas de fluido. É comum em líquidos e gases. Em um reservatório de água aquecida, diferenças de temperatura podem gerar correntes de convecção."
      },

      {
        titulo: "11. Irradiação",

        texto:
          "Na irradiação, a energia é transferida por ondas eletromagnéticas e não precisa de um meio material. A energia solar chega à Terra principalmente dessa forma."
      },

      {
        titulo: "12. Conservação da energia",

        texto:
          "A energia pode mudar de forma, mas em um sistema isolado a quantidade total se conserva. Em situações reais, parte da energia útil pode ser dissipada, normalmente na forma de calor."
      }

    ],


    exemplosResolvidos: [

      {
        titulo:
          "Aquecimento de água",

        problema:
          "Uma panela com água é colocada sobre uma chama. Após algum tempo, a água próxima ao fundo fica mais quente e começa a circular no interior da panela.",

        raciocinio:
          "Primeiro identificamos o meio: trata-se de um líquido. Depois observamos que há movimento do próprio fluido provocado por diferenças de temperatura.",

        resolucao:
          "A água aquecida se torna menos densa e tende a subir, enquanto a água mais fria desce. Esse movimento forma correntes de convecção.",

        conclusao:
          "Quando há transporte de energia associado ao movimento de líquidos ou gases, pense em convecção."
      },

      {
        titulo:
          "Reação com formação de gás",

        problema:
          "Um sólido contendo carbonato reage com uma solução ácida e surgem bolhas durante o processo.",

        raciocinio:
          "A formação de bolhas indica produção de uma substância gasosa. Isso sugere que houve transformação química.",

        resolucao:
          "Carbonatos reagem com ácidos e podem produzir dióxido de carbono. A formação de novas substâncias caracteriza uma reação química.",

        conclusao:
          "No ENEM, sinais como formação de gás devem ser interpretados dentro do contexto como evidência de transformação química."
      },

      {
        titulo:
          "Mudança de estado",

        problema:
          "Uma porção de gelo é deixada à temperatura ambiente e se transforma em água líquida.",

        raciocinio:
          "A substância continua sendo água. O que mudou foi seu estado físico.",

        resolucao:
          "Esse processo é a fusão, uma transformação física que envolve absorção de energia.",

        conclusao:
          "Mudança de estado não significa, por si só, formação de nova substância."
      }

    ],


    estrategiasEnem: [

      {
        titulo:
          "Identifique o fenômeno antes da fórmula",

        texto:
          "Muitas questões podem ser resolvidas sem cálculo. Antes de procurar uma equação, determine se a situação envolve condução, convecção, irradiação, reação química ou mudança de estado."
      },

      {
        titulo:
          "Observe o meio",

        texto:
          "Condução é comum em sólidos; convecção depende do movimento de líquidos ou gases; irradiação pode ocorrer mesmo no vácuo."
      },

      {
        titulo:
          "Procure evidências de reação",

        texto:
          "Formação de gás, precipitado, mudança persistente de cor ou liberação de energia podem indicar uma transformação química."
      },

      {
        titulo:
          "Não confunda calor com temperatura",

        texto:
          "Calor é transferência de energia. Temperatura é uma grandeza associada ao estado térmico do corpo."
      },

      {
        titulo:
          "Leia o contexto experimental",

        texto:
          "Em questões com experimentos, identifique o que foi alterado, o que foi observado e qual conclusão os dados permitem."
      },

      {
        titulo:
          "Cuidado com explicações absolutas",

        texto:
          "Alternativas que usam termos como 'sempre', 'somente' ou 'exclusivamente' podem estar exagerando um fenômeno que depende do contexto."
      }

    ],


    errosComuns: [

      {
        titulo:
          "Confundir fusão com reação química",

        texto:
          "Derreter uma substância não significa necessariamente formar uma substância nova. Mudança de estado é, em geral, transformação física."
      },

      {
        titulo:
          "Achar que calor é algo armazenado",

        texto:
          "Na linguagem da Física, calor é energia transferida entre corpos por diferença de temperatura."
      },

      {
        titulo:
          "Confundir condução e convecção",

        texto:
          "Na condução, não existe transporte macroscópico de matéria. Na convecção, o próprio fluido se movimenta."
      },

      {
        titulo:
          "Pensar que irradiação exige ar",

        texto:
          "Radiação eletromagnética não precisa de meio material. A energia do Sol atravessa o espaço até chegar à Terra."
      },

      {
        titulo:
          "Usar um único sinal para afirmar reação química",

        texto:
          "Algumas mudanças físicas também podem causar alterações visíveis. É preciso analisar o conjunto de evidências e o contexto."
      }

    ],


    resumo:
      "Para resolver questões de matéria e energia no ENEM, comece identificando o fenômeno. Diferencie transformações físicas de químicas, compreenda mudanças de estado e reconheça os três mecanismos de transferência de energia térmica: condução, convecção e irradiação. O raciocínio conceitual costuma ser mais importante que decorar fórmulas."

  },


  videoaula: {
    titulo:
      "Videoaula complementar",
    url:
      ""
  },


  exercicios: [

    {
      nivel:
        "Fundamental",

      pergunta:
        "Um cubo de gelo é retirado do congelador e deixado sobre uma mesa. Após algum tempo, ele se transforma em água líquida. Esse processo corresponde a uma:",

      alternativas: [
        "transformação química com formação de nova substância.",
        "transformação física chamada fusão.",
        "transformação química chamada combustão.",
        "transformação física chamada condensação.",
        "reação de decomposição."
      ],

      correta:
        1,

      explicacao:
        "O gelo e a água líquida são a mesma substância, H₂O. Ocorreu apenas mudança de estado físico, do sólido para o líquido, chamada fusão."
    },


    {
      nivel:
        "Fundamental",

      pergunta:
        "Ao deixar uma colher metálica dentro de uma panela quente, o cabo da colher também aquece depois de algum tempo. O principal mecanismo responsável por esse processo é:",

      alternativas: [
        "convecção.",
        "irradiação.",
        "condução.",
        "evaporação.",
        "condensação."
      ],

      correta:
        2,

      explicacao:
        "No metal, a energia térmica é transferida ao longo do material por interação entre suas partículas. Esse mecanismo é a condução."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Em um sistema de aquecimento de água, o líquido aquecido na região inferior sobe enquanto a água mais fria desce, estabelecendo circulação no reservatório. Esse movimento ocorre devido principalmente à:",

      alternativas: [
        "condução elétrica.",
        "convecção térmica.",
        "reflexão da luz.",
        "irradiação ultravioleta.",
        "fusão do líquido."
      ],

      correta:
        1,

      explicacao:
        "A convecção ocorre em fluidos quando diferenças de temperatura e densidade provocam movimento de massas do próprio material."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "A energia proveniente do Sol atravessa o espaço e chega à superfície terrestre. Como o espaço entre o Sol e a Terra possui regiões praticamente sem matéria, essa transferência de energia ocorre principalmente por:",

      alternativas: [
        "condução.",
        "convecção.",
        "irradiação.",
        "difusão molecular.",
        "evaporação."
      ],

      correta:
        2,

      explicacao:
        "A irradiação ocorre por ondas eletromagnéticas e não necessita de meio material, por isso permite a transferência de energia do Sol até a Terra."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Durante um experimento, um estudante adiciona uma solução ácida a uma amostra sólida e observa intensa formação de bolhas. Considerando que o gás foi produzido durante o processo, a observação indica principalmente:",

      alternativas: [
        "uma simples mudança de estado físico.",
        "a ocorrência de uma transformação química.",
        "a diminuição obrigatória da massa total do sistema.",
        "um processo exclusivamente de fusão.",
        "uma mudança de forma sem alteração da matéria."
      ],

      correta:
        1,

      explicacao:
        "Se houve produção de uma nova substância gasosa, ocorreu transformação química. A formação de gás é uma evidência comum de reação."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Dois blocos possuem o mesmo volume, mas o bloco A apresenta massa maior que o bloco B. Comparando suas densidades, conclui-se que:",

      alternativas: [
        "o bloco A possui menor densidade.",
        "os blocos possuem necessariamente a mesma densidade.",
        "o bloco A possui maior densidade.",
        "o bloco B possui massa maior por unidade de volume.",
        "não é possível relacionar massa e densidade."
      ],

      correta:
        2,

      explicacao:
        "Densidade é a razão entre massa e volume. Como os volumes são iguais, o bloco de maior massa possui maior densidade."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Um alimento é rapidamente aquecido e, logo depois, resfriado. Esse procedimento pode reduzir a atividade de determinadas enzimas presentes no alimento. O efeito do aquecimento sobre essas enzimas está relacionado principalmente à:",

      alternativas: [
        "produção espontânea de novas proteínas.",
        "desnaturação de estruturas proteicas pela temperatura elevada.",
        "transformação de proteínas em carboidratos.",
        "formação de novas células por aquecimento.",
        "eliminação completa de moléculas de água."
      ],

      correta:
        1,

      explicacao:
        "Enzimas são, em geral, proteínas. Temperaturas elevadas podem alterar sua estrutura tridimensional, processo conhecido como desnaturação, reduzindo ou eliminando sua atividade."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Um recipiente fechado contém água quente e outro corpo inicialmente mais frio. Com o passar do tempo, os dois atingem a mesma temperatura. Esse estado final caracteriza:",

      alternativas: [
        "equilíbrio químico.",
        "equilíbrio térmico.",
        "convecção permanente.",
        "mudança obrigatória de estado.",
        "ausência total de energia interna."
      ],

      correta:
        1,

      explicacao:
        "Quando corpos em contato deixam de apresentar diferença de temperatura entre si, atingem equilíbrio térmico e não há fluxo líquido de calor entre eles."
    }

  ]

}

,

/* =====================================================
   MÓDULO 09
   MATEMÁTICA — PORCENTAGEM E VARIAÇÃO PERCENTUAL
===================================================== */

{
  id: 9,
  ordem: 9,
  area: "Matemática",

  titulo: "Porcentagem e Variação Percentual",

  descricao:
    "Domine porcentagens, aumentos, descontos e variações sucessivas em problemas contextualizados no padrão do ENEM.",

  dificuldade: "Intermediário",
  xp: 180,


  teoria: {

    introducao:
      "Porcentagem está entre os conteúdos matemáticos mais importantes para o ENEM porque aparece em situações financeiras, pesquisas, gráficos, população, consumo, inflação, descontos e comparações. O segredo não é decorar várias fórmulas, mas entender que uma porcentagem representa uma razão de base 100 e saber identificar qual quantidade está sendo usada como referência.",


    topicos: [

      {
        titulo: "1. O significado de porcentagem",

        texto:
          "Porcentagem significa 'por cento', isto é, uma razão cujo denominador é 100. Assim, 25% corresponde a 25/100 = 0,25. Da mesma maneira, 5% = 0,05 e 120% = 1,20. Transformar porcentagens em números decimais facilita muitos cálculos."
      },

      {
        titulo: "2. Calculando uma porcentagem",

        texto:
          "Para determinar uma porcentagem de determinado valor, podemos multiplicar o valor pela forma decimal da porcentagem. Por exemplo, 20% de 350 corresponde a 0,20 × 350 = 70."
      },

      {
        titulo: "3. Encontrando o valor original",

        texto:
          "Algumas questões fornecem apenas uma parte percentual e pedem o total. Se 30% de uma quantidade correspondem a 90, então 0,30 × x = 90. Logo, x = 300. Identificar corretamente qual valor representa 100% é essencial."
      },

      {
        titulo: "4. Aumento percentual",

        texto:
          "Se um valor sofre aumento de 15%, o novo valor corresponde a 115% do original. Em forma decimal, podemos multiplicar diretamente por 1,15. Assim, um produto de R$ 200 após aumento de 15% passa a custar R$ 230."
      },

      {
        titulo: "5. Desconto percentual",

        texto:
          "Se um produto recebe desconto de 20%, permanecem 80% do preço original. Portanto, podemos multiplicar diretamente por 0,80. Um produto de R$ 500 com desconto de 20% passa a custar R$ 400."
      },

      {
        titulo: "6. Variação percentual",

        texto:
          "Para medir quanto uma quantidade aumentou ou diminuiu proporcionalmente, devemos comparar a diferença com o valor inicial. Se uma quantidade passa de 200 para 250, houve aumento de 50. Como 50 corresponde a 25% de 200, o aumento percentual foi de 25%."
      },

      {
        titulo: "7. Aumentos sucessivos",

        texto:
          "Percentuais sucessivos não devem ser simplesmente somados. Um aumento de 10% seguido de outro aumento de 10% não representa aumento total de 20%, pois o segundo percentual é aplicado sobre um valor que já aumentou. Se o valor inicial é 100, ele passa para 110 e depois para 121. O aumento total é de 21%."
      },

      {
        titulo: "8. Aumento seguido de desconto",

        texto:
          "Um aumento de 20% seguido de desconto de 20% não devolve necessariamente o valor inicial. Partindo de 100, o aumento produz 120. O desconto de 20% sobre 120 corresponde a 24, resultando em 96."
      },

      {
        titulo: "9. Quando algo é 'X% menor'",

        texto:
          "Se uma quantidade é 75% menor que outra, ela corresponde aos 25% restantes da quantidade maior. Esse tipo de linguagem aparece frequentemente em questões. Se A é 75% menor que B, então A = 0,25 × B."
      },

      {
        titulo: "10. Porcentagens acima de 100%",

        texto:
          "Porcentagens podem superar 100%. Dizer que uma quantidade corresponde a 150% de outra significa que ela é 1,5 vez o valor de referência. Isso representa um valor 50% maior que o original."
      },

      {
        titulo: "11. Pontos percentuais",

        texto:
          "Ponto percentual e variação percentual não são a mesma coisa. Se uma taxa passa de 20% para 30%, ela aumentou 10 pontos percentuais. Em relação ao valor inicial de 20%, entretanto, o crescimento foi de 50%."
      },

      {
        titulo: "12. Porcentagem em gráficos e tabelas",

        texto:
          "O ENEM frequentemente combina porcentagem com interpretação de gráficos. Antes de calcular, identifique o total representado, a unidade utilizada e o período analisado. Muitas questões são mais de interpretação do que de cálculo."
      }

    ],


    exemplosResolvidos: [

      {
        titulo:
          "Quantidade 75% menor",

        problema:
          "Em determinado mês foram registrados 30 mil novos contratos, quantidade 75% menor que a registrada no mesmo mês do ano anterior. Quantos contratos aproximadamente haviam sido registrados anteriormente?",

        raciocinio:
          "Se a quantidade atual é 75% menor, restaram apenas 25% da quantidade anterior. Portanto, 30 mil representam 25% do valor procurado.",

        resolucao:
          "Temos 0,25 × x = 30 000. Dividindo por 0,25, encontramos x = 120 000.",

        conclusao:
          "Quando algo é 75% menor, não multiplique o valor atual por 1,75. Identifique primeiro qual percentual do valor original permaneceu."
      },

      {
        titulo:
          "Desconto em uma compra",

        problema:
          "Um tênis custa R$ 320 e recebe desconto de 15%. Qual será seu novo preço?",

        raciocinio:
          "Após retirar 15%, permanecem 85% do preço.",

        resolucao:
          "320 × 0,85 = 272.",

        conclusao:
          "O preço final será R$ 272."
      },

      {
        titulo:
          "Dois aumentos consecutivos",

        problema:
          "Uma mensalidade de R$ 500 recebe aumento de 10% e, posteriormente, outro aumento de 20%.",

        raciocinio:
          "Os aumentos são aplicados sucessivamente. O segundo percentual incide sobre o preço já reajustado.",

        resolucao:
          "Primeiro: 500 × 1,10 = 550. Depois: 550 × 1,20 = 660.",

        conclusao:
          "O preço final é R$ 660. O aumento total foi de 32%, e não de 30%."
      },

      {
        titulo:
          "Pontos percentuais",

        problema:
          "A aprovação em uma pesquisa passou de 40% para 50%.",

        raciocinio:
          "A diferença direta entre as taxas é de 10 pontos percentuais. Porém, para calcular o crescimento relativo, comparamos os 10 pontos com os 40% iniciais.",

        resolucao:
          "10 ÷ 40 = 0,25. Portanto, houve crescimento relativo de 25%.",

        conclusao:
          "A taxa aumentou 10 pontos percentuais, o equivalente a crescimento de 25% em relação à taxa inicial."
      }

    ],


    estrategiasEnem: [

      {
        titulo:
          "Descubra quem representa 100%",

        texto:
          "Antes de fazer qualquer conta, identifique o valor de referência. Grande parte dos erros em porcentagem acontece porque o estudante calcula o percentual sobre a quantidade errada."
      },

      {
        titulo:
          "Transforme porcentagem em multiplicador",

        texto:
          "Aumento de 20% pode ser representado por ×1,20. Desconto de 20%, por ×0,80. Isso torna cálculos sucessivos muito mais simples."
      },

      {
        titulo:
          "Leia 'menor que' com cuidado",

        texto:
          "Se A é 60% menor que B, então A corresponde a 40% de B. O percentual retirado e o percentual restante são coisas diferentes."
      },

      {
        titulo:
          "Não some percentuais sucessivos automaticamente",

        texto:
          "Quando a base muda entre uma etapa e outra, os percentuais precisam ser aplicados separadamente."
      },

      {
        titulo:
          "Estime antes de calcular",

        texto:
          "Se 10% de 500 é 50, então 21% precisa ser pouco mais que 100. Estimativas ajudam a eliminar alternativas absurdas rapidamente."
      },

      {
        titulo:
          "Observe as unidades",

        texto:
          "Questões podem combinar porcentagem com milhares, milhões, toneladas ou reais. Verifique a unidade antes de escolher a alternativa."
      }

    ],


    errosComuns: [

      {
        titulo:
          "Calcular sobre a base errada",

        texto:
          "Uma variação percentual é calculada em relação ao valor de referência, normalmente o valor inicial."
      },

      {
        titulo:
          "Somar aumentos sucessivos",

        texto:
          "Aumento de 20% seguido de 30% não significa necessariamente aumento de 50%, pois o segundo percentual incide sobre uma nova base."
      },

      {
        titulo:
          "Achar que +20% e -20% se anulam",

        texto:
          "Depois de um aumento, a base utilizada pelo desconto mudou. Por isso, os dois percentuais iguais não necessariamente retornam ao valor inicial."
      },

      {
        titulo:
          "Confundir percentual com ponto percentual",

        texto:
          "Passar de 10% para 15% representa aumento de 5 pontos percentuais, mas crescimento relativo de 50%."
      },

      {
        titulo:
          "Interpretar 200% como aumento de 200%",

        texto:
          "Um valor que corresponde a 200% do original é duas vezes o original, portanto está 100% acima dele. Já um aumento de 200% produz um valor final igual a 300% do original."
      }

    ],


    resumo:
      "Porcentagem é uma comparação baseada em 100. Para dominar esse conteúdo, identifique sempre qual valor representa a referência, converta percentuais em multiplicadores e tenha cuidado com variações sucessivas. No ENEM, porcentagem aparece integrada a gráficos, economia, consumo, população, pesquisas e situações financeiras."

  },


  videoaula: {
    titulo:
      "Videoaula complementar",
    url:
      ""
  },


  exercicios: [

    {
      nivel:
        "Fundamental",

      pergunta:
        "Uma mochila que custa R$ 240 está sendo vendida com desconto de 25%. Qual será o preço após o desconto?",

      alternativas: [
        "R$ 160",
        "R$ 170",
        "R$ 180",
        "R$ 190",
        "R$ 200"
      ],

      correta:
        2,

      explicacao:
        "Um desconto de 25% significa que permanecem 75% do preço. Portanto, 240 × 0,75 = 180."
    },


    {
      nivel:
        "Fundamental",

      pergunta:
        "Em uma escola com 800 estudantes, 35% participam de atividades esportivas extracurriculares. Quantos estudantes participam dessas atividades?",

      alternativas: [
        "240",
        "260",
        "280",
        "300",
        "320"
      ],

      correta:
        2,

      explicacao:
        "35% de 800 corresponde a 0,35 × 800 = 280 estudantes."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Uma população passou de 40 000 para 46 000 habitantes. Qual foi o aumento percentual em relação à população inicial?",

      alternativas: [
        "6%",
        "10%",
        "12%",
        "15%",
        "18%"
      ],

      correta:
        3,

      explicacao:
        "O aumento foi de 6 000 habitantes. Comparando com os 40 000 iniciais: 6 000 ÷ 40 000 = 0,15 = 15%."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Uma loja aumentou o preço de um produto de R$ 200 em 20% e, posteriormente, ofereceu desconto de 20% sobre o novo preço. Qual passou a ser o preço final?",

      alternativas: [
        "R$ 180",
        "R$ 192",
        "R$ 200",
        "R$ 204",
        "R$ 220"
      ],

      correta:
        1,

      explicacao:
        "Após o aumento: 200 × 1,20 = 240. Depois do desconto: 240 × 0,80 = 192. Portanto, aumento e desconto iguais não se anulam."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Em determinado período, uma empresa contratou 18 000 trabalhadores. Esse número é 75% menor que o registrado no período anterior. Quantos trabalhadores aproximadamente haviam sido contratados anteriormente?",

      alternativas: [
        "24 000",
        "54 000",
        "72 000",
        "90 000",
        "135 000"
      ],

      correta:
        2,

      explicacao:
        "Se a quantidade atual é 75% menor, ela representa apenas 25% da anterior. Assim, 18 000 ÷ 0,25 = 72 000."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Uma taxa de aprovação passou de 30% para 45%. Essa mudança representa:",

      alternativas: [
        "aumento de 15% e 15 pontos percentuais.",
        "aumento de 50% e 15 pontos percentuais.",
        "aumento de 45% e 50 pontos percentuais.",
        "aumento de 30% e 45 pontos percentuais.",
        "aumento de 15% e 50 pontos percentuais."
      ],

      correta:
        1,

      explicacao:
        "A diferença é 45% - 30% = 15 pontos percentuais. Em relação aos 30% iniciais, o crescimento foi 15 ÷ 30 = 0,5 = 50%."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "O preço de determinado equipamento sofre dois aumentos consecutivos de 10%. Comparando o preço final com o preço inicial, qual é o aumento percentual total?",

      alternativas: [
        "10%",
        "20%",
        "21%",
        "22%",
        "100%"
      ],

      correta:
        2,

      explicacao:
        "Podemos considerar um preço inicial de 100. Após o primeiro aumento, temos 110. Aplicando mais 10%: 110 × 1,10 = 121. Portanto, o aumento total foi de 21%."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Uma cidade conseguiu reduzir seu consumo mensal de água de 50 milhões para 42 milhões de litros. Qual foi aproximadamente a redução percentual em relação ao consumo inicial?",

      alternativas: [
        "8%",
        "12%",
        "16%",
        "19%",
        "24%"
      ],

      correta:
        2,

      explicacao:
        "A redução foi de 8 milhões. Comparando com o consumo inicial: 8 ÷ 50 = 0,16. Portanto, a redução foi de 16%."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Após um desconto de 20%, um computador passou a custar R$ 2.400. Qual era aproximadamente seu preço antes do desconto?",

      alternativas: [
        "R$ 2.600",
        "R$ 2.800",
        "R$ 3.000",
        "R$ 3.200",
        "R$ 3.400"
      ],

      correta:
        2,

      explicacao:
        "Depois de um desconto de 20%, permanecem 80% do preço original. Portanto, 0,80 × x = 2.400. Assim, x = 2.400 ÷ 0,80 = R$ 3.000."
    }

  ]

}

,

/* =====================================================
   MÓDULO 10
   CIÊNCIAS HUMANAS — SOCIEDADE, CULTURA E CIDADANIA
===================================================== */

{
  id: 10,
  ordem: 10,
  area: "Ciências Humanas",

  titulo: "Sociedade, Cultura e Cidadania",

  descricao:
    "Compreenda como cultura, identidade, desigualdade, cidadania e participação política aparecem em questões de Ciências Humanas no ENEM.",

  dificuldade: "Intermediário",
  xp: 180,


  teoria: {

    introducao:
      "Ciências Humanas no ENEM exige muito mais do que decorar conceitos. A prova apresenta situações sociais, textos filosóficos, processos históricos, manifestações culturais e debates políticos para avaliar se o estudante consegue interpretar relações de poder, desigualdades, identidades e formas de participação na sociedade. Neste módulo, você vai construir uma base importante de Sociologia, Filosofia e cidadania.",


    topicos: [

      {
        titulo: "1. O que é sociedade?",

        texto:
          "Sociedade é formada por indivíduos que estabelecem relações, regras, instituições, valores e formas de organização. Família, escola, Estado, trabalho, religião e meios de comunicação são exemplos de instituições que participam da vida social."
      },

      {
        titulo: "2. Cultura",

        texto:
          "Cultura envolve conhecimentos, valores, hábitos, linguagens, crenças, técnicas, símbolos e práticas aprendidos socialmente. Cultura não é apenas arte ou conhecimento erudito. Maneiras de falar, hábitos alimentares, festas, comportamentos e tradições também fazem parte da cultura."
      },

      {
        titulo: "3. Cultura e identidade",

        texto:
          "A identidade é construída nas relações entre indivíduos e grupos. Língua, território, religião, memória, gênero, costumes e experiências históricas podem participar da construção de identidades sociais. Uma pessoa pode pertencer simultaneamente a vários grupos e desenvolver diferentes dimensões de identidade."
      },

      {
        titulo: "4. Etnocentrismo",

        texto:
          "Etnocentrismo ocorre quando uma cultura é julgada a partir dos valores de outra, tratada como padrão superior ou universal. Essa postura pode produzir preconceitos e interpretações distorcidas sobre grupos diferentes."
      },

      {
        titulo: "5. Relativismo cultural",

        texto:
          "O relativismo cultural busca compreender práticas culturais considerando o contexto em que surgem. Isso não significa aceitar automaticamente qualquer prática, mas evitar julgamentos simplistas baseados apenas nos valores de outra sociedade."
      },

      {
        titulo: "6. Socialização",

        texto:
          "Socialização é o processo pelo qual indivíduos aprendem normas, valores, comportamentos e formas de convivência. Família, escola, grupos sociais, mídia e instituições participam desse processo."
      },

      {
        titulo: "7. Desigualdade social",

        texto:
          "Desigualdade social corresponde à distribuição desigual de recursos, oportunidades e condições de vida. Renda, educação, moradia, saúde e acesso a serviços podem variar entre grupos sociais. O ENEM frequentemente relaciona desigualdade a processos históricos e estruturas econômicas."
      },

      {
        titulo: "8. Preconceito e discriminação",

        texto:
          "Preconceito é uma avaliação ou julgamento construído previamente sobre pessoas ou grupos. Discriminação corresponde a práticas que produzem tratamento desigual. Racismo, xenofobia, intolerância religiosa e outras formas de exclusão podem envolver dimensões individuais e estruturais."
      },

      {
        titulo: "9. Cidadania",

        texto:
          "Cidadania envolve participação na vida social e acesso a direitos civis, políticos e sociais. Liberdade individual, participação política, educação, saúde e proteção social são exemplos de dimensões da cidadania."
      },

      {
        titulo: "10. Direitos civis, políticos e sociais",

        texto:
          "Direitos civis estão ligados às liberdades individuais e à igualdade perante a lei. Direitos políticos envolvem participação no poder, como votar e ser votado. Direitos sociais incluem condições como educação, saúde, trabalho e proteção social."
      },

      {
        titulo: "11. Democracia",

        texto:
          "Democracia não se resume ao voto. Ela envolve instituições, regras, direitos, participação, pluralismo e possibilidade de disputa política. Diferentes sociedades democráticas podem adotar formas distintas de organização."
      },

      {
        titulo: "12. Estado",

        texto:
          "O Estado é uma organização política que exerce autoridade sobre determinado território e população. Ele cria leis, administra instituições e pode desenvolver políticas públicas. Estado, governo e sociedade não são conceitos idênticos."
      },

      {
        titulo: "13. Governo e Estado",

        texto:
          "Governo corresponde ao grupo que ocupa temporariamente posições de direção política. O Estado possui instituições mais permanentes, como sistemas jurídicos, órgãos administrativos e estruturas públicas."
      },

      {
        titulo: "14. Participação política",

        texto:
          "Participação política pode ocorrer por meio do voto, partidos, movimentos sociais, associações, manifestações, conselhos, organizações comunitárias e outras formas de ação coletiva."
      },

      {
        titulo: "15. Movimentos sociais",

        texto:
          "Movimentos sociais organizam indivíduos em torno de reivindicações, direitos ou transformações. Movimentos trabalhistas, ambientais, estudantis, feministas, antirracistas e por moradia são exemplos de atuação coletiva."
      },

      {
        titulo: "16. Espaço público",

        texto:
          "Espaço público é o ambiente em que questões de interesse coletivo podem ser debatidas e disputadas. Ele não corresponde apenas a praças e ruas, mas também a arenas sociais e políticas onde diferentes grupos expressam interesses."
      },

      {
        titulo: "17. Poder",

        texto:
          "Poder é a capacidade de influenciar decisões, comportamentos ou relações sociais. Ele não existe apenas no Estado. Empresas, instituições, grupos sociais, mídia e relações cotidianas também podem envolver disputas de poder."
      },

      {
        titulo: "18. Trabalho e sociedade",

        texto:
          "O trabalho organiza grande parte das relações econômicas e sociais. Mudanças tecnológicas podem criar novas profissões e eliminar outras, reorganizando qualificações, relações de emprego e desigualdades."
      },

      {
        titulo: "19. Tecnologia e desemprego estrutural",

        texto:
          "Desemprego estrutural ocorre quando mudanças duradouras na economia reduzem a necessidade de determinados tipos de trabalho. Automação e novas tecnologias podem substituir algumas funções enquanto criam demanda por outras."
      },

      {
        titulo: "20. Estratégia para Ciências Humanas",

        texto:
          "Em vez de procurar uma palavra-chave isolada, identifique o problema apresentado, o contexto histórico ou social e a relação entre os conceitos. Muitas alternativas parecem corretas em geral, mas apenas uma explica especificamente o fenômeno descrito."
      }

    ],


    exemplosResolvidos: [

      {
        titulo:
          "Cidadania além do voto",

        problema:
          "Um grupo de moradores organiza reuniões, apresenta propostas ao poder público e participa de um conselho municipal para discutir melhorias no bairro.",

        raciocinio:
          "O texto apresenta participação coletiva em decisões públicas. O voto não é a única forma possível de cidadania.",

        resolucao:
          "A situação demonstra exercício de cidadania por meio de participação política e atuação em espaços institucionais de decisão.",

        conclusao:
          "No ENEM, cidadania deve ser entendida como participação e exercício de direitos, e não apenas como participação eleitoral."
      },

      {
        titulo:
          "Automação e trabalho",

        problema:
          "Uma empresa automatiza parte de sua produção e reduz permanentemente a necessidade de trabalhadores responsáveis por determinadas tarefas.",

        raciocinio:
          "A redução de postos ocorre por uma transformação estrutural do processo produtivo, e não apenas por uma crise temporária.",

        resolucao:
          "A situação pode ser associada ao desemprego estrutural provocado por mudanças tecnológicas.",

        conclusao:
          "Observe se a causa do desemprego é temporária ou se resulta de transformações duradouras na estrutura econômica."
      },

      {
        titulo:
          "Identidade cultural",

        problema:
          "Uma comunidade preserva uma forma própria de falar, festas tradicionais e práticas transmitidas entre gerações.",

        raciocinio:
          "Essas práticas ajudam o grupo a reconhecer uma história e pertencimento compartilhados.",

        resolucao:
          "A preservação desses elementos pode fortalecer uma identidade cultural coletiva.",

        conclusao:
          "Língua, memória e práticas culturais podem funcionar como elementos de identidade social."
      },

      {
        titulo:
          "Etnocentrismo",

        problema:
          "Um viajante observa costumes de outro povo e afirma que eles são 'atrasados' apenas porque são diferentes dos hábitos de sua própria sociedade.",

        raciocinio:
          "O viajante está usando os valores de sua cultura como padrão universal para julgar outra.",

        resolucao:
          "Essa postura corresponde ao etnocentrismo.",

        conclusao:
          "Diferença cultural não deve ser automaticamente interpretada como inferioridade."
      }

    ],


    estrategiasEnem: [

      {
        titulo:
          "Procure a relação social",

        texto:
          "Questões de Humanas quase sempre apresentam relações entre indivíduos, grupos, instituições, território ou poder. Identifique quem está se relacionando com quem."
      },

      {
        titulo:
          "Diferencie conceito e exemplo",

        texto:
          "Uma questão pode narrar uma situação concreta e pedir o conceito que melhor a explica. Primeiro compreenda a situação; depois associe ao conceito."
      },

      {
        titulo:
          "Cuidado com alternativas genéricas",

        texto:
          "Uma alternativa pode ser verdadeira em sentido amplo, mas não explicar especificamente o fenômeno apresentado no texto."
      },

      {
        titulo:
          "Observe o contexto histórico",

        texto:
          "Conceitos como cidadania, democracia e direitos mudaram historicamente. Evite aplicar automaticamente valores atuais a sociedades de outros períodos."
      },

      {
        titulo:
          "Não reduza cidadania ao voto",

        texto:
          "Participação social, direitos civis e políticas públicas também fazem parte da cidadania."
      },

      {
        titulo:
          "Tecnologia não produz um único efeito",

        texto:
          "Transformações tecnológicas podem aumentar produtividade e criar oportunidades, mas também reorganizar empregos e produzir exclusões."
      },

      {
        titulo:
          "Diferencie Estado e governo",

        texto:
          "Governos mudam. Estruturas e instituições do Estado possuem maior permanência."
      }

    ],


    errosComuns: [

      {
        titulo:
          "Tratar cultura como algo apenas artístico",

        texto:
          "Cultura envolve modos de vida, linguagem, hábitos, valores e práticas sociais, não apenas música, literatura e artes visuais."
      },

      {
        titulo:
          "Achar que diferença cultural significa atraso",

        texto:
          "Esse tipo de julgamento pode reproduzir uma visão etnocêntrica."
      },

      {
        titulo:
          "Confundir preconceito e discriminação",

        texto:
          "Preconceito está ligado a julgamentos e representações; discriminação envolve ações e tratamentos desiguais."
      },

      {
        titulo:
          "Achar que democracia é apenas eleição",

        texto:
          "Eleição é importante, mas democracia também envolve direitos, instituições, participação e pluralidade."
      },

      {
        titulo:
          "Confundir governo com Estado",

        texto:
          "Um governo é temporário. O Estado envolve instituições políticas e administrativas mais permanentes."
      },

      {
        titulo:
          "Interpretar todo desemprego tecnológico como temporário",

        texto:
          "Quando mudanças produtivas eliminam permanentemente determinadas funções, o fenômeno pode ser estrutural."
      }

    ],


    resumo:
      "Sociedade é construída por relações, instituições, valores e disputas. Cultura participa da formação das identidades, enquanto cidadania envolve direitos e participação na vida coletiva. Para o ENEM, é essencial compreender desigualdades, diversidade cultural, democracia, movimentos sociais, relações de poder e transformações no mundo do trabalho."

  },


  videoaula: {
    titulo:
      "Videoaula complementar",
    url:
      ""
  },


  exercicios: [

    {
      nivel:
        "Fundamental",

      pergunta:
        "Uma comunidade mantém festas, formas de falar e práticas transmitidas entre gerações. Esses elementos contribuem principalmente para:",

      alternativas: [
        "eliminar diferenças entre grupos sociais.",
        "construir e preservar identidades culturais.",
        "impedir mudanças históricas.",
        "substituir instituições políticas.",
        "eliminar a diversidade linguística."
      ],

      correta:
        1,

      explicacao:
        "Práticas compartilhadas, memória, língua e costumes ajudam grupos a construir pertencimento e identidade cultural."
    },


    {
      nivel:
        "Fundamental",

      pergunta:
        "Quando uma pessoa considera os costumes de outro grupo inferiores apenas porque são diferentes dos costumes de sua própria cultura, ela demonstra uma postura de:",

      alternativas: [
        "relativismo cultural.",
        "pluralismo político.",
        "etnocentrismo.",
        "participação cidadã.",
        "mobilidade social."
      ],

      correta:
        2,

      explicacao:
        "O etnocentrismo ocorre quando os valores de uma cultura são usados como padrão para julgar outras, frequentemente produzindo avaliações de superioridade ou inferioridade."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Moradores de uma cidade organizam uma associação, participam de audiências públicas e pressionam o governo municipal por melhorias no transporte. A situação representa principalmente:",

      alternativas: [
        "negação da cidadania.",
        "participação política na esfera pública.",
        "eliminação da atuação do Estado.",
        "substituição completa das eleições.",
        "isolamento dos grupos sociais."
      ],

      correta:
        1,

      explicacao:
        "A cidadania também ocorre por meio de organização coletiva, participação em debates e reivindicação de políticas públicas."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Uma fábrica instala sistemas automatizados que passam a realizar permanentemente funções antes executadas por trabalhadores. Parte desses trabalhadores perde seus empregos porque suas ocupações deixam de ser necessárias. Esse fenômeno pode ser associado ao:",

      alternativas: [
        "desemprego estrutural.",
        "crescimento natural da população.",
        "trabalho artesanal.",
        "isolamento cultural.",
        "aumento do emprego sazonal."
      ],

      correta:
        0,

      explicacao:
        "O desemprego estrutural ocorre quando mudanças na organização econômica e tecnológica eliminam ou reduzem permanentemente determinadas funções."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "O direito ao voto é uma dimensão importante da cidadania, mas não esgota seu significado porque a cidadania também envolve:",

      alternativas: [
        "apenas obrigações econômicas.",
        "direitos civis, sociais e outras formas de participação.",
        "somente filiação a partidos políticos.",
        "a ausência de conflitos sociais.",
        "apenas direitos individuais de propriedade."
      ],

      correta:
        1,

      explicacao:
        "Cidadania envolve direitos civis, políticos e sociais, além de diferentes formas de participação na vida coletiva."
    },


    {
      nivel:
        "Intermediário",

      pergunta:
        "Sobre Estado e governo, é correto afirmar que:",

      alternativas: [
        "Estado e governo são sempre exatamente a mesma coisa.",
        "o Estado muda completamente a cada eleição.",
        "governos são temporários, enquanto instituições do Estado possuem maior permanência.",
        "o governo existe sem qualquer relação com instituições públicas.",
        "o Estado corresponde apenas ao território físico."
      ],

      correta:
        2,

      explicacao:
        "O governo corresponde ao grupo que exerce temporariamente a direção política. O Estado envolve instituições, normas e estruturas de maior permanência."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Uma legislação estabelece formalmente igualdade de direitos entre todos os cidadãos, mas determinados grupos continuam enfrentando obstáculos sistemáticos de acesso a emprego, educação e serviços. Essa situação demonstra que:",

      alternativas: [
        "igualdade jurídica elimina automaticamente todas as desigualdades sociais.",
        "desigualdades podem persistir mesmo quando existe igualdade formal perante a lei.",
        "a cidadania depende exclusivamente do nível de renda.",
        "direitos sociais tornam desnecessários os direitos civis.",
        "toda desigualdade decorre apenas de escolhas individuais."
      ],

      correta:
        1,

      explicacao:
        "A existência de igualdade formal nas leis não significa que todos possuam, na prática, as mesmas condições e oportunidades. Estruturas sociais podem manter desigualdades."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Um movimento social organiza manifestações, produz campanhas e apresenta propostas de alteração de políticas públicas. A atuação descrita mostra que movimentos sociais podem:",

      alternativas: [
        "atuar na disputa por direitos e transformações sociais.",
        "existir somente quando controlados pelo governo.",
        "substituir obrigatoriamente todas as instituições políticas.",
        "eliminar qualquer conflito de interesses.",
        "representar apenas interesses individuais."
      ],

      correta:
        0,

      explicacao:
        "Movimentos sociais são formas de organização coletiva que podem reivindicar direitos, pressionar instituições e participar de processos de transformação social."
    },


    {
      nivel:
        "Avançado",

      pergunta:
        "Em uma sociedade democrática, a existência de opiniões políticas distintas e grupos com interesses divergentes evidencia a importância do:",

      alternativas: [
        "fim das disputas políticas.",
        "pluralismo e da convivência entre diferentes posições.",
        "controle de todas as opiniões por uma única instituição.",
        "abandono da participação cidadã.",
        "impedimento da organização coletiva."
      ],

      correta:
        1,

      explicacao:
        "A democracia pressupõe pluralidade de posições, possibilidade de organização e disputa política dentro de regras e instituições."
    }

  ]

},

  /* =====================================================
     MÓDULO 11
     MATEMÁTICA — RAZÃO, PROPORÇÃO E REGRA DE TRÊS
  ===================================================== */

  {
    id: 11,
    ordem: 11,
    area: "Matemática",

    titulo:
      "Razão, Proporção e Regra de Três",

    descricao:
      "Aprenda a comparar grandezas, reconhecer relações proporcionais e resolver problemas de regra de três com interpretação.",

    dificuldade: "Base ENEM",
    xp: 160,

    teoria: {

      introducao:
        "Razão e proporção aparecem em escalas, receitas, mapas, velocidades, consumo, densidade, produtividade e inúmeras situações do ENEM. O mais importante não é decorar uma regra de três: é compreender qual relação existe entre as grandezas antes de realizar qualquer cálculo.",

      topicos: [

        {
          titulo:
            "1. O que é razão?",

          texto:
            "Razão é uma comparação entre duas quantidades por meio de uma divisão. Se uma sala possui 20 meninas e 10 meninos, a razão entre meninas e meninos é 20/10 = 2. Isso significa que existem 2 meninas para cada menino. A ordem importa: a razão entre meninos e meninas seria 10/20 = 1/2."
        },

        {
          titulo:
            "2. Razão não significa necessariamente fração de um todo",

          texto:
            "Uma razão pode comparar duas grandezas diferentes. A velocidade média, por exemplo, relaciona distância e tempo. Um veículo que percorre 180 km em 3 horas apresenta razão 180/3 = 60 km por hora. Já a densidade demográfica relaciona quantidade de habitantes e área."
        },

        {
          titulo:
            "3. O que é proporção?",

          texto:
            "Proporção é uma igualdade entre duas razões. Por exemplo, 2/3 = 4/6. As duas frações representam a mesma relação. Em uma proporção a/b = c/d, com denominadores diferentes de zero, podemos utilizar a propriedade fundamental: a × d = b × c."
        },

        {
          titulo:
            "4. Grandezas diretamente proporcionais",

          texto:
            "Duas grandezas são diretamente proporcionais quando aumentam ou diminuem mantendo a mesma relação. Se cada ingresso custa R$ 30, então 2 ingressos custam R$ 60, 3 custam R$ 90 e 4 custam R$ 120. Dobrar a quantidade dobra o preço."
        },

        {
          titulo:
            "5. Grandezas inversamente proporcionais",

          texto:
            "Duas grandezas podem variar em sentidos opostos. Imagine um trabalho que levaria 12 horas para uma pessoa e, em uma situação idealizada, 6 horas para duas pessoas trabalhando no mesmo ritmo. Ao aumentar o número de trabalhadores, o tempo diminui. Essa é uma relação inversamente proporcional."
        },

        {
          titulo:
            "6. Regra de três direta",

          texto:
            "Exemplo: 4 camisetas custam R$ 120. Quanto custariam 7 camisetas pelo mesmo preço unitário? Organizamos as grandezas: 4 camisetas → 120 reais; 7 camisetas → x. Como mais camisetas significam maior preço, a relação é direta. Temos 4/7 = 120/x. Fazendo a multiplicação cruzada: 4x = 840, portanto x = 210."
        },

        {
          titulo:
            "7. Regra de três inversa",

          texto:
            "Exemplo idealizado: 6 máquinas realizam um serviço em 10 horas. Se 12 máquinas idênticas forem utilizadas, quanto tempo seria necessário? O número de máquinas dobrou; o tempo deve cair pela metade. Portanto, seriam necessárias 5 horas. Antes de multiplicar valores, identifique o tipo de relação."
        },

        {
          titulo:
            "8. Escala",

          texto:
            "Escalas também são razões. Uma escala 1:100 indica que 1 unidade no desenho corresponde a 100 unidades na realidade. Assim, 3 cm em uma planta representam 300 cm, ou 3 metros, na construção real."
        },

        {
          titulo:
            "9. Estratégia para questões do ENEM",

          texto:
            "Não monte regra de três automaticamente sempre que aparecerem números. Primeiro identifique as grandezas, suas unidades e a relação entre elas. Muitas alternativas incorretas são construídas justamente para quem realiza multiplicações sem interpretar o problema."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Uma receita para 4 pessoas utiliza 300 g de arroz. Mantendo a proporção, quantos gramas são necessários para 10 pessoas?",

        alternativas: [
          "450 g",
          "600 g",
          "750 g",
          "900 g",
          "1200 g"
        ],

        correta: 2
      },

      {
        pergunta:
          "Em uma escala 1:50 000, uma distância de 4 cm no mapa representa quantos quilômetros na realidade?",

        alternativas: [
          "0,2 km",
          "2 km",
          "20 km",
          "200 km",
          "2000 km"
        ],

        correta: 1
      },

      {
        pergunta:
          "Se 5 cadernos custam R$ 45, quanto custam 8 cadernos mantendo o mesmo preço unitário?",

        alternativas: [
          "R$ 54",
          "R$ 63",
          "R$ 72",
          "R$ 81",
          "R$ 90"
        ],

        correta: 2
      },

      {
        pergunta:
          "Em uma relação inversamente proporcional, quando uma grandeza dobra, a outra:",

        alternativas: [
          "Também dobra.",
          "É dividida por 2.",
          "É multiplicada por 4.",
          "Permanece obrigatoriamente igual.",
          "Torna-se zero."
        ],

        correta: 1
      },

      {
        pergunta:
          "A razão entre 24 estudantes aprovados e 8 reprovados é:",

        alternativas: [
          "1/3",
          "2",
          "3",
          "8",
          "16"
        ],

        correta: 2
      }

    ]

  },


  /* =====================================================
     MÓDULO 12
     LINGUAGENS — INTERPRETAÇÃO E INFERÊNCIA
  ===================================================== */

  {
    id: 12,
    ordem: 12,
    area: "Linguagens",

    titulo:
      "Interpretação de Texto e Inferência",

    descricao:
      "Aprofunde a leitura de textos, relações implícitas, intenção comunicativa, ironia e efeitos de sentido.",

    dificuldade: "Base ENEM",
    xp: 160,

    teoria: {

      introducao:
        "No ENEM, compreender palavras individualmente não basta. Muitas questões exigem perceber relações construídas pelo texto: ironia, intenção, posicionamento, oposição, pressupostos e informações implícitas. Interpretar é justificar uma conclusão usando evidências presentes no próprio texto.",

      topicos: [

        {
          titulo:
            "1. Informação explícita e implícita",

          texto:
            "Informação explícita aparece diretamente no texto. Informação implícita precisa ser inferida. Se um personagem entra em casa completamente molhado segurando um guarda-chuva quebrado, o texto não precisa dizer que estava chovendo para permitir essa conclusão."
        },

        {
          titulo:
            "2. Inferência",

          texto:
            "Inferir é chegar a uma conclusão sustentada por pistas. Inferência não significa inventar. Se uma alternativa apresenta uma interpretação que não encontra apoio no texto, ela não é uma inferência válida."
        },

        {
          titulo:
            "3. Pressuposto",

          texto:
            "Certas construções carregam informações pressupostas. Na frase 'Joana voltou a estudar', pressupõe-se que Joana estudava antes e havia interrompido essa atividade. Verbos e expressões podem introduzir informações sem afirmá-las diretamente."
        },

        {
          titulo:
            "4. Ironia",

          texto:
            "Ironia ocorre quando existe uma diferença entre aquilo que é literalmente dito e o sentido pretendido. Se alguém observa uma rua completamente alagada e afirma 'excelente sistema de drenagem', provavelmente está criticando justamente a ausência de eficiência."
        },

        {
          titulo:
            "5. Efeito de sentido",

          texto:
            "A escolha de palavras, pontuação, repetição e organização das frases produz efeitos. Uma manchete pode parecer neutra ou crítica dependendo dos verbos e adjetivos escolhidos. Questões do ENEM frequentemente perguntam qual efeito uma escolha linguística provoca."
        },

        {
          titulo:
            "6. Finalidade do texto",

          texto:
            "Pergunte: para que esse texto foi produzido? Informar, convencer, criticar, divertir, orientar, denunciar ou vender são algumas possibilidades. Gênero, público e contexto ajudam a responder."
        },

        {
          titulo:
            "7. Linguagem verbal e não verbal",

          texto:
            "Charges, campanhas, tirinhas e anúncios combinam frequentemente palavras e imagens. Não analise cada elemento isoladamente. Uma imagem pode contradizer uma frase e justamente dessa relação surgir o humor ou a crítica."
        },

        {
          titulo:
            "8. Alternativas exageradas",

          texto:
            "Desconfie de palavras absolutas como 'sempre', 'nunca', 'todos' e 'apenas' quando o texto apresenta uma afirmação mais limitada. Muitas questões possuem alternativas quase corretas, mas ampliam indevidamente a conclusão."
        },

        {
          titulo:
            "9. Leia o comando",

          texto:
            "Saber o que a questão pede economiza tempo. 'Segundo o texto', 'o efeito produzido', 'a finalidade', 'a crítica presente' e 'é possível inferir' exigem operações de leitura diferentes."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Inferir uma informação significa:",

        alternativas: [
          "Inventar uma explicação possível.",
          "Copiar literalmente o texto.",
          "Chegar a uma conclusão sustentada por pistas do texto.",
          "Discordar do autor.",
          "Ignorar informações explícitas."
        ],

        correta: 2
      },

      {
        pergunta:
          "Na frase 'Lucas voltou a correr pela manhã', qual informação é pressuposta?",

        alternativas: [
          "Lucas nunca correu.",
          "Lucas corria anteriormente.",
          "Lucas é atleta profissional.",
          "Lucas corre todas as manhãs.",
          "Lucas deixou de caminhar."
        ],

        correta: 1
      },

      {
        pergunta:
          "Uma pessoa observa um enorme congestionamento e afirma 'que trânsito maravilhoso'. Esse enunciado pode produzir principalmente um efeito de:",

        alternativas: [
          "Neutralidade.",
          "Ironia.",
          "Descrição científica.",
          "Formalidade.",
          "Incerteza."
        ],

        correta: 1
      },

      {
        pergunta:
          "Ao interpretar uma charge, o estudante deve:",

        alternativas: [
          "Analisar apenas o texto escrito.",
          "Analisar apenas a imagem.",
          "Relacionar elementos verbais e visuais.",
          "Ignorar conhecimentos de contexto.",
          "Interpretar literalmente todo enunciado."
        ],

        correta: 2
      },

      {
        pergunta:
          "Uma alternativa afirma 'todos os jovens rejeitam livros', enquanto o texto diz apenas que 'parte dos jovens lê menos livros impressos'. A alternativa está:",

        alternativas: [
          "Correta por possuir sentido semelhante.",
          "Exagerando aquilo que o texto permite concluir.",
          "Correta por utilizar a palavra jovens.",
          "Necessariamente incompleta apenas por ser curta.",
          "Expressando uma inferência obrigatória."
        ],

        correta: 1
      }

    ]

  },


  /* =====================================================
     MÓDULO 13
     NATUREZA — MATÉRIA E ÁTOMOS
  ===================================================== */

  {
    id: 13,
    ordem: 13,
    area: "Ciências da Natureza",

    titulo:
      "Matéria, Átomos e Transformações",

    descricao:
      "Entenda matéria, estrutura atômica, substâncias, misturas e transformações físicas e químicas.",

    dificuldade: "Base ENEM",
    xp: 170,

    teoria: {

      introducao:
        "Química estuda a matéria, sua composição, propriedades e transformações. Antes de estudar ligações químicas, reações ou cálculos, é essencial compreender a diferença entre matéria, átomo, elemento químico, substância, mistura e transformação.",

      topicos: [

        {
          titulo:
            "1. Matéria",

          texto:
            "Matéria é tudo aquilo que possui massa e ocupa espaço. Água, ar, madeira, ferro e o próprio corpo são exemplos. Energia, por sua vez, não é classificada como matéria."
        },

        {
          titulo:
            "2. Átomos",

          texto:
            "Átomos são unidades fundamentais da matéria. Em um modelo simplificado, possuem núcleo formado por prótons e nêutrons e uma região eletrônica onde se encontram elétrons."
        },

        {
          titulo:
            "3. Prótons, nêutrons e elétrons",

          texto:
            "Prótons apresentam carga positiva, elétrons carga negativa e nêutrons não possuem carga elétrica líquida. Em um átomo eletricamente neutro, o número de prótons é igual ao número de elétrons."
        },

        {
          titulo:
            "4. Número atômico",

          texto:
            "O número atômico, representado por Z, corresponde à quantidade de prótons no núcleo. É essa quantidade que identifica o elemento químico. Todo átomo de carbono possui 6 prótons."
        },

        {
          titulo:
            "5. Elemento químico e substância",

          texto:
            "Elemento químico é o conjunto de átomos que possuem o mesmo número de prótons. Já uma substância é formada por uma composição definida. O gás oxigênio O₂ é uma substância formada apenas pelo elemento oxigênio."
        },

        {
          titulo:
            "6. Substâncias simples e compostas",

          texto:
            "Uma substância simples possui átomos de apenas um elemento químico, como O₂. Uma substância composta possui mais de um elemento, como a água H₂O, formada por hidrogênio e oxigênio."
        },

        {
          titulo:
            "7. Misturas",

          texto:
            "Misturas possuem mais de uma substância. Em uma mistura homogênea observamos uma única fase visível, como água com sal completamente dissolvido. Em uma mistura heterogênea percebemos duas ou mais fases, como água e óleo."
        },

        {
          titulo:
            "8. Transformação física",

          texto:
            "Uma transformação física modifica estado, forma ou aparência sem produzir necessariamente novas substâncias. O derretimento do gelo é um exemplo: continua existindo água, embora em outro estado físico."
        },

        {
          titulo:
            "9. Transformação química",

          texto:
            "Em uma transformação química ocorre formação de novas substâncias. Combustão, ferrugem e muitas reações envolvendo alimentos são exemplos. Mudança de cor, formação de gás ou precipitado podem ser indícios, embora seja necessário analisar o contexto."
        },

        {
          titulo:
            "10. Conservação da matéria",

          texto:
            "Em uma reação química realizada em sistema fechado, os átomos são reorganizados. Eles não simplesmente desaparecem. Essa ideia será fundamental para compreender balanceamento químico posteriormente."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "O número atômico de um elemento corresponde ao número de:",

        alternativas: [
          "Nêutrons.",
          "Elétrons apenas.",
          "Prótons.",
          "Prótons mais nêutrons.",
          "Moléculas."
        ],

        correta: 2
      },

      {
        pergunta:
          "Qual alternativa representa uma substância composta?",

        alternativas: [
          "O₂",
          "N₂",
          "Fe",
          "H₂O",
          "He"
        ],

        correta: 3
      },

      {
        pergunta:
          "Água e óleo formam:",

        alternativas: [
          "Elemento químico.",
          "Substância simples.",
          "Mistura homogênea.",
          "Mistura heterogênea.",
          "Átomo."
        ],

        correta: 3
      },

      {
        pergunta:
          "O derretimento de um cubo de gelo é principalmente uma transformação:",

        alternativas: [
          "Nuclear.",
          "Química.",
          "Física.",
          "Biológica.",
          "Atômica."
        ],

        correta: 2
      },

      {
        pergunta:
          "A formação de ferrugem é exemplo de:",

        alternativas: [
          "Transformação química.",
          "Fusão.",
          "Evaporação.",
          "Transformação exclusivamente física.",
          "Separação de mistura."
        ],

        correta: 0
      }

    ]

  },


  /* =====================================================
     MÓDULO 14
     HUMANAS — ESTADO, PODER E DEMOCRACIA
  ===================================================== */

  {
    id: 14,
    ordem: 14,
    area: "Ciências Humanas",

    titulo:
      "Estado, Poder e Democracia",

    descricao:
      "Compreenda conceitos políticos fundamentais para interpretar cidadania, instituições, poder e democracia.",

    dificuldade: "Base ENEM",
    xp: 170,

    teoria: {

      introducao:
        "Questões de política no ENEM não dependem apenas de memorizar nomes de governantes. É necessário compreender conceitos como Estado, governo, poder, cidadania, democracia, representação e participação política.",

      topicos: [

        {
          titulo:
            "1. Estado",

          texto:
            "Estado é uma organização política que exerce autoridade sobre determinado território e população por meio de instituições e normas. Ele possui continuidade além dos indivíduos que ocupam temporariamente cargos políticos."
        },

        {
          titulo:
            "2. Estado não é governo",

          texto:
            "Governo é o conjunto de autoridades responsáveis pela administração política em determinado período. Governos mudam; o Estado e suas instituições possuem maior permanência."
        },

        {
          titulo:
            "3. Poder",

          texto:
            "Poder pode ser entendido como capacidade de influenciar comportamentos, decisões e relações sociais. Ele não existe apenas dentro do Estado: também aparece em instituições, empresas, relações econômicas, culturais e sociais."
        },

        {
          titulo:
            "4. Democracia",

          texto:
            "Democracia envolve participação política, direitos, mecanismos de representação e possibilidade de disputa pelo poder segundo determinadas regras. Eleições são importantes, mas democracia não se resume ao ato de votar."
        },

        {
          titulo:
            "5. Democracia representativa",

          texto:
            "Em democracias representativas, cidadãos elegem representantes para exercer funções políticas. Isso não elimina outras formas de participação, como mobilizações, organizações civis, audiências e mecanismos de controle social."
        },

        {
          titulo:
            "6. Cidadania",

          texto:
            "Cidadania envolve direitos e participação na vida social e política. Direitos civis, políticos e sociais foram historicamente conquistados e ampliados por diferentes grupos."
        },

        {
          titulo:
            "7. Separação dos poderes",

          texto:
            "A organização estatal moderna pode distribuir funções entre Poder Executivo, Legislativo e Judiciário. Em termos gerais, o Legislativo produz normas, o Executivo administra e implementa políticas e o Judiciário aplica e interpreta o direito nos casos de sua competência."
        },

        {
          titulo:
            "8. Participação política",

          texto:
            "Participar politicamente não significa apenas candidatar-se a cargos. Voto, associações, movimentos sociais, manifestações, conselhos e debates públicos podem constituir formas de participação."
        },

        {
          titulo:
            "9. Leia questões políticas historicamente",

          texto:
            "Uma instituição política precisa ser analisada em seu contexto histórico. Democracia, cidadania e direitos assumiram diferentes formas ao longo do tempo. Evite projetar automaticamente conceitos atuais sobre sociedades antigas."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Qual é a diferença mais adequada entre Estado e governo?",

        alternativas: [
          "Não existe diferença.",
          "O Estado possui instituições mais permanentes, enquanto governos são administrações temporárias.",
          "O governo é sempre permanente.",
          "Estado significa somente território.",
          "Governo significa somente Poder Judiciário."
        ],

        correta: 1
      },

      {
        pergunta:
          "Em uma democracia representativa:",

        alternativas: [
          "Não existem eleições.",
          "A população elege representantes políticos.",
          "Somente juízes exercem poder.",
          "A participação social é proibida.",
          "Não existem instituições."
        ],

        correta: 1
      },

      {
        pergunta:
          "Cidadania está relacionada principalmente a:",

        alternativas: [
          "Direitos, deveres e participação social e política.",
          "Somente pagamento de impostos.",
          "Somente nacionalidade.",
          "Apenas eleições presidenciais.",
          "Ausência de direitos sociais."
        ],

        correta: 0
      },

      {
        pergunta:
          "Qual dos itens é uma forma de participação política?",

        alternativas: [
          "Apenas ocupar cargo público.",
          "Somente votar.",
          "Voto, movimentos sociais e participação em organizações civis.",
          "Somente filiação partidária.",
          "Nenhuma manifestação coletiva."
        ],

        correta: 2
      },

      {
        pergunta:
          "Em termos gerais, qual poder possui função legislativa?",

        alternativas: [
          "Executivo.",
          "Judiciário.",
          "Legislativo.",
          "Militar.",
          "Econômico."
        ],

        correta: 2
      }

    ]

  },


  /* =====================================================
     MÓDULO 15
     MATEMÁTICA — PORCENTAGEM
  ===================================================== */

  {
    id: 15,
    ordem: 15,
    area: "Matemática",

    titulo:
      "Porcentagem e Matemática Financeira",

    descricao:
      "Aprenda porcentagens, aumentos, descontos, variações sucessivas e conceitos financeiros essenciais.",

    dificuldade: "Base ENEM",
    xp: 180,

    teoria: {

      introducao:
        "Porcentagem está entre os conteúdos matemáticos mais presentes no cotidiano e aparece em descontos, inflação, impostos, pesquisas, juros, variações populacionais e leitura de gráficos. Entender porcentagem como razão torna o conteúdo muito mais simples.",

      topicos: [

        {
          titulo:
            "1. O significado de porcentagem",

          texto:
            "Porcentagem significa 'por cento'. Assim, 25% = 25/100 = 0,25. Calcular 25% de 200 significa multiplicar 200 por 0,25, obtendo 50."
        },

        {
          titulo:
            "2. Porcentagens comuns",

          texto:
            "Algumas porcentagens podem ser calculadas mentalmente. 50% é metade; 25% é um quarto; 10% é dividir por 10; 1% é dividir por 100. Decompor porcentagens pode acelerar a prova."
        },

        {
          titulo:
            "3. Aumento percentual",

          texto:
            "Um produto de R$ 200 sofre aumento de 15%. O aumento é 200 × 0,15 = 30. Portanto, o novo preço é R$ 230. Também podemos calcular diretamente usando fator 1,15: 200 × 1,15 = 230."
        },

        {
          titulo:
            "4. Desconto percentual",

          texto:
            "Um desconto de 20% significa que permanece 80% do valor original. Assim, um produto de R$ 500 com 20% de desconto custa 500 × 0,80 = R$ 400."
        },

        {
          titulo:
            "5. Percentual de variação",

          texto:
            "Para descobrir quanto uma quantidade variou percentualmente, comparamos a variação ao valor inicial. Se um preço sobe de 80 para 100, houve aumento de 20. Como 20/80 = 0,25, o aumento foi de 25%."
        },

        {
          titulo:
            "6. Aumentar 20% e diminuir 20% não volta ao mesmo valor",

          texto:
            "Considere R$ 100. Um aumento de 20% leva a R$ 120. Depois, uma redução de 20% é calculada sobre 120, resultando em desconto de R$ 24. O valor final é R$ 96. As porcentagens foram aplicadas sobre bases diferentes."
        },

        {
          titulo:
            "7. Juros simples",

          texto:
            "Nos juros simples, o acréscimo por período é calculado sempre sobre o capital inicial. A expressão é J = C × i × t, em que C é o capital, i é a taxa e t é o tempo. Um capital de R$ 1000 a 2% ao mês durante 3 meses gera J = 1000 × 0,02 × 3 = R$ 60."
        },

        {
          titulo:
            "8. Juros compostos",

          texto:
            "Nos juros compostos, cada período utiliza como base o valor acumulado anteriormente. Por isso existe o chamado 'juros sobre juros'. Mesmo quando a questão não exige fórmula avançada, compreender essa lógica é essencial."
        },

        {
          titulo:
            "9. Taxa e período precisam combinar",

          texto:
            "Se a taxa está em porcentagem ao mês, o tempo utilizado no cálculo precisa estar em meses. Uma taxa anual não pode ser misturada diretamente com tempo mensal sem conversão adequada."
        },

        {
          titulo:
            "10. Estratégia ENEM",

          texto:
            "Antes de calcular, identifique sobre qual valor a porcentagem está sendo aplicada. Em variações sucessivas, essa base pode mudar. Essa é uma das principais fontes de erro."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Quanto é 30% de 250?",

        alternativas: [
          "25",
          "50",
          "75",
          "100",
          "125"
        ],

        correta: 2
      },

      {
        pergunta:
          "Um produto de R$ 400 recebe desconto de 15%. Qual é o novo preço?",

        alternativas: [
          "R$ 300",
          "R$ 320",
          "R$ 340",
          "R$ 350",
          "R$ 385"
        ],

        correta: 2
      },

      {
        pergunta:
          "Um preço passa de R$ 200 para R$ 250. Qual foi o aumento percentual?",

        alternativas: [
          "10%",
          "20%",
          "25%",
          "40%",
          "50%"
        ],

        correta: 2
      },

      {
        pergunta:
          "R$ 100 recebem aumento de 20% e depois desconto de 20%. O valor final é:",

        alternativas: [
          "R$ 80",
          "R$ 96",
          "R$ 100",
          "R$ 104",
          "R$ 120"
        ],

        correta: 1
      },

      {
        pergunta:
          "Um capital de R$ 2000 aplicado a juros simples de 3% ao mês por 4 meses gera quanto de juros?",

        alternativas: [
          "R$ 60",
          "R$ 120",
          "R$ 180",
          "R$ 240",
          "R$ 320"
        ],

        correta: 3
      }

    ]

  },


  /* =====================================================
     MÓDULO 16
     MATEMÁTICA — EQUAÇÃO DO PRIMEIRO GRAU
     REFORÇO ESPECIAL
  ===================================================== */

  {
    id: 16,
    ordem: 16,
    area: "Matemática",

    titulo:
      "Equação do Primeiro Grau",

    descricao:
      "Domine equações lineares desde os fundamentos até problemas contextualizados, distributiva, frações e incógnitas nos dois membros.",

    dificuldade: "Reforço essencial",
    xp: 220,

    teoria: {

      introducao:
        "Equação do primeiro grau é uma das bases de toda a Álgebra. Não basta decorar a ideia de 'passar para o outro lado trocando o sinal'. O objetivo deste módulo é entender o princípio da igualdade. Uma equação funciona como uma balança: qualquer operação realizada em um membro precisa preservar a equivalência com o outro. Quando esse conceito fica claro, equações com parênteses, frações e incógnitas dos dois lados deixam de parecer regras diferentes.",

      topicos: [

        {
          titulo:
            "1. O que é uma equação?",

          texto:
            "Uma equação é uma igualdade que contém pelo menos uma incógnita. Na equação x + 5 = 12, x representa um valor desconhecido. Resolver a equação significa descobrir qual valor torna a igualdade verdadeira. Nesse caso, x = 7, pois 7 + 5 = 12."
        },

        {
          titulo:
            "2. Incógnita, membros e termos",

          texto:
            "Na expressão 3x + 2 = 17, a letra x é a incógnita. Tudo que aparece antes do sinal de igualdade forma o primeiro membro; o que aparece depois constitui o segundo membro. 3x, 2 e 17 são termos. Reconhecer essa estrutura ajuda a organizar a resolução."
        },

        {
          titulo:
            "3. O princípio da equivalência",

          texto:
            "Se duas expressões são iguais, podemos realizar a mesma operação nos dois lados sem destruir a igualdade. Em x + 5 = 12, subtraímos 5 dos dois membros: x + 5 - 5 = 12 - 5. Assim, x = 7. É daí que vem a famosa ideia de 'passar o 5 subtraindo'. Ela é uma abreviação de uma operação realizada nos dois lados."
        },

        {
          titulo:
            "4. Por que 'trocar o sinal' funciona?",

          texto:
            "Considere x - 8 = 20. Para eliminar o -8, somamos 8 aos dois membros: x - 8 + 8 = 20 + 8. Portanto x = 28. Quando alguém diz que '-8 passou para o outro lado como +8', está resumindo essa operação. Entender o motivo reduz erros de sinal."
        },

        {
          titulo:
            "5. Coeficiente da incógnita",

          texto:
            "Na equação 4x = 28, 4 multiplica x. Para isolar x, dividimos os dois membros por 4: x = 7. Da mesma forma, em x/5 = 3, multiplicamos os dois membros por 5 e encontramos x = 15."
        },

        {
          titulo:
            "6. Exemplo completo: 3x + 5 = 20",

          texto:
            "Primeiro eliminamos o termo independente: 3x + 5 = 20 → 3x = 20 - 5 → 3x = 15. Depois dividimos ambos os lados por 3: x = 5. Verificação: 3 × 5 + 5 = 15 + 5 = 20. Portanto a solução está correta."
        },

        {
          titulo:
            "7. Incógnita nos dois membros",

          texto:
            "Considere 5x + 4 = 2x + 19. Podemos subtrair 2x dos dois membros: 3x + 4 = 19. Depois subtraímos 4: 3x = 15. Finalmente dividimos por 3: x = 5. A estratégia é reunir os termos com x de um lado e os termos numéricos do outro."
        },

        {
          titulo:
            "8. Cuidado com sinais negativos",

          texto:
            "Na equação -2x + 3 = 11, primeiro temos -2x = 8. Dividindo por -2, encontramos x = -4. Verificando: -2 × (-4) + 3 = 8 + 3 = 11. Dois sinais negativos na multiplicação produzem resultado positivo."
        },

        {
          titulo:
            "9. Propriedade distributiva",

          texto:
            "Considere 3(x + 4) = 24. Antes de resolver, aplicamos a distributiva: 3x + 12 = 24. Depois: 3x = 12 e x = 4. O número fora dos parênteses multiplica TODOS os termos dentro deles."
        },

        {
          titulo:
            "10. Distributiva com sinal negativo",

          texto:
            "Em -2(x - 3) = 10, distribuímos -2: -2x + 6 = 10. Depois -2x = 4, portanto x = -2. Um erro comum é multiplicar apenas o primeiro termo ou esquecer que (-2) × (-3) = +6."
        },

        {
          titulo:
            "11. Parênteses dos dois lados",

          texto:
            "Exemplo: 2(x + 3) = 4(x - 1). Aplicando a distributiva: 2x + 6 = 4x - 4. Subtraindo 2x: 6 = 2x - 4. Somando 4: 10 = 2x. Logo x = 5."
        },

        {
          titulo:
            "12. Equações com frações",

          texto:
            "Considere x/3 + 2 = 6. Primeiro isolamos a fração: x/3 = 4. Depois multiplicamos ambos os lados por 3: x = 12. Em expressões com várias frações, uma estratégia útil é multiplicar todos os termos pelo mínimo múltiplo comum dos denominadores."
        },

        {
          titulo:
            "13. Exemplo com denominadores",

          texto:
            "Resolva x/2 + x/3 = 10. O MMC de 2 e 3 é 6. Multiplicando toda a equação por 6: 3x + 2x = 60. Então 5x = 60 e x = 12. Verificação: 12/2 + 12/3 = 6 + 4 = 10."
        },

        {
          titulo:
            "14. Transformando problemas em equações",

          texto:
            "Se um número somado a 9 resulta em 25, podemos representar o número por x e escrever x + 9 = 25. Portanto x = 16. Traduzir o enunciado para linguagem algébrica é uma habilidade tão importante quanto resolver a equação."
        },

        {
          titulo:
            "15. Problema de idade",

          texto:
            "Ana possui 6 anos a mais que Bruno. Juntos têm 30 anos. Se Bruno possui x anos, Ana possui x + 6. Então x + (x + 6) = 30. Temos 2x + 6 = 30, 2x = 24 e x = 12. Bruno tem 12 anos e Ana 18."
        },

        {
          titulo:
            "16. Problema com preço",

          texto:
            "Uma corrida de aplicativo cobra uma taxa fixa de R$ 8 mais R$ 3 por quilômetro. Se uma corrida custou R$ 38, quantos quilômetros foram percorridos? Montamos 8 + 3x = 38. Então 3x = 30 e x = 10 km."
        },

        {
          titulo:
            "17. Solução impossível",

          texto:
            "Algumas equações não possuem solução. Exemplo: 2x + 3 = 2x + 8. Subtraindo 2x dos dois lados, obtemos 3 = 8, uma afirmação falsa. Portanto não existe valor de x que satisfaça essa igualdade."
        },

        {
          titulo:
            "18. Infinitas soluções",

          texto:
            "Outras equações são verdadeiras para qualquer valor de x. Exemplo: 2(x + 3) = 2x + 6. Aplicando a distributiva, obtemos 2x + 6 = 2x + 6. Os dois lados são idênticos, portanto qualquer valor real de x satisfaz a equação."
        },

        {
          titulo:
            "19. Sempre verifique",

          texto:
            "Depois de encontrar x, substitua o valor na equação original. Essa verificação detecta rapidamente erros de sinal e de cálculo. Se os dois membros produzirem o mesmo resultado, a solução está correta."
        },

        {
          titulo:
            "20. Estratégia para não errar",

          texto:
            "Organize uma transformação por linha. Evite fazer várias operações mentalmente ao mesmo tempo. Primeiro elimine parênteses quando necessário, simplifique termos semelhantes, reúna incógnitas de um lado, números do outro e só então divida pelo coeficiente de x."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Resolva: x + 7 = 19.",

        alternativas: [
          "10",
          "11",
          "12",
          "13",
          "26"
        ],

        correta: 2
      },

      {
        pergunta:
          "Resolva: 4x = 36.",

        alternativas: [
          "4",
          "8",
          "9",
          "12",
          "32"
        ],

        correta: 2
      },

      {
        pergunta:
          "Resolva: 3x + 5 = 26.",

        alternativas: [
          "5",
          "6",
          "7",
          "8",
          "9"
        ],

        correta: 2
      },

      {
        pergunta:
          "Resolva: 5x + 2 = 2x + 20.",

        alternativas: [
          "4",
          "5",
          "6",
          "7",
          "8"
        ],

        correta: 2
      },

      {
        pergunta:
          "Resolva: 2(x + 3) = 18.",

        alternativas: [
          "3",
          "6",
          "7",
          "9",
          "12"
        ],

        correta: 1
      },

      {
        pergunta:
          "Resolva: -3x + 6 = 18.",

        alternativas: [
          "-8",
          "-4",
          "4",
          "6",
          "8"
        ],

        correta: 1
      },

      {
        pergunta:
          "Resolva: x/4 + 2 = 7.",

        alternativas: [
          "5",
          "12",
          "16",
          "20",
          "28"
        ],

        correta: 3
      },

      {
        pergunta:
          "Resolva: x/2 + x/3 = 15.",

        alternativas: [
          "12",
          "15",
          "18",
          "24",
          "30"
        ],

        correta: 2
      },

      {
        pergunta:
          "Um número somado ao seu dobro resulta em 36. Qual é esse número?",

        alternativas: [
          "8",
          "10",
          "12",
          "18",
          "24"
        ],

        correta: 2
      },

      {
        pergunta:
          "Uma corrida cobra R$ 10 fixos mais R$ 4 por quilômetro. Se o total foi R$ 50, quantos quilômetros foram percorridos?",

        alternativas: [
          "8",
          "10",
          "12",
          "15",
          "20"
        ],

        correta: 1
      }

    ]

  },


  /* =====================================================
     MÓDULO 17
     MATEMÁTICA — EQUAÇÃO DO SEGUNDO GRAU
     REFORÇO ESPECIAL
  ===================================================== */

  {
    id: 17,
    ordem: 17,
    area: "Matemática",

    titulo:
      "Equação do Segundo Grau",

    descricao:
      "Aprenda equações quadráticas desde a identificação dos coeficientes até Bhaskara, discriminante, fatoração e interpretação das raízes.",

    dificuldade: "Reforço essencial",
    xp: 240,

    teoria: {

      introducao:
        "Uma equação do segundo grau possui uma incógnita elevada ao quadrado como maior potência. Esse conteúdo costuma parecer difícil porque envolve várias etapas, mas todas seguem uma sequência lógica. Neste módulo você aprenderá a reconhecer a equação, identificar a, b e c, calcular o discriminante, aplicar a fórmula de Bhaskara, resolver casos incompletos e interpretar as raízes.",

      topicos: [

        {
          titulo:
            "1. Forma geral",

          texto:
            "A forma geral de uma equação do segundo grau é ax² + bx + c = 0, com a diferente de zero. O termo ax² é quadrático, bx é linear e c é o termo independente."
        },

        {
          titulo:
            "2. Identificando a, b e c",

          texto:
            "Na equação 2x² + 5x - 3 = 0, temos a = 2, b = 5 e c = -3. Os sinais fazem parte dos coeficientes. Em x² - 7x + 10 = 0, temos a = 1, b = -7 e c = 10."
        },

        {
          titulo:
            "3. Quando um termo está ausente",

          texto:
            "Em x² - 9 = 0 não existe termo com x. Portanto b = 0. Em x² + 5x = 0 não existe termo independente, então c = 0. Identificar zeros corretamente é importante para qualquer fórmula."
        },

        {
          titulo:
            "4. Equações completas e incompletas",

          texto:
            "Uma equação completa apresenta a, b e c diferentes de zero. Uma equação incompleta possui b = 0, c = 0 ou ambos. Casos incompletos frequentemente podem ser resolvidos sem Bhaskara."
        },

        {
          titulo:
            "5. Caso x² = número",

          texto:
            "Em x² - 25 = 0, temos x² = 25. Existem dois números reais cujo quadrado é 25: 5 e -5. Portanto x = ±5. Um erro frequente é esquecer a raiz negativa."
        },

        {
          titulo:
            "6. Fator comum",

          texto:
            "Em x² - 6x = 0, colocamos x em evidência: x(x - 6) = 0. Para o produto ser zero, pelo menos um fator precisa ser zero. Assim x = 0 ou x - 6 = 0, resultando em x = 6."
        },

        {
          titulo:
            "7. Fatoração",

          texto:
            "Algumas equações podem ser escritas como produto. Por exemplo, x² - 5x + 6 = 0 pode ser fatorada como (x - 2)(x - 3) = 0. Portanto as raízes são 2 e 3."
        },

        {
          titulo:
            "8. Discriminante",

          texto:
            "O discriminante é representado pela letra grega delta: Δ = b² - 4ac. Ele aparece na fórmula de resolução e também indica quantas raízes reais distintas a equação possui."
        },

        {
          titulo:
            "9. Interpretando Δ",

          texto:
            "Se Δ > 0, existem duas raízes reais diferentes. Se Δ = 0, existe uma raiz real dupla. Se Δ < 0, não existem raízes reais. Em estudos futuros, esse último caso poderá ser tratado com números complexos."
        },

        {
          titulo:
            "10. Fórmula de Bhaskara",

          texto:
            "Depois de calcular Δ, utilizamos x = (-b ± √Δ)/(2a). O símbolo ± indica que realizamos duas operações: uma usando + e outra usando -. Assim podemos encontrar duas raízes."
        },

        {
          titulo:
            "11. Exemplo completo: x² - 5x + 6 = 0",

          texto:
            "Temos a = 1, b = -5 e c = 6. Δ = (-5)² - 4×1×6 = 25 - 24 = 1. Então x = [5 ± √1]/2. Logo x₁ = (5 + 1)/2 = 3 e x₂ = (5 - 1)/2 = 2."
        },

        {
          titulo:
            "12. Atenção ao -b",

          texto:
            "Se b = -5, então -b = -(-5) = +5. Esse é um dos erros mais frequentes. Sempre escreva os coeficientes antes de substituí-los na fórmula."
        },

        {
          titulo:
            "13. Atenção a b²",

          texto:
            "Se b = -4, então b² = (-4)² = 16. Escrever -4² sem parênteses pode causar confusão, pois pela ordem das operações isso pode ser interpretado como -(4²) = -16."
        },

        {
          titulo:
            "14. Exemplo com a diferente de 1",

          texto:
            "Resolva 2x² - 7x + 3 = 0. a = 2, b = -7 e c = 3. Δ = 49 - 24 = 25. x = [7 ± 5]/4. Assim x₁ = 12/4 = 3 e x₂ = 2/4 = 1/2."
        },

        {
          titulo:
            "15. Exemplo com Δ = 0",

          texto:
            "Na equação x² - 6x + 9 = 0, Δ = 36 - 36 = 0. Portanto x = 6/2 = 3. Existe apenas uma raiz real distinta, chamada raiz dupla."
        },

        {
          titulo:
            "16. Exemplo com Δ negativo",

          texto:
            "Em x² + x + 5 = 0, Δ = 1 - 20 = -19. Como o discriminante é negativo, a equação não possui solução no conjunto dos números reais."
        },

        {
          titulo:
            "17. Relação com problemas",

          texto:
            "Equações quadráticas podem aparecer quando duas grandezas desconhecidas são multiplicadas. Em problemas de área, por exemplo, comprimento e largura podem depender de x, produzindo um termo x²."
        },

        {
          titulo:
            "18. Problema de área",

          texto:
            "Um retângulo possui lados x e x + 3 e área 40. Temos x(x + 3) = 40, então x² + 3x - 40 = 0. Fatorando: (x + 8)(x - 5) = 0. As soluções algébricas são -8 e 5, mas comprimento não pode ser negativo. Portanto x = 5."
        },

        {
          titulo:
            "19. Nem toda raiz serve ao problema",

          texto:
            "A equação pode produzir duas soluções matematicamente válidas, mas o contexto pode eliminar alguma delas. Idade, comprimento, quantidade de pessoas e tempo normalmente não admitem determinados valores negativos."
        },

        {
          titulo:
            "20. Sequência segura",

          texto:
            "Organize a equação na forma ax² + bx + c = 0. Identifique a, b e c com os sinais. Veja se existe método simples de fatoração. Caso necessário, calcule Δ, analise seu sinal, substitua na fórmula e finalmente verifique se as raízes fazem sentido no problema."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Na equação 3x² - 8x + 2 = 0, quais são os coeficientes a, b e c?",

        alternativas: [
          "3, 8 e 2",
          "3, -8 e 2",
          "-3, 8 e 2",
          "3, -8 e -2",
          "8, 3 e 2"
        ],

        correta: 1
      },

      {
        pergunta:
          "Quais são as soluções de x² - 16 = 0?",

        alternativas: [
          "Somente 4",
          "Somente -4",
          "4 e -4",
          "8 e -8",
          "16 e -16"
        ],

        correta: 2
      },

      {
        pergunta:
          "Resolva x² - 5x + 6 = 0.",

        alternativas: [
          "1 e 6",
          "2 e 3",
          "-2 e -3",
          "3 e 6",
          "1 e 5"
        ],

        correta: 1
      },

      {
        pergunta:
          "Qual é o valor de Δ em x² - 4x + 4 = 0?",

        alternativas: [
          "-4",
          "0",
          "4",
          "8",
          "16"
        ],

        correta: 1
      },

      {
        pergunta:
          "Quando Δ é negativo, uma equação do segundo grau possui:",

        alternativas: [
          "Duas raízes reais diferentes.",
          "Uma raiz real dupla.",
          "Nenhuma raiz real.",
          "Sempre a raiz zero.",
          "Infinitas raízes reais."
        ],

        correta: 2
      },

      {
        pergunta:
          "Resolva 2x² - 8x = 0.",

        alternativas: [
          "0 e 2",
          "0 e 4",
          "2 e 4",
          "-4 e 4",
          "Somente 4"
        ],

        correta: 1
      },

      {
        pergunta:
          "Resolva x² - 6x + 9 = 0.",

        alternativas: [
          "x = -3",
          "x = 0",
          "x = 3",
          "x = 6",
          "x = 9"
        ],

        correta: 2
      },

      {
        pergunta:
          "Em 2x² - 7x + 3 = 0, as raízes são:",

        alternativas: [
          "1 e 3",
          "1/2 e 3",
          "-1/2 e -3",
          "2 e 3",
          "1/2 e 7"
        ],

        correta: 1
      },

      {
        pergunta:
          "Um retângulo possui lados x e x + 3 e área igual a 40. Qual valor positivo de x satisfaz o problema?",

        alternativas: [
          "4",
          "5",
          "8",
          "10",
          "20"
        ],

        correta: 1
      },

      {
        pergunta:
          "Na expressão x² + 7 = 0, considerando apenas números reais:",

        alternativas: [
          "x = 7",
          "x = -7",
          "x = ±7",
          "Não existe solução real.",
          "x = 0"
        ],

        correta: 3
      }

    ]

  },


  /* =====================================================
     MÓDULO 18
     MATEMÁTICA — TEOREMA DE PITÁGORAS
     REFORÇO ESPECIAL
  ===================================================== */

  {
    id: 18,
    ordem: 18,
    area: "Matemática",

    titulo:
      "Teorema de Pitágoras e Triângulo Retângulo",

    descricao:
      "Domine catetos, hipotenusa e o Teorema de Pitágoras em problemas de diagonal, altura, distância e aplicações geométricas.",

    dificuldade: "Reforço essencial",
    xp: 250,

    teoria: {

      introducao:
        "O Teorema de Pitágoras é uma das relações mais importantes da geometria e aparece com frequência em problemas de distância, altura, diagonal e deslocamento. O ponto central deste módulo é aprender a reconhecer um triângulo retângulo, identificar corretamente catetos e hipotenusa e aplicar a relação matemática com segurança. Mais importante do que decorar a fórmula é entender quando ela pode ser utilizada e como interpretar o resultado no contexto do problema.",

      topicos: [

        {
          titulo:
            "1. O que é um triângulo retângulo?",

          texto:
            "Triângulo retângulo é aquele que possui um ângulo de 90°. Esse ângulo é chamado ângulo reto. A presença do ângulo de 90° é a condição fundamental para aplicar diretamente o Teorema de Pitágoras."
        },

        {
          titulo:
            "2. Catetos",

          texto:
            "Os dois lados que formam o ângulo de 90° são chamados catetos. Dependendo da posição do triângulo, eles podem aparecer na vertical, horizontal ou inclinados. O nome não depende da posição no desenho, mas da relação com o ângulo reto."
        },

        {
          titulo:
            "3. Hipotenusa",

          texto:
            "A hipotenusa é o lado oposto ao ângulo de 90° e é sempre o maior lado do triângulo retângulo. Esse é o critério mais seguro para identificá-la. Mesmo que a figura esteja girada, a hipotenusa continua sendo o lado em frente ao ângulo reto."
        },

        {
          titulo:
            "4. Como identificar os lados corretamente",

          texto:
            "Antes de fazer qualquer conta, localize o ângulo reto. Os lados que encostam nele são os catetos. O lado que não forma o ângulo reto é a hipotenusa. Muitos erros acontecem porque o estudante escolhe a hipotenusa apenas por parecer inclinada ou maior no desenho."
        },

        {
          titulo:
            "5. Teorema de Pitágoras",

          texto:
            "Em todo triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Se os catetos são a e b e a hipotenusa é c, então a² + b² = c²."
        },

        {
          titulo:
            "6. O que significa elevar um lado ao quadrado",

          texto:
            "Elevar um comprimento ao quadrado significa multiplicá-lo por ele mesmo. Se um cateto mede 6, então 6² = 36. Na fórmula de Pitágoras, primeiro calculamos os quadrados dos comprimentos, depois realizamos as operações indicadas."
        },

        {
          titulo:
            "7. Encontrando a hipotenusa",

          texto:
            "Se os catetos medem 3 e 4, temos c² = 3² + 4². Então c² = 9 + 16 = 25. Como c é um comprimento positivo, c = √25 = 5. Portanto a hipotenusa mede 5."
        },

        {
          titulo:
            "8. Encontrando um cateto",

          texto:
            "Se a hipotenusa mede 13 e um cateto mede 5, escrevemos 5² + x² = 13². Assim, 25 + x² = 169. Subtraindo 25 dos dois lados, x² = 144. Logo x = 12. Quando buscamos um cateto, normalmente subtraímos o quadrado do cateto conhecido do quadrado da hipotenusa."
        },

        {
          titulo:
            "9. A raiz quadrada no final",

          texto:
            "Depois de encontrar algo como x² = 81, precisamos calcular x = √81. Como estamos tratando de comprimento, consideramos o valor positivo: x = 9. O resultado negativo não representa comprimento nesse contexto."
        },

        {
          titulo:
            "10. Terno pitagórico 3, 4 e 5",

          texto:
            "O conjunto 3, 4 e 5 aparece com muita frequência porque 3² + 4² = 5². Isso significa 9 + 16 = 25. Qualquer múltiplo desses valores também forma um triângulo retângulo semelhante, como 6, 8 e 10."
        },

        {
          titulo:
            "11. Outros ternos pitagóricos",

          texto:
            "Também são úteis os conjuntos 5, 12 e 13, e 8, 15 e 17. Reconhecer esses padrões pode acelerar questões, mas não substitui o raciocínio. Se não lembrar o trio, basta aplicar o Teorema de Pitágoras normalmente."
        },

        {
          titulo:
            "12. Diagonal de um retângulo",

          texto:
            "A diagonal de um retângulo divide a figura em dois triângulos retângulos. Se um retângulo possui lados 6 e 8, sua diagonal d satisfaz d² = 6² + 8² = 36 + 64 = 100. Portanto d = 10."
        },

        {
          titulo:
            "13. Diagonal de um quadrado",

          texto:
            "Em um quadrado de lado 5, a diagonal forma um triângulo retângulo com catetos iguais a 5. Assim, d² = 5² + 5² = 25 + 25 = 50. Logo d = √50 = 5√2."
        },

        {
          titulo:
            "14. Escada apoiada em uma parede",

          texto:
            "Uma escada de 10 metros apoiada em uma parede forma um triângulo retângulo com o chão e a parede. A escada é a hipotenusa. Se a base está a 6 metros da parede, então h² + 6² = 10². Temos h² = 64, portanto h = 8 metros."
        },

        {
          titulo:
            "15. Distância entre dois pontos",

          texto:
            "Deslocamentos horizontais e verticais podem formar um triângulo retângulo. Se uma pessoa anda 9 metros para leste e depois 12 metros para norte, a distância em linha reta até o ponto inicial é √(9² + 12²) = √225 = 15 metros."
        },

        {
          titulo:
            "16. Problemas com altura",

          texto:
            "Problemas de postes, prédios, árvores e rampas frequentemente criam triângulos retângulos. O segredo é identificar qual segmento representa a altura, qual representa a base e qual representa a hipotenusa."
        },

        {
          titulo:
            "17. Problemas com rampas",

          texto:
            "Uma rampa de 5 metros liga dois níveis separados verticalmente por 3 metros. A rampa é a hipotenusa. Se x é a distância horizontal, então x² + 3² = 5². Logo x² = 16 e x = 4."
        },

        {
          titulo:
            "18. Pitágoras não vale para qualquer triângulo",

          texto:
            "A relação a² + b² = c² só pode ser aplicada diretamente a triângulos retângulos. Em um triângulo sem ângulo de 90°, essa fórmula não pode ser usada dessa forma."
        },

        {
          titulo:
            "19. Verificando se um triângulo é retângulo",

          texto:
            "Também podemos usar a relação ao contrário. Se o quadrado do maior lado for igual à soma dos quadrados dos outros dois, o triângulo é retângulo. Por exemplo, para 7, 24 e 25: 7² + 24² = 49 + 576 = 625 = 25²."
        },

        {
          titulo:
            "20. Cuidado com o maior lado",

          texto:
            "Ao verificar se um triângulo é retângulo, o maior lado deve ocupar o lugar da hipotenusa na comparação. Se os lados são 6, 8 e 10, usamos 6² + 8² e comparamos com 10²."
        },

        {
          titulo:
            "21. Figuras podem não estar em escala",

          texto:
            "Em provas, desenhos geométricos podem ser apenas representações. Não conclua que um lado é maior só porque parece maior. Utilize medidas, símbolos de ângulo e informações do enunciado."
        },

        {
          titulo:
            "22. Estratégia passo a passo",

          texto:
            "1) Identifique o ângulo de 90°. 2) Localize a hipotenusa. 3) Identifique os catetos. 4) Escreva a² + b² = c². 5) Substitua os valores. 6) Resolva a equação. 7) Verifique se o resultado faz sentido no problema."
        },

        {
          titulo:
            "23. Erro comum: confundir hipotenusa com cateto",

          texto:
            "A hipotenusa nunca é um dos lados que formam o ângulo reto. Se você colocar um cateto no lugar da hipotenusa, a equação será montada de maneira incorreta desde o início."
        },

        {
          titulo:
            "24. Erro comum: esquecer a raiz",

          texto:
            "Se a conta termina em c² = 100, a resposta não é 100. Ainda precisamos calcular c = √100 = 10."
        },

        {
          titulo:
            "25. Erro comum: somar lados em vez de quadrados",

          texto:
            "Pitágoras não afirma que a soma dos catetos é igual à hipotenusa. Em um triângulo 3-4-5, 3 + 4 = 7, e não 5. A relação correta envolve quadrados: 3² + 4² = 5²."
        },

        {
          titulo:
            "26. Estratégia para o ENEM",

          texto:
            "Questões do ENEM frequentemente escondem o triângulo retângulo dentro de uma situação real: diagonal de tela, escada, rampa, cabo, distância em mapa, deslocamento ou altura. Antes de calcular, desenhe ou visualize o triângulo formado pelas grandezas."
        }

      ]

    },

    videoaula: {
      titulo: "Videoaula complementar",
      url: ""
    },

    exercicios: [

      {
        pergunta:
          "Em um triângulo retângulo, qual lado é chamado de hipotenusa?",

        alternativas: [
          "Qualquer lado do triângulo.",
          "O menor lado.",
          "O lado oposto ao ângulo de 90°.",
          "Um dos lados que formam o ângulo reto.",
          "Sempre o lado horizontal."
        ],

        correta: 2
      },

      {
        pergunta:
          "Um triângulo retângulo possui catetos medindo 3 e 4. Qual é a hipotenusa?",

        alternativas: [
          "5",
          "6",
          "7",
          "12",
          "25"
        ],

        correta: 0
      },

      {
        pergunta:
          "Um triângulo retângulo possui catetos medindo 6 e 8. Qual é a hipotenusa?",

        alternativas: [
          "9",
          "10",
          "12",
          "14",
          "48"
        ],

        correta: 1
      },

      {
        pergunta:
          "A hipotenusa mede 13 e um dos catetos mede 5. Quanto mede o outro cateto?",

        alternativas: [
          "8",
          "10",
          "12",
          "14",
          "18"
        ],

        correta: 2
      },

      {
        pergunta:
          "Qual conjunto abaixo forma um triângulo retângulo?",

        alternativas: [
          "2, 3 e 4",
          "3, 4 e 5",
          "4, 5 e 6",
          "5, 6 e 7",
          "6, 7 e 8"
        ],

        correta: 1
      },

      {
        pergunta:
          "Um retângulo possui lados 9 e 12. Quanto mede sua diagonal?",

        alternativas: [
          "13",
          "15",
          "18",
          "21",
          "108"
        ],

        correta: 1
      },

      {
        pergunta:
          "Uma escada de 10 m está apoiada em uma parede. Sua base está a 6 m da parede. Qual altura ela alcança?",

        alternativas: [
          "4 m",
          "6 m",
          "8 m",
          "10 m",
          "16 m"
        ],

        correta: 2
      },

      {
        pergunta:
          "Uma pessoa anda 9 m para leste e depois 12 m para norte. Qual é a distância em linha reta entre o ponto inicial e o final?",

        alternativas: [
          "12 m",
          "15 m",
          "18 m",
          "21 m",
          "108 m"
        ],

        correta: 1
      },

      {
        pergunta:
          "Uma rampa possui 5 m de comprimento e alcança uma altura de 3 m. Qual é a distância horizontal entre seu início e o ponto diretamente abaixo de seu final?",

        alternativas: [
          "2 m",
          "3 m",
          "4 m",
          "5 m",
          "8 m"
        ],

        correta: 2
      },

      {
        pergunta:
          "Os lados 7, 24 e 25 formam um triângulo retângulo porque:",

        alternativas: [
          "7 + 24 = 25.",
          "7² + 24² = 25².",
          "7 × 24 = 25².",
          "25 - 24 = 7.",
          "7² + 25² = 24²."
        ],

        correta: 1
      },

      {
        pergunta:
          "Um triângulo possui lados 6, 8 e 11. Ele é retângulo?",

        alternativas: [
          "Sim, porque 6 + 8 > 11.",
          "Sim, porque 6² + 8² = 11².",
          "Não, porque 6² + 8² é diferente de 11².",
          "Não, porque todo triângulo com lados diferentes não é retângulo.",
          "Não é possível verificar."
        ],

        correta: 2
      },

      {
        pergunta:
          "Em um quadrado de lado 5, a diagonal mede:",

        alternativas: [
          "5",
          "10",
          "5√2",
          "25",
          "√5"
        ],

        correta: 2
      }

    ]

  }

];