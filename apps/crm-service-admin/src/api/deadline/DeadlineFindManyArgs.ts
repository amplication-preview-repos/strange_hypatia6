import { DeadlineWhereInput } from "./DeadlineWhereInput";
import { DeadlineOrderByInput } from "./DeadlineOrderByInput";

export type DeadlineFindManyArgs = {
  where?: DeadlineWhereInput;
  orderBy?: Array<DeadlineOrderByInput>;
  skip?: number;
  take?: number;
};
