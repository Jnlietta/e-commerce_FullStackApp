-- DropForeignKey
ALTER TABLE `cartproduct` DROP FOREIGN KEY `CartProduct_orderId_fkey`;

-- AddForeignKey
ALTER TABLE `CartProduct` ADD CONSTRAINT `CartProduct_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
