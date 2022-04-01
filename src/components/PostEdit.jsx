import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

function PostTitle({ record }) {
  return <span>Post: {record ? `${record.title}` : ""}</span>;
}

export function PostEdit(props) {
  return (
    <Edit title={<PostTitle></PostTitle>} {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
}
