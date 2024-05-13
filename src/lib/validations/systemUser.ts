import * as z from "zod";

export const systemUserSchema = z.object({
  firstName: z.string({
    required_error: "A first name is required.",
  }),
  lastName: z.string({
    required_error: "A last name is required.",
  }),
  email: z
    .string({
      required_error: "An email is required.",
    })
    .email(),
  role: z.string({
    required_error: "A role for this user is required",
  }),
});
