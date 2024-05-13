import { z } from "zod";

export const parishSchema = z.object({
  name: z.string(),
});

export type Parish = z.infer<typeof parishSchema>;
