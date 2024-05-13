import z from "zod";

export const cellSchema = z.object({
  cellNo: z.string(),
  address: z.string().optional(),
  branchId: z.string().optional(),
  leader: z.string().optional(),
  vice_leader: z.string().optional(),
});

export type Cell = {
  id: number;
  cellNo: string;
  address: string;
  branchId: string;
  leader: {
    name: string;
    phone: string;
  };
  vice_leader: {
    name: string;
    phone: string;
  };
};
