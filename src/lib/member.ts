import api from "@/utils/api";
// Simulate a database read for tasks.
async function getMember() {
  const response = await api.get(`/api/members`);

  return response.data;
}

 async function getAllMember(limit?:number) {
  const response = await api.get(`/api/members/all?limit=${limit}`);
  return response.data;
}
async function memberCount() {
  const response = await api.get(`/api/members/count`);

  return response.data;
}
async function deleteMember(id: number | undefined) {
  const res = await api.delete(`/api/members/${id}`);
}

export { getMember, memberCount, getAllMember, deleteMember };
