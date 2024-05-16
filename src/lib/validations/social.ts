import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const socialSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
  userId: z.string().optional(),
});
export const socialEditSchema = socialSchema.partial();
export type editsocialPayload = z.infer<typeof socialEditSchema>;
export type socialPayload = z.infer<typeof socialSchema>;