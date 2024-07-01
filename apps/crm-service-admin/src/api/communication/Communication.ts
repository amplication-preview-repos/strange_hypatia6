import { Contact } from "../contact/Contact";

export type Communication = {
  contact?: Contact | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
