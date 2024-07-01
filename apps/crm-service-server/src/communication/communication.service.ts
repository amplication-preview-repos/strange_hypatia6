import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunicationServiceBase } from "./base/communication.service.base";

@Injectable()
export class CommunicationService extends CommunicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
