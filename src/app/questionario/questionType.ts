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
        label: "A) Criar novos conteúdos em diferentes formatos",
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
          "A) Popularização de dispositivos móveis, marketing digital e redes sociais",
        value: "A",
        correct: false,
      },
      {
        label:
          "B) Crescimento do e-commerce, blockchain  e internet das coisas",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Modelos de IA sofisticados, infraestrutura de processamento em nuvem  e riqueza e diversidade de dados acessíveis",
        value: "C",
        correct: true,
      },
      {
        label:
          "D) Avanços em hardware quântico, biotecnologia  e realidade aumentada",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Os modelos fundacionais são grandes modelos de IA treinados em enormes volumes de dados.Por que eles representam um marco importante para a evolução da IA?",
    answers: [
      {
        label:
          "A) São algoritmos simples usados apenas  para tarefas específicas e estáticas",
        value: "A",
        correct: false,
      },
      {
        label:
          "B) Dispensam qualquer tipo de treinamento prévio e funcionam com regras fixas",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) São limitados a processamento de imagens  e não se aplicam a texto ou áudio",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) Servem como base treinada em grandes volumes de dados, permitindo adaptar e reutilizar o mesmo modelo em diferentes contextos",
        value: "D",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question:
      "Estatística, probabilidade e cálculo formam o alicerce teórico da IA.Como esses conhecimentos influenciam a forma como a IA “compreende” e representa o mundo real?",
    answers: [
      {
        label:
          "A) Tornam possível traduzir fenômenos complexos  em representações numéricas, permitindo à IA reconhecer padrões e tomar decisões com base em dados",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) Garantem que os modelos de IA sejam sempre imparciais  e sem vieses",
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
      "Considerando que a IA depende de dados para aprender,qual é a maior implicação de nossa capacidade de medir fenômenos do mundo real?",
    answers: [
      {
        label:
          "A) Quanto mais conseguimos quantificar e estruturar dados do mundo real,  maior é o potencial da IA para aprender padrões complexos,  apoiar decisões e gerar soluções de impacto social",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) A mensuração garante que todos os dados sejam sempre exatos  e livres de vieses",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Medir fenômenos do mundo real elimina a necessidade  de criar algoritmos complexos",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) A coleta de dados é um processo puramente técnico,  sem qualquer influência ética ou social",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "A educação formal continua importante, mas vem perdendo espaço para cursos rápidos, tutoriais e hackathons.Qual é o maior desafio que isso impõe a profissionais e organizações?",
    answers: [
      {
        label:
          "A) Manter a educação formal como base, mas adotar estratégias de aprendizado contínuo e ágil —  com requalificação constante e microaprendizagens — para acompanhar a transformação tecnológica",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) Abandonar completamente a educação formal,  pois cursos rápidos substituem qualquer formação tradicional",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Manter o modelo educacional atual sem adaptações,  já que garante profundidade suficiente",
        value: "C",
        correct: false,
      },
      {
        label:
          "D) Reconhecer que nenhum tipo de educação consegue acompanhar a tecnologia",
        value: "D",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Com o aumento da expectativa de vida e o prolongamento da vida profissional, o que se torna cada vez mais necessário nas carreiras?",
    answers: [
      {
        label:
          "A) Encará-las como um processo contínuo de reinvenção,  investindo em requalificação, novas habilidades e flexibilidade  para transitar entre áreas ao longo do tempo",
        value: "A",
        correct: true,
      },
      {
        label:
          "B) Permanecer em um único cargo por toda a vida,  garantindo estabilidade sem novos aprendizados",
        value: "B",
        correct: false,
      },
      {
        label:
          "C) Reduzir a importância do aprendizado contínuo,  já que carreiras longas exigem menos atualização",
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
          "A) Porque executa apenas cálculos matemáticos complexos  sem aprender com dados",
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
          "C) Porque busca reproduzir habilidades humanas —  como aprender, raciocinar, interpretar dados  e tomar decisões — auxiliando em áreas do cotidiano e dos negócios",
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
