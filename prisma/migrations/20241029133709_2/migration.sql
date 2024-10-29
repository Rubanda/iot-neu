/*
  Warnings:

  - The primary key for the `UserEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `eventId` on the `UserEvent` table. All the data in the column will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `skinId` to the `UserEvent` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `UserEvent_eventId_idx` ON `UserEvent`;

-- AlterTable
ALTER TABLE `UserEvent` DROP PRIMARY KEY,
    DROP COLUMN `eventId`,
    ADD COLUMN `skinId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userId`, `skinId`);

-- DropTable
DROP TABLE `Event`;

-- DropTable
DROP TABLE `_EventToUser`;

-- CreateTable
CREATE TABLE `SkinResult` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SkinResultToUser` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SkinResultToUser_AB_unique`(`A`, `B`),
    INDEX `_SkinResultToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `UserEvent_skinId_idx` ON `UserEvent`(`skinId`);
