import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

export function PostCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Create>
  );
}
