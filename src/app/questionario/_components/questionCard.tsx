import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  // SelectValue, // Não usado mais, pois customizamos o valor;
} from "@/components/ui/select";
import { Question } from "../questionType";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface QuestionCardProps {
  index: number;
  question: Question;
  value: string;
  onChange: (index: number, value: string) => void;
}

export function QuestionCard({
  index,
  question,
  value,
  onChange,
}: QuestionCardProps) {
  const alreadyAnswered = typeof value === "string" && value !== "";

  function truncate(str: string, max: number) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max) + "..." : str;
  }

  const handleSelectChange = (selectedValue: string) => {
    if (alreadyAnswered) return;
    onChange(index, selectedValue);
  };

  let isCorrect = false;
  let isIncorrect = false;
  if (alreadyAnswered) {
    const answer = question.answers.find((ans) => ans.value === value);
    if (answer?.correct) isCorrect = true;
    else if (value) isIncorrect = true;
  }
  const triggerBorderColor = isCorrect
    ? "border-green-500"
    : isIncorrect
    ? "border-red-500"
    : "";

  const selectedOptionLabel =
    value && question.answers.find((a) => a.value === value)?.label;
  const truncatedOptionLabel = selectedOptionLabel
    ? truncate(selectedOptionLabel, 55)
    : "";

  return (
    <Card id={`${question.id}`} className="px-0">
      <CardHeader>
        <CardTitle className="text-lg">
          <span className="font-bold text-primary">{question.id}.</span>{" "}
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={typeof value === "string" ? value : ""}
          onValueChange={handleSelectChange}
          disabled={alreadyAnswered}
        >
          <SelectTrigger
            className={`
              w-full 
              max-w-[calc(100vw-5rem)] 
              break-words 
              text-sm 
              leading-relaxed 
              border 
              text-left
              ${triggerBorderColor}
              transition-colors
              truncate 
              whitespace-nowrap 
              overflow-hidden
              px-3
            `}
            style={{
              height: 40,
              minHeight: 40,
              maxHeight: 40,
              paddingRight: 36,
              paddingLeft: 12,
              boxSizing: "border-box",
              lineHeight: "40px",
              display: "block",
              textAlign: "left",
            }}
            disabled={alreadyAnswered}
          >
            <span
              className="truncate w-full block text-left"
              title={selectedOptionLabel || "Selecione uma opção"}
            >
              {truncatedOptionLabel || (
                <span className="text-gray-400 text-left">
                  Selecione uma opção
                </span>
              )}
            </span>
          </SelectTrigger>
          <SelectContent>
            {question.answers.map((answer) => (
              <SelectItem
                key={answer.value}
                value={answer.value}
                className="
                  break-words
                  text-sm
                  leading-relaxed
                  max-w-[calc(100vw-2rem)]
                  md:max-w-2xl
                  whitespace-pre-line
                  text-left
                "
              >
                {answer.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {alreadyAnswered && (
          <div
            className={`mt-2 text-xs ${
              isCorrect ? "text-green-700" : "text-red-700"
            } text-left`}
          >
            {isCorrect ? "Resposta Correta." : "Resposta Incorreta."}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
