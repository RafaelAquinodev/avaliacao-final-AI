import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Question } from "../questionType";

export interface FormData {
  company: string;
}

export function useQuestionnaire(questions: Question[]) {
  const [formData, setFormData] = useState<FormData>({ company: "" });
  const [answers, setAnswers] = useState<(string | string[])[]>(
    new Array(questions.length).fill("")
  );
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const calculateAnsweredCount = () => {
    return answers.filter((answer) => {
      if (Array.isArray(answer)) {
        return answer.length > 0;
      }
      return answer !== "";
    }).length;
  };

  const progress = (calculateAnsweredCount() / questions.length) * 100;

  const handleAnswerChange = (index: number, value: string | string[]) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateTotalScore = () => {
    return answers.reduce((total, answer, index) => {
      const question = questions[index];
      if (Array.isArray(answer)) {
        // Se tiver várias respostas, soma
        const points = answer.reduce((sum, val) => {
          const selectedAnswer = question.answers.find((a) => a.value === val);
          return sum + (selectedAnswer?.points || 0);
        }, 0);
        return total + points;
      } else {
        const selectedAnswer = question.answers.find((a) => a.value === answer);
        return total + (selectedAnswer?.points || 0);
      }
    }, 0);
  };

  const totalScore = calculateTotalScore();

  const resposta = questions.map((q, index) => ({
    pergunta: q.id,
    resposta: answers[index],
  }));

  const isAnswerEmpty = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return answer.length === 0;
    }
    return answer === "";
  };

  const handleSubmit = async () => {
    if (isSending) return;
    if (!formData.company) {
      router.push(`/questionario/#0`);
      toast.error("Por favor, insira o nome da empresa.");
      return;
    }

    const unansweredIndex = answers.findIndex(isAnswerEmpty);
    if (unansweredIndex !== -1) {
      router.push(`/questionario/#${unansweredIndex + 1}`);
      toast.error("Por favor, responda todas as perguntas.");
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: resposta,
          company: formData.company,
        }),
      });
      if (response.ok) {
        toast.success("Respostas enviadas com sucesso!");
        router.push(`/feedback/${totalScore}`);
        setAnswers(new Array(questions.length).fill(""));
      } else {
        toast.error("Erro ao enviar as respostas. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar as respostas.");
    } finally {
      setIsSending(false);
    }
  };

  return {
    formData,
    setFormData,
    answers,
    setAnswers,
    isSending,
    progress,
    handleAnswerChange,
    handleSubmit,
    totalScore,
  };
}
