import {
  ChartColumnIncreasingIcon,
  FlameIcon,
  TargetIcon,
  ZapIcon,
} from "lucide-react";

export type ResultData = {
  icon: React.ReactNode;
  level: string;
  diagnosis: string[];
};

export function useResult(totalScoreStr?: string): ResultData | null {
  if (!totalScoreStr) return null;
  const score = parseInt(totalScoreStr, 10);

  if (score >= 121) {
    return {
      icon: <FlameIcon className="w-16 h-16 text-foreground" />,
      level: "Líder Transformador",
      diagnosis: [
        "Perfil altamente digital e estratégico.",
        "Lidera iniciativas de inovação, promove mudanças organizacionais e influencia a cultura da empresa.",
        "Mantém atualização constante e serve de referência em transformação digital.",
      ],
    };
  } else if (score >= 71) {
    return {
      icon: <ZapIcon className="w-16 h-16 text-foreground" />,
      level: "Especialista Digital",
      diagnosis: [
        "Experiência sólida em dados, analytics e metodologias ágeis.",
        "Atua proativamente em projetos de inovação e transformação.",
        "Possui certificações intermediárias ou avançadas e forte domínio de ferramentas corporativas.",
      ],
    };
  } else if (score >= 21) {
    return {
      icon: <ChartColumnIncreasingIcon className="w-16 h-16 text-foreground" />,
      level: "Construtor em Transição",
      diagnosis: [
        "Possui algumas certificações, participação em workshops e uso pontual de ferramentas digitais.",
        "Começa a aplicar conceitos no dia a dia e demonstra interesse em inovação.",
        "Já interpreta relatórios e participa de times ou iniciativas ágeis.",
      ],
    };
  } else {
    return {
      icon: <TargetIcon className="w-16 h-16 text-foreground" />,
      level: "Explorador Digital",
      diagnosis: [
        "Perfil inicial, com pouca experiência em ferramentas ou projetos digitais.",
        "Geralmente acompanha tendências apenas quando exposto por terceiros.",
        "Precisa de capacitação básica para iniciar sua jornada digital.",
      ],
    };
  }
}
