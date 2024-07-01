import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeadlineServiceBase } from "./base/deadline.service.base";

@Injectable()
export class DeadlineService extends DeadlineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
