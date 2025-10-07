"use client";
import { Card, CardContent } from "@/components/ui/card";
import PageContainer from "../../_components/page-container";
import { Button } from "@/components/ui/button";
import { redirect, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useResult } from "./_hooks/useResult";
import { ResultHeader } from "./_components/resultHeader";
import { ResultDiagnosis } from "./_components/resultDiagnosis";
import { ArrowRight } from "lucide-react";

const FeedbackPage = () => {
  const params = useParams<{ totalScore: string }>();

  const result = useResult(params.totalScore);
  if (!result) {
    redirect("/");
    return null;
  }
  const router = useRouter();

  return (
    <PageContainer className="relative overflow-hidden md:justify-start">
      <div className="absolute inset-0 lg:bg-[url('/fundo1.svg')] bg-cover bg-center filter blur-md z-0" />
      <div className="max-w-4xl mx-auto md:mx-[4%] text-center relative z-10">
        <ResultHeader
          icon={result.icon}
          totalScore={params.totalScore}
          level={result.level}
        />
        <Card className="max-w-3xl mx-auto mb-8 md:backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <ResultDiagnosis
              diagnosis={result.diagnosis}
              recomendation={result.recomendation}
            />
          </CardContent>
        </Card>
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-4 w-full max-w-xl mx-auto mt-6">
          <Button
            variant="secondary"
            className="
      text-lg
      border border-white
      px-8
      py-6
      flex-1
      min-w-[180px]
      max-w-[320px]
      transition-all
      duration-200
      hover:bg-secondary/80
      hover:scale-105
      active:scale-95
    "
            asChild
          >
            <Link href="/">Voltar para o início</Link>
          </Button>
          <Button
            size="lg"
            className="
              text-base
              flex-1
              min-w-[180px]
              max-w-[320px]
              px-8
              py-6
              transition-all
              duration-200
              hover:bg-primary-700
              hover:scale-105
              active:scale-95
              flex items-center justify-center
            "
            onClick={() => router.push("/gabarito")}
          >
            <>
              Ver Gabarito
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};
export default FeedbackPage;
