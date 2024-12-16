import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.healthHistory.createMany({
        data: [
            {
                id: "example-id-1",
                userId: "clw66xdqi0000o5ez6uyh8ebi",
                skinConditions: JSON.stringify(["Acne", "Eczema"]),
                allergies: ["Pollen", "Dust"],
                otherDetails: "Needs regular follow-ups.",
                createdAt: new Date(),
            },
            {
                id: "example-id-2",
                userId: "clw66xdqi0000o5ez6uyh8ebi",
                skinConditions: JSON.stringify(["Psoriasis"]),
                allergies:["Peanuts"],
                otherDetails: "Recommended for a dermatologist visit.",
                createdAt: new Date(),
            },
        ],
    });
    console.log("Database seeded.");
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
