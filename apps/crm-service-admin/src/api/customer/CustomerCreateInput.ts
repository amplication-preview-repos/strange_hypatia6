import { ContactCreateNestedManyWithoutCustomersInput } from "./ContactCreateNestedManyWithoutCustomersInput";
import { LeadCreateNestedManyWithoutCustomersInput } from "./LeadCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  contacts?: ContactCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  leads?: LeadCreateNestedManyWithoutCustomersInput;
  name?: string | null;
};
