-- CreateTable
CREATE TABLE "XAppToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires_at" TEXT NOT NULL,

    CONSTRAINT "XAppToken_pkey" PRIMARY KEY ("id")
);
