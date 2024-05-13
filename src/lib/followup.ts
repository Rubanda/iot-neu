import api from "@/utils/api";

export async function getFollowup({
  page,
  per_page,
  sort,
  name,
}: {
  page: string;
  per_page: string;
  sort?: string;
  name?: string;
}) {
  const res = await api.get(
    `/api/followups/?page=${page}&per_page=${per_page}`
  );
  return res.data;
}

// deleting a followup
export async function deleteFollowUp(id: number) {
  const res = await api.delete(`/api/followups/${id}`);
  return res.data;
}
