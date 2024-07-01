import { CommunicationWhereInput } from "./CommunicationWhereInput";
import { CommunicationOrderByInput } from "./CommunicationOrderByInput";

export type CommunicationFindManyArgs = {
  where?: CommunicationWhereInput;
  orderBy?: Array<CommunicationOrderByInput>;
  skip?: number;
  take?: number;
};
