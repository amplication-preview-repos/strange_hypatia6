import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeadlineUpdateManyWithoutLeadsInput } from "./DeadlineUpdateManyWithoutLeadsInput";

export type LeadUpdateInput = {
  contact?: ContactWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  deadlines?: DeadlineUpdateManyWithoutLeadsInput;
  status?: "Option1" | null;
};
