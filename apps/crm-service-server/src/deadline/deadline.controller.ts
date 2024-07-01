import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeadlineService } from "./deadline.service";
import { DeadlineControllerBase } from "./base/deadline.controller.base";

@swagger.ApiTags("deadlines")
@common.Controller("deadlines")
export class DeadlineController extends DeadlineControllerBase {
  constructor(
    protected readonly service: DeadlineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
