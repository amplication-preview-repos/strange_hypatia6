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
import { Contact } from "./Contact";
import { ContactCountArgs } from "./ContactCountArgs";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactFindUniqueArgs } from "./ContactFindUniqueArgs";
import { CreateContactArgs } from "./CreateContactArgs";
import { UpdateContactArgs } from "./UpdateContactArgs";
import { DeleteContactArgs } from "./DeleteContactArgs";
import { CommunicationFindManyArgs } from "../../communication/base/CommunicationFindManyArgs";
import { Communication } from "../../communication/base/Communication";
import { LeadFindManyArgs } from "../../lead/base/LeadFindManyArgs";
import { Lead } from "../../lead/base/Lead";
import { Customer } from "../../customer/base/Customer";
import { ContactService } from "../contact.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Contact)
export class ContactResolverBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async _contactsMeta(
    @graphql.Args() args: ContactCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Contact])
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contacts(
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    return this.service.contacts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Contact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  async contact(
    @graphql.Args() args: ContactFindUniqueArgs
  ): Promise<Contact | null> {
    const result = await this.service.contact(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  async createContact(
    @graphql.Args() args: CreateContactArgs
  ): Promise<Contact> {
    return await this.service.createContact({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateContact(
    @graphql.Args() args: UpdateContactArgs
  ): Promise<Contact | null> {
    try {
      return await this.service.updateContact({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
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

  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  async deleteContact(
    @graphql.Args() args: DeleteContactArgs
  ): Promise<Contact | null> {
    try {
      return await this.service.deleteContact(args);
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
  @graphql.ResolveField(() => [Communication], { name: "communications" })
  @nestAccessControl.UseRoles({
    resource: "Communication",
    action: "read",
    possession: "any",
  })
  async findCommunications(
    @graphql.Parent() parent: Contact,
    @graphql.Args() args: CommunicationFindManyArgs
  ): Promise<Communication[]> {
    const results = await this.service.findCommunications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Lead], { name: "leads" })
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "read",
    possession: "any",
  })
  async findLeads(
    @graphql.Parent() parent: Contact,
    @graphql.Args() args: LeadFindManyArgs
  ): Promise<Lead[]> {
    const results = await this.service.findLeads(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async getCustomer(
    @graphql.Parent() parent: Contact
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
