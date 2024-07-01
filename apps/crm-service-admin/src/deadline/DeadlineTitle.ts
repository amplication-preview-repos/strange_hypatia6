import { Deadline as TDeadline } from "../api/deadline/Deadline";

export const DEADLINE_TITLE_FIELD = "id";

export const DeadlineTitle = (record: TDeadline): string => {
  return record.id?.toString() || String(record.id);
};
