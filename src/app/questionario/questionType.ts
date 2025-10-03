export interface Answer {
  label: string;
  value: string;
  points: number;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  allowMultiple?: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Qual é a sua formação acadêmica principal?",
    answers: [
      { label: "A) Ensino médio incompleto", value: "A", points: 0 },
      { label: "B) Ensino médio completo", value: "B", points: 1 },
      { label: "C) Ensino técnico", value: "C", points: 2 },
      { label: "D) Graduação completa", value: "D", points: 6 },
      { label: "E) Pós-graduação / MBA", value: "E", points: 8 },
      { label: "F) Mestrado ou Doutorado", value: "F", points: 12 },
    ],
  },
  {
    id: 2,
    question:
      "Especializações/certificações em tecnologia, inovação ou transformação digital",
    answers: [
      { label: "A) Não", value: "A", points: 0 },
      {
        label: "B) Sim, áreas não diretamente ligadas à tecnologia",
        value: "B",
        points: 1,
      },
      {
        label: "C) Sim, certificações básicas e cursos livres",
        value: "C",
        points: 3,
      },
      {
        label:
          "D) Sim, especializações acadêmicas ou MBAs em inovação e tecnologia (lato sensu)",
        value: "D",
        points: 4,
      },
      {
        label:
          "E) Sim, certificações intermediárias corporativas/setoriais (Scrum, ITIL, Agile, LGPD, ESG tech)",
        value: "E",
        points: 5,
      },
      {
        label:
          "F) Sim, certificações avançadas/reconhecidas (IA, Cloud, Ciência de Dados etc.)",
        value: "F",
        points: 10,
      },
    ],
  },
  {
    id: 3,
    question: "Cursos curtos ou workshops em áreas digitais (últimos 3 anos)",
    answers: [
      { label: "A) Não", value: "A", points: 0 },
      {
        label: "B) Sim, apenas palestras ou eventos introdutórios",
        value: "B",
        points: 1,
      },
      { label: "C) Sim, 1 curso ou workshop", value: "C", points: 2 },
      { label: "D) Sim, 2 a 3 cursos ou workshops", value: "D", points: 5 },
      {
        label: "E) Sim, 4 a 5 cursos ou imersões de curta duração",
        value: "E",
        points: 6,
      },
      {
        label: "F) Sim, mais de 3 cursos ou participação contínua",
        value: "F",
        points: 8,
      },
      {
        label:
          "G) Sim, participação em programas estruturados de capacitação corporativa (academias digitais, hubs de inovação)",
        value: "G",
        points: 9,
      },
    ],
  },
  {
    id: 4,
    question: "Participação em projetos de transformação digital/inovação",
    answers: [
      { label: "A) Não, e não tenho interesse", value: "A", points: 0 },
      { label: "B) Não, mas tenho interesse", value: "B", points: 2 },
      { label: "C) Sim, como colaborador indireto", value: "C", points: 4 },
      {
        label: "D) Sim, participação direta na execução",
        value: "D",
        points: 8,
      },
    ],
  },
  {
    id: 5,
    question:
      "Ferramentas ou plataformas digitais utilizadas com frequência (pode marcar mais de uma opção)",
    allowMultiple: true,
    answers: [
      {
        label:
          "A) Plataformas internas corporativas (cadastro, intranet, portais internos de serviços)",
        value: "A",
        points: 2,
      },
      {
        label:
          "B) ERP (Enterprise Resource Planning) (SAP, TOTVS, Oracle, sistemas de gestão integrados)",
        value: "B",
        points: 2,
      },
      {
        label:
          "C) CRM (Customer Relationship Management) (Salesforce, Dynamics, HubSpot)",
        value: "C",
        points: 2,
      },
      {
        label:
          "D) Plataformas de colaboração (Microsoft Teams, Slack, Google Workspace)",
        value: "D",
        points: 2,
      },
      {
        label:
          "E) Ferramentas de IA generativa (ChatGPT, Copilot, Gemini, Claude)",
        value: "E",
        points: 5,
      },
      {
        label:
          "F) Ferramentas de análise de dados e BI (Power BI, Tableau, Qlik, Looker)",
        value: "F",
        points: 3,
      },
      {
        label: "G) Plataformas de RH (ADP, Sólides, Gupy, Workday)",
        value: "G",
        points: 2,
      },
      {
        label:
          "H) Plataformas financeiras e de compliance (SAP FI/CO, Sênior, Protheus, Thomson Reuters)",
        value: "H",
        points: 2,
      },
      {
        label:
          "I) Plataformas de supply chain / logística (Infor, Manhattan, SAP SCM)",
        value: "I",
        points: 2,
      },
      {
        label:
          "J) Plataformas de atendimento e suporte (Zendesk, Freshdesk, ServiceNow, Chatbot)",
        value: "J",
        points: 2,
      },
      {
        label:
          "K) Ferramentas de gestão de projetos e produtividade (Jira, Trello, Asana, Monday)",
        value: "K",
        points: 2,
      },
      {
        label:
          "L) Plataformas jurídicas e de contratos (Legal One, Linte, Kurier)",
        value: "L",
        points: 2,
      },
      { label: "M) Outras relevantes", value: "M", points: 2 },
    ],
  },
  {
    id: 6,
    question: "Familiaridade com dados e analytics",
    answers: [
      { label: "A) Nenhum conhecimento", value: "A", points: 0 },
      {
        label: "B) Básico: interpreta relatórios prontos",
        value: "B",
        points: 2,
      },
      {
        label:
          "C) Inicial: consegue extrair dados de planilhas ou sistemas e gerar análises simples",
        value: "C",
        points: 3,
      },
      { label: "D) Intermediário: cria relatórios", value: "D", points: 4 },
      {
        label:
          "E) Pré-avançado: combina múltiplas fontes, utiliza fórmulas, filtros e ferramentas de BI de forma recorrente",
        value: "E",
        points: 6,
      },
      {
        label: "F) Avançado: desenvolve análises complexas/dashboards",
        value: "F",
        points: 8,
      },
    ],
  },
  {
    id: 7,
    question:
      "Experiência com metodologias ágeis (Scrum, Kanban) ou gestão de produtos digitais",
    answers: [
      { label: "A) Não, e não tenho interesse", value: "A", points: 0 },
      { label: "B) Não, mas tenho interesse", value: "B", points: 1 },
      {
        label: "C) Sim, tenho algum conhecimento teórico",
        value: "C",
        points: 2,
      },
      {
        label:
          "D) Sim, participação em times ágeis ou em rituais (daily, planning, review, retrospectiva)",
        value: "D",
        points: 3,
      },
      {
        label:
          "E) Sim, atuação recorrente em projetos com papéis definidos (PO, PM, Scrum Master, Agile Coach)",
        value: "E",
        points: 4,
      },
      {
        label: "F) Sim, experiência prática consolidada",
        value: "F",
        points: 5,
      },
    ],
  },
  {
    id: 8,
    question: "Uso de linguagens de programação",
    answers: [
      { label: "A) Não", value: "A", points: 0 },
      {
        label:
          "B) Contato inicial: já viu código ou acompanhou uso, mas nunca programou",
        value: "B",
        points: 1,
      },
      {
        label:
          "C) Experimentação inicial: já copiou/rodou códigos prontos ou já fez exercícios simples",
        value: "C",
        points: 2,
      },
      { label: "D) Sim, nível básico", value: "D", points: 4 },
      { label: "E) Sim, nível intermediário", value: "E", points: 6 },
      { label: "F) Sim, nível avançado", value: "F", points: 10 },
    ],
  },
  {
    id: 9,
    question:
      "Se sim, marque as linguagens que você tem conhecimento (pode marcar mais de uma)",
    allowMultiple: true,
    answers: [
      { label: "A) Nenhuma", value: "A", points: 0 },
      { label: "B) Python", value: "B", points: 2 },
      { label: "C) JavaScript", value: "C", points: 2 },
      { label: "D) Java", value: "D", points: 2 },
      { label: "E) C#", value: "E", points: 2 },
      { label: "F) C/C++", value: "F", points: 2 },
      { label: "G) Linguagem R", value: "G", points: 2 },
      { label: "H) PHP", value: "H", points: 2 },
      { label: "I) SQL", value: "I", points: 2 },
      { label: "J) Go", value: "J", points: 2 },
      { label: "K) TypeScript", value: "K", points: 2 },
      { label: "L) HTML/CSS", value: "L", points: 2 },
      { label: "M) Outra", value: "M", points: 2 },
    ],
  },
  {
    id: 10,
    question: "Frequência de atualização sobre tendências digitais",
    answers: [
      { label: "A) Nunca", value: "A", points: 0 },
      {
        label: "B) Apenas quando compartilhado por colegas ou empresa",
        value: "B",
        points: 1,
      },
      { label: "C) Raramente", value: "C", points: 2 },
      { label: "D) Ocasionalmente (mensal)", value: "D", points: 3 },
      { label: "E) Regularmente (semanal)", value: "E", points: 6 },
      {
        label: "F) Com frequência alta (várias vezes na semana)",
        value: "F",
        points: 8,
      },
      {
        label: "G) De forma intensiva (diária ou parte da rotina profissional)",
        value: "G",
        points: 10,
      },
    ],
  },
  {
    id: 11,
    question: "Abertura para mudanças de processo com novas tecnologias",
    answers: [
      {
        label: "A) Resistente: evita ou se opõe a mudanças",
        value: "A",
        points: 0,
      },
      {
        label: "B) Prefiro manter processos existentes",
        value: "B",
        points: 1,
      },
      {
        label:
          "C) Neutro(a): aceita mudanças quando necessário, mas não busca nem incentiva ativamente",
        value: "C",
        points: 2,
      },
      {
        label:
          "D) Parcialmente flexível: demonstra interesse em testar, mas ainda com cautela",
        value: "D",
        points: 3,
      },
      {
        label:
          "E) Totalmente flexível: receptivo(a) e engajado(a) em adotar novas tecnologias",
        value: "E",
        points: 6,
      },
      {
        label:
          "F) Proativo(a): sugere, apoia e promove mudanças de processos com tecnologia",
        value: "F",
        points: 8,
      },
    ],
  },
  {
    id: 12,
    question: "Principal motivação para aprender novas ferramentas",
    answers: [
      { label: "A) Exigência da empresa", value: "A", points: 1 },
      {
        label:
          "B) Necessidade de negócio imediato (resolver problemas ou metas de curto prazo)",
        value: "B",
        points: 4,
      },
      { label: "C) Interesse pessoal e curiosidade", value: "C", points: 6 },
      {
        label: "D) Busca de crescimento de carreira e oportunidades futuras",
        value: "D",
        points: 8,
      },
      {
        label: "E) Desejo de liderar iniciativas de inovação na organização",
        value: "E",
        points: 10,
      },
    ],
  },
  {
    id: 13,
    question:
      "Áreas de negócio que mais se beneficiariam da transformação digital (pode marcar mais de uma)",
    allowMultiple: true,
    answers: [
      { label: "A) Operações", value: "A", points: 3 },
      { label: "B) Vendas e Marketing", value: "B", points: 3 },
      { label: "C) Recursos Humanos", value: "C", points: 3 },
      { label: "D) Finanças", value: "D", points: 3 },
      { label: "E) Atendimento ao Cliente", value: "E", points: 3 },
      { label: "F) P&D / Inovação", value: "F", points: 3 },
      {
        label: "G) Suprimentos / Cadeia de Suprimentos",
        value: "G",
        points: 3,
      },
      { label: "H) Jurídico & Compliance", value: "H", points: 3 },
      { label: "I) TI & Infraestrutura", value: "I", points: 3 },
      { label: "J) Serviços / Pós-venda", value: "J", points: 3 },
      { label: "K) Projetos e dados", value: "K", points: 3 },
      { label: "L) Consultoria", value: "L", points: 3 },
      {
        label:
          "M) Comunicação Corporativa / Branding / Relações Institucionais",
        value: "M",
        points: 3,
      },
      { label: "N) Gestão de Produtos e Portfólio", value: "N", points: 3 },
      {
        label: "O) Auditoria, Controle e Gestão de Riscos",
        value: "O",
        points: 3,
      },
      { label: "P) Logística e Distribuição", value: "P", points: 3 },
      { label: "Q) Outro", value: "Q", points: 3 },
    ],
  },
  {
    id: 14,
    question:
      "Iniciativas de capacitação ou suporte que a empresa deveria priorizar",
    answers: [
      { label: "A) Capacitação em IA e automação", value: "A", points: 5 },
      {
        label: "B) Treinamentos em ferramentas colaborativas e produtividade",
        value: "B",
        points: 3,
      },
      {
        label: "C) Formação em análise de dados e visualização",
        value: "C",
        points: 5,
      },
      {
        label: "D) Programas de mudança cultural e gestão de equipes digitais",
        value: "D",
        points: 4,
      },
      {
        label: "E) Capacitação em cibersegurança e privacidade de dados",
        value: "E",
        points: 4,
      },
      {
        label:
          "F) Treinamento em metodologias ágeis e gestão de produtos digitais",
        value: "F",
        points: 4,
      },
    ],
  },
  {
    id: 15,
    question: "Principal prioridade estratégica da empresa nos próximos 2 anos",
    answers: [
      {
        label:
          "A) Automatizar processos internos e reduzir custos operacionais",
        value: "A",
        points: 3,
      },
      {
        label: "B) Melhorar a experiência do cliente em canais digitais",
        value: "B",
        points: 4,
      },
      {
        label:
          "C) Criar novos produtos/serviços baseados em tecnologias digitais",
        value: "C",
        points: 5,
      },
      {
        label:
          "D) Fortalecer a governança de dados, cibersegurança e conformidade regulatória",
        value: "D",
        points: 4,
      },
      {
        label: "E) Desenvolver novas competências e requalificar equipes",
        value: "E",
        points: 5,
      },
    ],
  },
  {
    id: 16,
    question: "Maior obstáculo para a transformação digital da empresa",
    answers: [
      {
        label: "A) Resistência cultural e medo da mudança",
        value: "A",
        points: 5,
      },
      {
        label: "B) Falta de liderança com visão digital",
        value: "B",
        points: 5,
      },
      {
        label: "C) Carência de profissionais capacitados em novas tecnologias",
        value: "C",
        points: 4,
      },
      {
        label: "D) Limitações de infraestrutura tecnológica",
        value: "D",
        points: 3,
      },
      {
        label: "E) Falta de investimento ou orçamento dedicado",
        value: "E",
        points: 3,
      },
    ],
  },
];
