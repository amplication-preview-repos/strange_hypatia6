import { Lead } from "../lead/Lead";

export type Deadline = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  lead?: Lead | null;
  updatedAt: Date;
};
