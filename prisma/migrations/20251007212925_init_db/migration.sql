-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "answers" JSONB NOT NULL,
    "company" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
