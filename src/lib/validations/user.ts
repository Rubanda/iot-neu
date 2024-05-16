import { z } from "zod";

export const userSchema = z.object({
  // email: z.string(),
  name: z.string(),
  // emailVerified: z.string(),
  // username: z.string(),
  // image: z.string(),
});
export type User = z.infer<typeof userSchema>;
