import { CommunicationListRelationFilter } from "../communication/CommunicationListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";

export type ContactWhereInput = {
  communications?: CommunicationListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leads?: LeadListRelationFilter;
};
