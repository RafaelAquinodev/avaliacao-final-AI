import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Question } from "../questionType";

export interface FormData {
  company: string;
}

export function useQuestionnaire(questions: Question[]) {
  // Resposta única por questão (não múltipla escolha)
  const [formData, setFormData] = useState<FormData>({ company: "" });
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const calculateAnsweredCount = () => {
    return answers.filter((answer) => answer !== "").length;
  };

  const progress = (calculateAnsweredCount() / questions.length) * 100;

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateTotalScore = () => {
    return answers.reduce((total, userAnswer, index) => {
      const question = questions[index];
      const correctAnswer = question.answers.find((a) => a.correct)?.value;
      return userAnswer === correctAnswer ? total + 1 : total;
    }, 0);
  };

  const totalScore = calculateTotalScore();

  const resposta = questions.map((q, index) => ({
    pergunta: q.id,
    resposta: answers[index],
  }));

  const isAnswerEmpty = (answer: string) => answer === "";

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
    console.log("Respostas completas:", resposta);

    // Pular o envio ao banco e ir direto para o feedback:
    toast.success("Respostas simuladas com sucesso! (Banco desativado)");
    router.push(`/feedback/${totalScore}`);

    setAnswers(new Array(questions.length).fill(""));
    setIsSending(false);
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
