import { Contact } from "../contact/Contact";
import { Lead } from "../lead/Lead";

export type Customer = {
  contacts?: Array<Contact>;
  createdAt: Date;
  email: string | null;
  id: string;
  leads?: Array<Lead>;
  name: string | null;
  updatedAt: Date;
};
