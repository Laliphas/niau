-- CreateEnum
CREATE TYPE "type" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "Tone" AS ENUM ('warm', 'cool', 'neutral');

-- CreateEnum
CREATE TYPE "category" AS ENUM ('Lipstick', 'BlushOn', 'Foundation', 'EyeBrown', 'Powder', 'EyeShadow');

-- CreateTable
CREATE TABLE "User" (
    "userid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "role" "type" NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "ProductDetail" (
    "productID" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "whereToBuy" TEXT NOT NULL,
    "skinTone" "Tone" NOT NULL,
    "productType" "category" NOT NULL,

    CONSTRAINT "ProductDetail_pkey" PRIMARY KEY ("productID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
