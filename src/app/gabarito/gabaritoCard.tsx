import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface GabaritoCardProps {
  id: number;
  question: string;
  correctAnswer: string;
}

export function GabaritoCard({
  id,
  question,
  correctAnswer,
}: GabaritoCardProps) {
  return (
    <Card
      id={`gabarito-${id}`}
      className="
        w-full
        max-w-xl
        mx-auto
        px-0
        shadow-md
        border border-gray-200
      "
    >
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-lg text-center">
          <span className="font-bold text-primary">{id}.</span> {question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div
          className="
            mt-2
            p-4
            rounded-md
            bg-[#e1fbe1]
            text-green-800
            text-sm
            font-bold
            text-center
            whitespace-pre-line
            w-full
          "
        >
          Resposta correta:
          <br />
          <span className="text-base">{correctAnswer}</span>
        </div>
      </CardContent>
    </Card>
  );
}
