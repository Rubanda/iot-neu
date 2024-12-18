import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { revalidatePath } from "next/cache"


export async function findManySocial(filters: Record<string, any> = {}) {
  const session = await getCurrentUser();
  console.log("[k:session]", session);

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
  console.log("[k:session]", session);

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
export async function createprofile(payload: string) {
    const session = await getCurrentUser()
    console.log('[k:session]',session)
    const data = JSON.parse(payload)

    console.log('[k:data]',data)
    const profile = await  db.profile.create({
      data: {
        ...data,
        userId: session?.id,
      },
    })
  revalidatePath("/dash/profile");
  return profile
}

export async function updateSocial(id: string, payload: string) {
  const session = await getCurrentUser();
  console.log("[k:session]", session);

  if (!session) {
    throw new Error("User not authenticated.");
  }

  const data = JSON.parse(payload);
  console.log("[k:data]", data);

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
  console.log("[k:session]", session);

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
