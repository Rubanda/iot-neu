import { z } from "zod";
type MemberInfo = {
  name: string;
  surname: string;
  memberId: number;
  avatarLink: string;
  gender: string;
};
export type FollowUp = {
  id: number;
  user: number;
  responsible: number;
  date: string;
  type: string;
  from: string;
  isDone: boolean;
  doneOn: string | null;
  isRecurrence: string | null;
  to: string;
  action: string;
  status: boolean;
  note: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  User: MemberInfo; // You may need to replace 'any[]' with the actual type for MemberFollowUp
  Responsible: MemberInfo; // You may need to replace 'any[]' with the actual type for MemberFollowUp
};
export const FollowUpSchema = z.object({
  user: z.number(),
  responsible: z.number(),
  date: z.string(), // Assuming DateTime is represented as a string
  type: z.string().refine((val) => ["Phone", "Message", "Visit"].includes(val)),
  from: z.string(), // Assuming DateTime is represented as a string
  isDone: z.boolean().default(false),
  doneOn: z.string().optional(), // Assuming DateTime is represented as a string
  isRecurrence: z.boolean().default(false),
  to: z.string(), // Assuming DateTime is represented as a string
  action: z.string().refine((val) => ["Care"].includes(val)),
  status: z.boolean(),
  note: z.string(),
});
