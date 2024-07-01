import { ContactUpdateManyWithoutCustomersInput } from "./ContactUpdateManyWithoutCustomersInput";
import { LeadUpdateManyWithoutCustomersInput } from "./LeadUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  contacts?: ContactUpdateManyWithoutCustomersInput;
  email?: string | null;
  leads?: LeadUpdateManyWithoutCustomersInput;
  name?: string | null;
};
