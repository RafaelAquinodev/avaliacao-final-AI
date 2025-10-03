interface ResultDiagnosisProps {
  diagnosis: string[];
  recomendation?: string[];
}

export function ResultDiagnosis({ diagnosis }: ResultDiagnosisProps) {
  return (
    <div>
      <div className="text-left leading-relaxed text-pretty">
        <ul className="list-disc list-outside p-4 space-y-2">
          {diagnosis.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
