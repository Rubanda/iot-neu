import api from "@/utils/api";
import { revalidatePath } from "next/cache";

export async function getEvents() {
  const res = await api.get(`/api/events?limit=3`);
  return res.data;
}
export async function getOneEvent(id: number) {
  const res = await api.get(`/api/events/${id}`);
  return res.data;
}
