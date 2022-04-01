// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  useResourceContext,
} from "react-admin";
import { CustomUrlField } from "./CustomUrlField";

export const UserList = (props) => {
  const resource = useResourceContext();
  const title = <span>Stone | {resource}</span>;

  return (
    <List title={title} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <UrlField source="website" />
        <CustomUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
