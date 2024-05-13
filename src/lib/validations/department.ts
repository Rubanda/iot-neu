import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const departmentSchema = z.object({
  name: z.string(),
  head: z.string().optional(),
  branchId: z.string().optional(),
});
export const addGroupSchema = z.object({
  groupsIds: z.array(z.number()),
});
export const departmentEditSchema = z
  .object({
    name: z.string(),
    head: z.string().optional(),
    branchId: z.string().optional(),
  })
  .partial();
export type editDepartmentPayload = z.infer<typeof departmentEditSchema>;
type commitee = {
  id: number;
  gender: string;
  avatarLink: string;
  name: string;
  surname: string;
  fullname: string;
  memberId: number;
};
export type groups = {
  id: number;
  name: string;
  description: string;
};
export type Department = z.infer<typeof departmentSchema> & {
  id: number;
  name: string;
  branchId: number;
  branch: {
    id: number;
    name: string;
    orgId: string;
  };
  groups: groups[];
  leader: commitee;
};
