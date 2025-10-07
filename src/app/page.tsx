import PageContainer from "./_components/page-container";
import { BarChart3, CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StartButton from "./_components/start-button";

const Home = () => {
  return (
    <PageContainer className="bg-[url('/fundo2.svg')] bg-cover bg-bottom">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center gap-8">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Teste Final da Fase 1
          </h1>
          <div className="space-y-4">
            <p className="md:text-xl text-pretty text-muted-foreground max-w-[40ch] md:max-w-[65ch] mx-auto">
              Bem-vindo ao teste final de transformação digital! Este é o
              momento de avaliar seu nível de domínio sobre os conceitos
              essenciais que guiam a inovação tecnológica em organizações e
              carreiras.
            </p>
            <p className="md:text-xl text-muted-foreground text-pretty max-w-[39ch] md:max-w-[64ch] mx-auto">
              Serão explorados temas como inteligência artificial preditiva e
              generativa, modelos fundacionais, fundamentos matemáticos,
              competências digitais, aprendizagem contínua e visão estratégica
              para os novos desafios profissionais. Responda cada questão com
              atenção e, ao final, receba um diagnóstico personalizado do seu
              estágio na jornada digital.
            </p>
          </div>
        </div>

        <Card className="max-w-[400px] md:max-w-2xl w-full mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Avaliação Profunda</h3>
                <p className="text-sm text-muted-foreground">
                  Perguntas sobre seu perfil digital
                </p>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="h-12 w-12 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Diagnóstico Detalhado</h3>
                <p className="text-sm text-muted-foreground">
                  Identifique seu nível de maturidade
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Plano de Ação</h3>
                <p className="text-sm text-muted-foreground">
                  Recomendações personalizadas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <StartButton />
      </div>
    </PageContainer>
  );
};

export default Home;
