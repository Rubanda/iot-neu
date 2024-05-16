"use server";

import {
  unstable_cache as cache,
  unstable_noStore as noStore,
  revalidatePath,
} from "next/cache"
import { getCurrentUser } from "@/lib/session";
import { db } from "@/lib/db";
import z from "zod";
// get department


/**
 * @desc create department
 */
export async function getUser() {
  return await cache(
    async () => {
      const session = await getCurrentUser()

      return db.user.findFirst()
    },
    ["featured-stores"],
    {
      revalidate: 3600, // every hour
      tags: ["featured-stores"],
    }
  )()
}

/**
 * @desc create department
 */
export async function createProfile(payload: string) {
      const session = await getCurrentUser()
      console.log('[k:session]',session)
      const data = JSON.parse(payload)
      delete data.name
      delete data.urls
      console.log('[k:data]',data)
      const profile = await  db.profile.update({
        where: {
          userId: session?.id,
        },
        data: {
          ...data,
          userId: session?.id,
        },
      })
    revalidatePath("/dash/settings");
    return profile
  }

