import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeadlineCreateNestedManyWithoutLeadsInput } from "./DeadlineCreateNestedManyWithoutLeadsInput";

export type LeadCreateInput = {
  contact?: ContactWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  deadlines?: DeadlineCreateNestedManyWithoutLeadsInput;
  status?: "Option1" | null;
};
