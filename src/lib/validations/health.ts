import { z } from "zod";
import { prettify } from "./member";

export const healthSchema = z.object({
    skinConditions: z.string(),
    allergies: z.string().optional(),
    otherDetails: z.string().optional(),
});

export const healthEditSchema = healthSchema.partial();
export type healthPayload = z.infer<typeof healthEditSchema>
export type health = z.infer<typeof healthSchema>;