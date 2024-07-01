import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeadlineListRelationFilter } from "../deadline/DeadlineListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  contact?: ContactWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  deadlines?: DeadlineListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
};
