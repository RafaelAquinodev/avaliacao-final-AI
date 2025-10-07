"use client";
import { useRouter } from "next/navigation";
import { GabaritoCard } from "./gabaritoCard";
import { gabaritoSlim } from "./gabaritoType";
// para Next.js 13/14 App Router
import { Button } from "@/components/ui/button"; // botão padrão do shadcn/ui

export default function GabaritoPage() {
  const router = useRouter();

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        py-8
      "
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        Gabarito
      </h1>
      <div
        className="
          w-full
          max-w-2xl
          flex
          flex-col
          items-center
          gap-6
          px-4
        "
      >
        {gabaritoSlim.map((item) => (
          <GabaritoCard
            key={item.id}
            id={item.id}
            question={item.question}
            correctAnswer={item.correctAnswer}
          />
        ))}
        {/* Botão de voltar ao início */}
        <Button
          onClick={() => router.push("/")}
          className="
            mt-8
            w-full
            max-w-xs
            mx-auto
            text-base
            font-semibold
            rounded-md
            bg-primary
            hover:bg-primary-700
            hover:scale-105
            active:scale-95
            transition-all
            duration-200
            shadow-md
          "
        >
          Voltar ao Início
        </Button>
      </div>
    </div>
  );
}
