import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type DeadlineUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  lead?: LeadWhereUniqueInput | null;
};
