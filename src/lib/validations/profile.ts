import { z } from "zod";
import { prettify } from "./member";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const profileSchema = z.object({
  name: z.string(),
  bio: z.string().optional(),
  skills: z.string(),
  userId: z.string().optional(),
});
export const addMemberSchema = z.object({
  memberIds: z.array(z.number()),
});
export const addLeaderSchema = z.object({
  leaderId: z.string().optional().nullable(),
});

export const profileEditSchema = profileSchema.partial();
export type ProfilePayload = z.infer<typeof profileEditSchema>
export type Profile = z.infer<typeof profileSchema>;