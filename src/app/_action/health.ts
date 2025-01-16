'use server'
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { revalidatePath } from "next/cache"

export async function findManyHealth(filters: Record<string, any> = {}) {
  const session = await getCurrentUser();

  if (!session) {
    throw new Error("User not authenticated.");
  }
  const healthHistory = await db.healthHistory.findMany({
    where: {
      userId: session.id,
      ...filters, // Additional filters if needed
    },
  });
  return healthHistory;
}


export async function findOneSocial(id: string) {
  const session = await getCurrentUser();

  if (!session) {
    throw new Error("User not authenticated.");
  }

  const profile = await db.healthHistory.findUnique({
    where: {
      id: id,
    },
  });

  if (!profile) {
    throw new Error(`Record with id ${id} not found.`);
  }

  return profile;
}


/**
 * @desc create department
 */
export async function createHealth(payload: any) {
  const session = await getCurrentUser()
  const profile = await db.healthHistory.create({
    data: {
      ...payload,
      userId: session?.id,
    },
  })
  revalidatePath("/dash/health");
  return profile
}

export async function updateHealth(id: string, payload: string) {
  const session = await getCurrentUser();

  if (!session) {
    throw new Error("User not authenticated.");
  }

  const data = JSON.parse(payload);

  const updatedProfile = await db.healthHistory.update({
    where: {
      id: id,
    },
    data: {
      ...data,
      userId: session.id,
    },
  });

  revalidatePath("/dash/health");
  return updatedProfile;
}

export async function deleteSocial(id: string) {
  const session = await getCurrentUser();

  if (!session) {
    throw new Error("User not authenticated.");
  }

  const deletedProfile = await db.healthHistory.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/dash/health");
  return deletedProfile;
}
