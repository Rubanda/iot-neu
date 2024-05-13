import api from "@/utils/api";
import { revalidatePath } from "next/cache";

export async function getInboxData() {
    const response = await api.get(`/api/followups/pending`);
    revalidatePath("/")
    return response.data;
  }