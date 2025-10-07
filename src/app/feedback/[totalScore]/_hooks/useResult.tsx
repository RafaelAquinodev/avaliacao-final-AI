import {
  ChartColumnIncreasingIcon,
  FlameIcon,
  TargetIcon,
  ZapIcon,
} from "lucide-react";

export type ResultData = {
  recomendation?: string[];
  icon: React.ReactNode;
  level: string;
  diagnosis: string[];
};

export function useResult(totalScoreStr?: string): ResultData | null {
  if (!totalScoreStr) return null;
  const score = parseInt(totalScoreStr, 10);
  if (score >= 8 && score <= 10) {
    return {
      icon: <FlameIcon className="w-16 h-16 text-foreground" />,
      level: "Grupo 4 – Líder Transformador",
      diagnosis: [
        "Você domina conceitos-chave e pode orientar equipes.",
        "Conecte fundamentos técnicos com estratégia de negócio.",
        "Aprofunde discussões sobre ética, vieses e impacto social da IA.",
        "Mantenha-se atualizado em tendências e novas ferramentas.",
        "Use sua posição para impulsionar inovação com responsabilidade.",
      ],
    };
  } else if (score >= 6 && score <= 7) {
    return {
      icon: <ZapIcon className="w-16 h-16 text-foreground" />,
      level: "Grupo 3 – Analista em Transição",
      diagnosis: [
        "Você já tem boa compreensão dos conceitos principais.",
        "Comece a aplicar IA em casos reais de negócios.",
        "Aprofunde-se em modelos fundacionais e aprendizado contínuo.",
        "Desenvolva visão crítica sobre dados e impactos sociais.",
        "Invista em certificações técnicas para consolidar sua jornada.",
      ],
    };
  } else if (score >= 4 && score <= 5) {
    return {
      icon: <ChartColumnIncreasingIcon className="w-16 h-16 text-foreground" />,
      level: "Grupo 2 – Explorador Digital",
      diagnosis: [
        "Você já entende conceitos centrais de IA.",
        "Reforce temas de dados estruturados e fundamentos estatísticos.",
        "Busque aplicar conhecimentos em exercícios simples ou simulações.",
        "Participe de hackathons ou workshops práticos.",
        "Transforme sua curiosidade em experiência concreta para acelerar sua evolução.",
      ],
    };
  } else if (score >= 0 && score <= 3) {
    return {
      icon: <TargetIcon className="w-16 h-16 text-foreground" />,
      level: "Grupo 1 – Iniciante em IA",
      diagnosis: [
        "Foque nos fundamentos: estatística, probabilidade e conceitos básicos.",
        "Explore conteúdos introdutórios sobre IA preditiva e generativa.",
        "Participe de cursos rápidos para criar repertório inicial.",
        "Observe exemplos práticos em seu setor.",
        "Lembre-se: compreender o básico é o primeiro passo para evoluir.",
      ],
    };
  } else {
    return null;
  }
}
