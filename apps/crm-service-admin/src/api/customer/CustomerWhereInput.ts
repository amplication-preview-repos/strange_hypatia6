import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";

export type CustomerWhereInput = {
  contacts?: ContactListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  leads?: LeadListRelationFilter;
  name?: StringNullableFilter;
};
