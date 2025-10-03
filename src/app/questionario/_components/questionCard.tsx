import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Question } from "../questionType";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface QuestionCardProps {
  index: number;
  question: Question;
  value: string | string[];
  onChange: (index: number, value: string | string[]) => void;
}

export function QuestionCard({
  index,
  question,
  value,
  onChange,
}: QuestionCardProps) {
  const handleSelectChange = (selectedValue: string) => {
    onChange(index, selectedValue);
  };

  const handleCheckboxChange = (answerValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    let newValues: string[];

    if (checked) {
      newValues = [...currentValues, answerValue];
    } else {
      newValues = currentValues.filter((value) => value !== answerValue);
    }

    onChange(index, newValues);
  };

  return (
    <Card id={`${question.id}`} className="px-0">
      <CardHeader>
        <CardTitle className="text-lg">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        {question.allowMultiple ? (
          <div className="space-y-3">
            {question.answers.map((answer) => (
              <div key={answer.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${answer.value}`}
                  checked={Array.isArray(value) && value.includes(answer.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(answer.value, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`${question.id}-${answer.value}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {answer.label}
                </Label>
              </div>
            ))}
          </div>
        ) : (
          <Select
            value={typeof value === "string" ? value : ""}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="w-full max-w-[calc(100vw-5rem)] break-words text-sm leading-relaxed">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              {question.answers.map((answer) => (
                <SelectItem
                  key={answer.value}
                  value={answer.value}
                  className="break-words text-sm leading-relaxed max-w-[calc(100vw-2rem)]"
                >
                  {answer.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </CardContent>
    </Card>
  );
}
