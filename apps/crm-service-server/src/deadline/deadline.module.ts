import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeadlineModuleBase } from "./base/deadline.module.base";
import { DeadlineService } from "./deadline.service";
import { DeadlineController } from "./deadline.controller";
import { DeadlineResolver } from "./deadline.resolver";

@Module({
  imports: [DeadlineModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeadlineController],
  providers: [DeadlineService, DeadlineResolver],
  exports: [DeadlineService],
})
export class DeadlineModule {}
