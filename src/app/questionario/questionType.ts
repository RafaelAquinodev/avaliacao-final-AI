export interface Answer {
  label: string;
  value: string;
  correct: boolean; // Novo campo indicando se a resposta é a correta
}
export interface Question {
  id: number;
  number: number;
  question: string;
  answers: Answer[];
}
export const baseQuestions: Omit<Question, "number">[] = [
  {
    id: 1,
    question: "Qual é o principal objetivo da IA preditiva?",
    answers: [
      {
        label: "A) Criar novos conteúdosem diferentes formatos",
        value: "A",
        correct: false,
      },
      {
        label: "B) Prever resultados futuros a partir de dados históricos",
        value: "B",
        correct: true,
      },
      {
        label: "C) Gerar música e imagens originais",
        value: "C",
        correct: false,
      },
      {
        label: "D) Executar tarefas administrativas",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "A IA generativa foca em:",
    answers: [
      {
        label: "A) Prever vendas com base em dados passados",
        value: "A",
        correct: false,
      },
      {
        label: "B) Classificar dados estruturados",
        value: "B",
        correct: false,
      },
      {
        label: "C) Criar novos dados similares aos de treinamento",
        value: "C",
        correct: true,
      },
      {
        label: "D) Extrair estatísticas de grandes bases",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Quais tipos de dados a IA preditiva utiliza principalmente?",
    answers: [
      {
        label: "A) Não estruturados, como imagens e textos",
        value: "A",
        correct: false,
      },
      {
        label: "B) Estruturados, como tabelas e registros numéricos",
        value: "B",
        correct: true,
      },
      {
        label: "C) Dados de redes neurais convolucionais",
        value: "C",
        correct: false,
      },
      { label: "D) Dados gerados por GANs", value: "D", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "O atual “hype” da Inteligência Artificial é resultado de uma “tempestade perfeita” formada por:",
    answers: [
      {
        label:
          "A) Popularização de dispositivos móveis,\n marketing digital e redes sociais",
        value: "A",
        correct: false,
      },
      {
        label: "B) Crescimento do e-commerce, blockchain e internet das coisas",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Modelos de IA cada vez mais sofisticados,\ninfraestrutura de processamento e nuvem de grande capacidade,\ne riqueza e diversidade de dados acessíveis",
        value: "C",
        correct: true,
      },
      {
        label:
          "D) Avanços em hardware quântico, biotecnologia e realidade aumentada",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Os modelos fundacionais são grandes modelos de IA treinados em enormes volumes de dados.\nPor que eles representam um marco importante para a evolução da IA?",
    answers: [
      {
        label:
          "A) Porque são algoritmos simples usados apenas para tarefas\n específicas e estáticas",
        value: "A",
        correct: false,
      },
      {
        label:
          "B) Porque dispensam qualquer tipo de treinamento prévio\ne funcionam apenas com regras fixas",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Porque são limitados a processamento de imagens\n e não se aplicam a texto ou áudio",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) Porque servem como base treinada\nem grandes volumes de dados, permitindo adaptar\n e reutilizar o mesmo modelo\nem diversas aplicações e contextos de negócio",
        value: "D",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question:
      "Estatística, probabilidade e cálculo formam o alicerce teórico da IA.\nComo esses conhecimentos influenciam a forma como a IA “compreende” e representa o mundo real?",
    answers: [
      {
        label:
          "A) Tornam possível traduzir fenômenos complexos\nem representações numéricas, permitindo que a IA reconheça padrões\ne tome decisões com base em dados",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) Garantem que todos os modelos de IA sejam sempre imparciais\n e sem vieses",
        value: "B",
        correct: false,
      },
      {
        label: "C) Eliminam a necessidade de criar algoritmos de aprendizado",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) Servem apenas para acelerar a criação de interfaces visuais atrativas",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "Considerando que a IA depende de dados para aprender,\nqual é a maior implicação de nossa capacidade de medir fenômenos do mundo real?",
    answers: [
      {
        label:
          "A) Quanto mais conseguimos quantificar e estruturar dados\n do mundo real, maior é o potencial da IA para aprender\n padrões complexos,apoiar decisões e gerar soluções\n que impactam a sociedade",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) A mensuração garante que todos os dados sejam\n sempre exatos e livres de vieses",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Medir fenômenos do mundo real elimina a necessidade\n de criar algoritmos complexos",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) A coleta de dados é um processo puramente técnico\n, sem qualquer influência ética ou social",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "A educação formal continua importante, mas vem perdendo espaço para cursos rápidos, tutoriais e hackathons.\nQual é o maior desafio que isso impõe a profissionais e organizações?",
    answers: [
      {
        label:
          "A) Manter a educação formal como base,\nmas adotar estratégias de aprendizado contínuo e ágil —\ncom requalificação constante e microaprendizagens —\npara acompanhar a velocidade da transformação tecnológica",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) Abandonar completamente a educação formal, pois cursos\n rápidos substituem qualquer formação tradicional",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Manter o modelo educacional atual sem adaptações,\n já que garante profundidade suficiente",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) Reconhecer que nenhum tipo de educação\n consegue acompanhar a tecnologia",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Com o aumento da expectativa de vida e o prolongamento da vida profissional,\no que se torna cada vez mais necessário nas carreiras?",
    answers: [
      {
        label:
          "A) Encará-las como um processo contínuo de reinvenção,\ninvestindo em requalificação, novas habilidades e flexibilidade\n para transitar entre áreas ao longo dos anos",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) Permanecer em um único cargo por toda a vida,\n garantindo estabilidade sem novos aprendizados",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Reduzir a importância do aprendizado contínuo,\n já que carreiras longas exigem menos atualização",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) Evitar mudanças de área, pois elas diminuem oportunidades de trabalho",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Por que a IA pode ser comparada a uma “inteligência sintética”?",
    answers: [
      {
        label:
          "A) Porque executa apenas cálculos matemáticos complexos\nsem aprender com dados",
        value: "A",
        correct: false,
      },
      {
        label: "B) Porque imita perfeitamente todas as capacidades humanas",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Porque busca reproduzir habilidades humanas\n — como aprender, raciocinar, interpretar dados\n e tomar decisões — auxiliando em diferentes áreas\n do cotidiano, dos negócios e de campos especializados",
        value: "C",
        correct: true,
      },
      {
        label:
          "D) Porque é um conjunto de regras fixas que não exige treinamento",
        value: "D",
        correct: false,
      },
    ],
  },
];

export const questions: Question[] = baseQuestions.map((questionNumber) => ({
  ...questionNumber,
  number: questionNumber.id,
}));
