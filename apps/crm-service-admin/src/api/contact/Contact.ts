import { Communication } from "../communication/Communication";
import { Customer } from "../customer/Customer";
import { Lead } from "../lead/Lead";

export type Contact = {
  communications?: Array<Communication>;
  createdAt: Date;
  customer?: Customer | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leads?: Array<Lead>;
  updatedAt: Date;
};
