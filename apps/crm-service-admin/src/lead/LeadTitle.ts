import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "id";

export const LeadTitle = (record: TLead): string => {
  return record.id?.toString() || String(record.id);
};
