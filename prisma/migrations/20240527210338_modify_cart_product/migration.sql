/*
  Warnings:

  - You are about to drop the column `category` on the `cartproduct` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `cartproduct` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `cartproduct` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `cartproduct` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `cartproduct` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `cartproduct` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `cartproduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cartproduct` DROP COLUMN `category`,
    DROP COLUMN `description`,
    DROP COLUMN `img`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `shortDescription`,
    DROP COLUMN `size`,
    MODIFY `quantity` INTEGER NOT NULL DEFAULT 1;
