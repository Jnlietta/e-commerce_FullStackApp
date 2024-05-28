/*
  Warnings:

  - Added the required column `guestId` to the `CartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cartproduct` ADD COLUMN `guestId` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NULL;
