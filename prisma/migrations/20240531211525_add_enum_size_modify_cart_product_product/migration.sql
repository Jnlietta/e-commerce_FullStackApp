/*
  Warnings:

  - You are about to drop the column `size` on the `product` table. All the data in the column will be lost.
  - Added the required column `size` to the `CartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cartproduct` ADD COLUMN `comment` VARCHAR(191) NULL,
    ADD COLUMN `size` ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL', 'OneSize') NOT NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `size`;
