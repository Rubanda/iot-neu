import { optional, z } from "zod";
import { prettify } from "./member";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const profileSchema = z.object({
  department: z.string().optional(),
 university: z.string().optional(),
  studentId: z.string().optional(),
});


export const profileEditSchema = profileSchema.partial();
export type ProfilePayload = z.infer<typeof profileEditSchema>
export type Profile = z.infer<typeof profileSchema>;