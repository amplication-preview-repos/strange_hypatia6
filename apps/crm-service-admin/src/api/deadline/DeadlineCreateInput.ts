import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type DeadlineCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  lead?: LeadWhereUniqueInput | null;
};
