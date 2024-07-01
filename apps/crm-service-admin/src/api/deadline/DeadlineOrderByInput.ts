import { SortOrder } from "../../util/SortOrder";

export type DeadlineOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  leadId?: SortOrder;
  updatedAt?: SortOrder;
};
