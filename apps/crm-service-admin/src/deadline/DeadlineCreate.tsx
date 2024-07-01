import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LeadTitle } from "../lead/LeadTitle";

export const DeadlineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput source="lead.id" reference="Lead" label="Lead">
          <SelectInput optionText={LeadTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
