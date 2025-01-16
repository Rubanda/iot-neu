'use server'
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { revalidatePath } from "next/cache"

/**
 * @desc create department
 */
export async function createPrediction(payload: string) {
    const session = await getCurrentUser()
    const data = JSON.parse(payload)

    const profile = await  db.prediction.create({
      data: {
        ...data,
        user: {
          connect: {
            id: session?.id,
          },
        },
      },
      include: {
        user: true,
      },
    })
  revalidatePath("/dash/profile");
  return profile
}
export async function findResults(filters: Record<string, any> = {}) {
  const session = await getCurrentUser();

  if (!session) {
    throw new Error("User not authenticated.");
  }
  const result = await db.prediction.findMany({
    where: {
      userId: session.id,
     // Additional filters if needed
    },
    orderBy: {
      createdAt: "desc",
    }

  });
  return result;
}

