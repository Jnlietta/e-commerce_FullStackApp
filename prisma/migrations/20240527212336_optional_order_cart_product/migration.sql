-- DropForeignKey
ALTER TABLE `cartproduct` DROP FOREIGN KEY `CartProduct_orderId_fkey`;

-- AlterTable
ALTER TABLE `cartproduct` MODIFY `orderId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
