import * as z from "zod";

export const memberSchema = z.object({
  name: z.string({
    required_error: "A first name is required.",
  }),
  surname: z.string({
    required_error: "A last name is required.",
  }),
  dateOfBirth: z.string().optional(),
  gender: z.string(),
  maritalStatus: z.string(),
  educationLevel: z.string().optional(),
  position: z.string().optional(),
  qualification: z.string().optional(),
  school: z.string().optional(),
  grade: z.string().optional(),
  baptismStatus: z.boolean().optional(),
  baptism: z.any().optional(),
  baptismChurch: z.string().optional(),
  facebook: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  avatarLink: z.any().optional(),
  addresses: z.string().optional(),
  jobTitle: z.string().optional(),
  employer: z.boolean().optional(),
  talentsAndHobbies: z.string().optional(),
  joinDate: z.any().optional(),
  leadersNote: z.string().optional(),
});
export const memberEditSchema = memberSchema;
// export const memberEditSchema = memberSchema.partial();
// export type editMemberPayload = z.infer<typeof memberEditSchema>;
export const addressSchema = z.object({
  address: z.string(),
  province: z.string(),
  city: z.string(),
  country: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  memberId: z.number(),
});

export type Member = prettify<z.infer<typeof memberEditSchema>> & {
  id: number;
  fullName: string;
  avatarLink: string;
  memberId: number;
};

// prettify
export type prettify<T> = {
  [K in keyof T]: T[K];
} & {};
export interface NewUsers {
  name: string;
  surname: string;
  memberId: number;
  createdAt: string; // Date-time in ISO format (e.g., '2024-04-25T16:26:12.307Z')
  joinDate: string | null; // Date-time in ISO format or null (e.g., 'null' if join date is not available)
  email: string;
  avatarLink: string;
  gender: 'Male' | 'Female' | 'Other';
  fullname: string;
}
