/*
  Warnings:

  - You are about to drop the column `uploadId` on the `Prediction` table. All the data in the column will be lost.
  - Added the required column `image` to the `Prediction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Prediction_uploadId_idx` ON `Prediction`;

-- AlterTable
ALTER TABLE `Prediction` DROP COLUMN `uploadId`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `confidence` DOUBLE NULL;
