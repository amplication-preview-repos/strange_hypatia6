import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "id";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.id?.toString() || String(record.id);
};
