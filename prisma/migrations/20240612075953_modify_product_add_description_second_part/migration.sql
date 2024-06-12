/*
  Warnings:

  - Added the required column `descriptionSecondPart` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `descriptionSecondPart` TEXT NOT NULL;
