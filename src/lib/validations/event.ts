import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const eventSchema = z.object({
  title: z.string(),
  date: z.any(),
  from: z.string(),
  to: z.string(),
  description: z.string(),
});
export const eventSchema2 = z.object({
  title: z.string(),
  date: z.any(),
  from: z.string(),
  to: z.string(),
  branchId: z.number(),
  description: z.string(),
  session: z.array(
    z.object({
      topic: z.string(),
      starts: z.string(),
      ends: z.string(),
      speaker: z.string(),
      notes: z.string(),
    })
  ),
});
export type EventPayload = z.infer<typeof eventSchema2>;
export type Event = z.infer<typeof eventSchema> & {
  id: number;
};

export const sessionSchema = z.object({
  topic: z.string(),
  starts: z.string(),
  ends: z.string(),
  speaker: z.string(),
  notes: z.string(),
});
export type SessionPayload = z.infer<typeof sessionSchema>;
export type Topic = z.infer<typeof sessionSchema> & {
  id: number;
};
