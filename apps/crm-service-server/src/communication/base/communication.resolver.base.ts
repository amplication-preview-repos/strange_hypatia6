/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Communication } from "./Communication";
import { CommunicationCountArgs } from "./CommunicationCountArgs";
import { CommunicationFindManyArgs } from "./CommunicationFindManyArgs";
import { CommunicationFindUniqueArgs } from "./CommunicationFindUniqueArgs";
import { CreateCommunicationArgs } from "./CreateCommunicationArgs";
import { UpdateCommunicationArgs } from "./UpdateCommunicationArgs";
import { DeleteCommunicationArgs } from "./DeleteCommunicationArgs";
import { Contact } from "../../contact/base/Contact";
import { CommunicationService } from "../communication.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Communication)
export class CommunicationResolverBase {
  constructor(
    protected readonly service: CommunicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "read",
    possession: "any",
  })
  async _communicationsMeta(
    @graphql.Args() args: CommunicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Communication])
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "read",
    possession: "any",
  })
  async communications(
    @graphql.Args() args: CommunicationFindManyArgs
  ): Promise<Communication[]> {
    return this.service.communications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Communication, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "read",
    possession: "own",
  })
  async communication(
    @graphql.Args() args: CommunicationFindUniqueArgs
  ): Promise<Communication | null> {
    const result = await this.service.communication(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Communication)
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "create",
    possession: "any",
  })
  async createCommunication(
    @graphql.Args() args: CreateCommunicationArgs
  ): Promise<Communication> {
    return await this.service.createCommunication({
      ...args,
      data: {
        ...args.data,

        contact: args.data.contact
          ? {
              connect: args.data.contact,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Communication)
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "update",
    possession: "any",
  })
  async updateCommunication(
    @graphql.Args() args: UpdateCommunicationArgs
  ): Promise<Communication | null> {
    try {
      return await this.service.updateCommunication({
        ...args,
        data: {
          ...args.data,

          contact: args.data.contact
            ? {
                connect: args.data.contact,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Communication)
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "delete",
    possession: "any",
  })
  async deleteCommunication(
    @graphql.Args() args: DeleteCommunicationArgs
  ): Promise<Communication | null> {
    try {
      return await this.service.deleteCommunication(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Contact, {
    nullable: true,
    name: "contact",
  })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async getContact(
    @graphql.Parent() parent: Communication
  ): Promise<Contact | null> {
    const result = await this.service.getContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
