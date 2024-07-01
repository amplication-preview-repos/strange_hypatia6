import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommunicationModuleBase } from "./base/communication.module.base";
import { CommunicationService } from "./communication.service";
import { CommunicationController } from "./communication.controller";
import { CommunicationResolver } from "./communication.resolver";

@Module({
  imports: [CommunicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommunicationController],
  providers: [CommunicationService, CommunicationResolver],
  exports: [CommunicationService],
})
export class CommunicationModule {}
