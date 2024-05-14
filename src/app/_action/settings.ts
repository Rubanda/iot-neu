"use server";

import {
  unstable_cache as cache,
  unstable_noStore as noStore,
  revalidatePath,
  revalidateTag,
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

