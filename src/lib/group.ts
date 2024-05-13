import api from "@/utils/api";

export async function getGroupById(id: number) {
  const res = await api.get(`/api/groups/${id}`);
  return res.data;
}

export async function deleteGroup(id: number | undefined) {
  const res = await api.delete(`/api/groups/${id}`);
  return res;
}

// get department
export async function getDepartment({
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
    `/api/departments/?page=${page}&per_page=${per_page}&name=${name ?? ""}`
  );
  return res.data;
}
// delete department
export async function deleteDepartment(id: number | undefined) {
  const res = await api.delete(`/api/departments/${id}`);
  return res;
}

// get groups
export async function fetchGroups({
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
  try {
    const res = await api.get(`/api/groups/?page=${page}&per_page=${per_page}`);
    return res.data;
  } catch (error) {
    console.log("error" + error);
  }
}
// fetch group
