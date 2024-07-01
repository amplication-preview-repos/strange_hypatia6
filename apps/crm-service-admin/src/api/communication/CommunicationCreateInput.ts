import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";

export type CommunicationCreateInput = {
  contact?: ContactWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  typeField?: "Option1" | null;
};
