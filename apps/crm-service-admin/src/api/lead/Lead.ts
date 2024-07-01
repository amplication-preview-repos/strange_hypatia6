import { Contact } from "../contact/Contact";
import { Customer } from "../customer/Customer";
import { Deadline } from "../deadline/Deadline";

export type Lead = {
  contact?: Contact | null;
  createdAt: Date;
  customer?: Customer | null;
  deadlines?: Array<Deadline>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
