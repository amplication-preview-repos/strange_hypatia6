/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DeadlineService } from "../deadline.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeadlineCreateInput } from "./DeadlineCreateInput";
import { Deadline } from "./Deadline";
import { DeadlineFindManyArgs } from "./DeadlineFindManyArgs";
import { DeadlineWhereUniqueInput } from "./DeadlineWhereUniqueInput";
import { DeadlineUpdateInput } from "./DeadlineUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DeadlineControllerBase {
  constructor(
    protected readonly service: DeadlineService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Deadline })
  @nestAccessControl.UseRoles({
    resource: "Deadline",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDeadline(
    @common.Body() data: DeadlineCreateInput
  ): Promise<Deadline> {
    return await this.service.createDeadline({
      data: {
        ...data,

        lead: data.lead
          ? {
              connect: data.lead,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,

        lead: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Deadline] })
  @ApiNestedQuery(DeadlineFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Deadline",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deadlines(@common.Req() request: Request): Promise<Deadline[]> {
    const args = plainToClass(DeadlineFindManyArgs, request.query);
    return this.service.deadlines({
      ...args,
      select: {
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,

        lead: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Deadline })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Deadline",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deadline(
    @common.Param() params: DeadlineWhereUniqueInput
  ): Promise<Deadline | null> {
    const result = await this.service.deadline({
      where: params,
      select: {
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,

        lead: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Deadline })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Deadline",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDeadline(
    @common.Param() params: DeadlineWhereUniqueInput,
    @common.Body() data: DeadlineUpdateInput
  ): Promise<Deadline | null> {
    try {
      return await this.service.updateDeadline({
        where: params,
        data: {
          ...data,

          lead: data.lead
            ? {
                connect: data.lead,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          dueDate: true,
          id: true,

          lead: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Deadline })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Deadline",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDeadline(
    @common.Param() params: DeadlineWhereUniqueInput
  ): Promise<Deadline | null> {
    try {
      return await this.service.deleteDeadline({
        where: params,
        select: {
          createdAt: true,
          description: true,
          dueDate: true,
          id: true,

          lead: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
