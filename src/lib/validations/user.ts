import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
  // email: z.string(),
  email: z.string(),
  password: z.string(),
});
// .and(z.union([
//     z.object({ email: z.undefined(), username: z.string() }),
//     z.object({ email: z.string(), username: z.undefined() }),
//     z.object({ email: z.string(), username: z.string() }),
// ], { errorMap: (issue, ctx) => ({ message: "Either email or username must be filled in" }) }));

export type User = z.infer<typeof userSchema>;
