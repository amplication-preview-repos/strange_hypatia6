import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  contactId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
