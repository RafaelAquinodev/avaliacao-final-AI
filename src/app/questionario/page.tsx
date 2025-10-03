"use client";
import PageContainer from "../_components/page-container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useQuestionnaire } from "./_hooks/useQuestionnaire";
import { questions } from "./questionType";
import { QuestionnaireHeader } from "./_components/questionnaireHeader";
import { CompanyForm } from "./_components/companyForm";
import { QuestionCard } from "./_components/questionCard";

const QuestionarioPage = () => {
  const {
    formData,
    setFormData,
    answers,
    isSending,
    progress,
    handleAnswerChange,
    handleSubmit,
  } = useQuestionnaire(questions);

  const calculateAnsweredCount = () => {
    return answers.filter((answer) => {
      if (Array.isArray(answer)) {
        return answer.length > 0;
      }
      return answer !== "";
    }).length;
  };

  return (
    <PageContainer className="items-start">
      <div className="max-w-3xl mx-auto">
        <QuestionnaireHeader
          completed={calculateAnsweredCount()}
          total={questions.length}
          progress={progress}
        />
        <div className="space-y-8 mt-[120px]">
          <div className="space-y-8">
            <CompanyForm
              company={formData.company}
              setCompany={(name) => setFormData({ ...formData, company: name })}
            />
            <p className="mb-8">
              Para cada pergunta, selecione a opção que melhor representa sua
              situação.
            </p>
            {questions.map((question, idx) => (
              <QuestionCard
                key={question.id}
                index={idx}
                question={question}
                value={answers[idx]}
                onChange={handleAnswerChange}
              />
            ))}
            <div className="text-center">
              <Button
                size="lg"
                onClick={handleSubmit}
                className="w-full text-base max-w-[400px] md:w-auto px-8"
                disabled={isSending}
              >
                {isSending ? (
                  "Enviando..."
                ) : (
                  <>
                    Ver Meus Resultados
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default QuestionarioPage;
