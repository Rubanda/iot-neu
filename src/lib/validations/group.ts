import { z } from "zod";
import { prettify } from "./member";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const groupSchema = z.object({
  name: z.string(),
  head: z.string().optional(),
  description: z.string(),
  departmentId: z.string().optional(),
});
export const addMemberSchema = z.object({
  memberIds: z.array(z.number()),
});
export const addLeaderSchema = z.object({
  leaderId: z.string().optional().nullable(),
});

export const groupEditSchema = z
  .object({
    name: z.string(),
    head: z.string(),
    description: z.string(),
    departmentId: z.string(),
  })
  .partial();
export type editGroupPayload = z.infer<typeof groupEditSchema> & {
  departments: {
    id: number;
    name: string;
    branchId: number;
    head: number;
  };
};
export type GroupMembers = {
  id: number;
  memberId: number;
  name: string;
  surname: string;
  fullname: string;
  gender: string;
  avatarLink: string;
  phone: string;
  position: string;
};
type commitee = {
  id: number;
  gender: string;
  avatarLink: string;
  name: string;
  surname: string;
  fullname: string;
  memberId: number;
};
export type GroupType = z.infer<typeof groupSchema> & {
  id: number;
  groupLeader: {
    id: number;
    gender: string;
    avatarLink: string;
    name: string;
    surname: string;
    fullname: string;
    memberId: number;
  };
  leader: commitee;
  groupMembers: GroupMembers[] | any;
  departments: {
    name: string;
    id: number;
    head: number;
    branchId: number;
  };
};
