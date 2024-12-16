import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { revalidatePath } from "next/cache"

/**
 * @desc create department
 */
export async function createPrediction(payload: string) {
    const session = await getCurrentUser()
    console.log('[k:session]',session)
    const data = JSON.parse(payload)

    console.log('[k:data]',data)
    const profile = await  db.prediction.create({
      data: {
        ...data,
        userId: session?.id,
      },
    })
  revalidatePath("/dash/profile");
  return profile
}
