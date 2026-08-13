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

}

];