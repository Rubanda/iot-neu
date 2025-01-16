'use server'
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { revalidatePath } from "next/cache"


export async function findManySocial(filters: Record<string, any> = {}) {
  const session = await getCurrentUser();

  if (!session) {
    throw new Error("User not authenticated.");
  }

  const profiles = await db.healthHistory.findMany({
    where: {
      ...filters,
      userId: session.id, // Ensure only the current user's data is retrieved
    },
  });

  return profiles;
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
export async function createprofile(payload: any, userId: any) {
  const profile = await db.profile.create({
    data: {
      ...payload,
      userId: userId,
    },
  })
  revalidatePath("/dash/profile");
  return profile
}

export async function updatedProfile(id: number, payload: any) {
  const session = await getCurrentUser();
  if (id === null || id === undefined) {
    return await createprofile(payload, session?.id);
  }
  if (!session) {
    throw new Error("User not authenticated.");
  }
  const existingProfile = await db.profile.findUnique({
    where: {
      id: id,
    },
  });
  if (!existingProfile) {
    // Create a new profile if it doesn't exist
    const newProfile = await createprofile(payload, session.id,);
    return newProfile;
  } else {
    // Update the existing profile
    const updatedProfile = await db.profile.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
        userId: session.id,
      },
    });
    revalidatePath("/dash/profile");
    return updatedProfile;
  }
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
