interface ResultHeaderProps {
  icon: React.ReactNode;
  totalScore: string;
  level: string;
}

export function ResultHeader({ icon, totalScore, level }: ResultHeaderProps) {
  const score = Math.max(0, Math.min(10, parseInt(totalScore, 10) || 0));
  const percent = Math.round((score / 10) * 100);

  return (
    <div className="mb-8">
      <div className="flex justify-center mb-6">{icon}</div>
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Sua Pontuação: {score}/10 {`(${percent}%)`}
      </h1>
      <h2 className="text-2xl font-semibold text-accent mb-6">{level}</h2>
    </div>
  );
}
