/*
  Warnings:

  - You are about to drop the column `bio` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Social` table. All the data in the column will be lost.
  - Added the required column `condition` to the `Social` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Profile` DROP COLUMN `bio`,
    DROP COLUMN `skills`,
    ADD COLUMN `department` VARCHAR(191) NULL,
    ADD COLUMN `studentId` VARCHAR(191) NULL,
    ADD COLUMN `university` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Social` DROP COLUMN `url`,
    ADD COLUMN `condition` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE INDEX `Account_userId_idx` ON `Account`(`userId`);

-- CreateIndex
CREATE INDEX `Session_userId_idx` ON `Session`(`userId`);
