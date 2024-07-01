import { CommunicationCreateNestedManyWithoutContactsInput } from "./CommunicationCreateNestedManyWithoutContactsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { LeadCreateNestedManyWithoutContactsInput } from "./LeadCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  communications?: CommunicationCreateNestedManyWithoutContactsInput;
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leads?: LeadCreateNestedManyWithoutContactsInput;
};
