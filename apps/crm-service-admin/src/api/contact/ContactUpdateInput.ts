import { CommunicationUpdateManyWithoutContactsInput } from "./CommunicationUpdateManyWithoutContactsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { LeadUpdateManyWithoutContactsInput } from "./LeadUpdateManyWithoutContactsInput";

export type ContactUpdateInput = {
  communications?: CommunicationUpdateManyWithoutContactsInput;
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leads?: LeadUpdateManyWithoutContactsInput;
};
