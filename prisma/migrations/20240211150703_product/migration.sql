-- CreateEnum
CREATE TYPE "Tone" AS ENUM ('warm', 'cool', 'neutral');

-- CreateEnum
CREATE TYPE "category" AS ENUM ('Lipstick', 'BlushOn', 'Foundation', 'EyeBrown', 'Powder', 'EyeShadow');

-- CreateTable
CREATE TABLE "ProductDetail" (
    "productID" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "whereToBuy" TEXT NOT NULL,
    "skinTone" "Tone" NOT NULL,
    "productType" "category" NOT NULL,

    CONSTRAINT "ProductDetail_pkey" PRIMARY KEY ("productID")
);
