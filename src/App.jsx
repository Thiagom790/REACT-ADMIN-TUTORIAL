import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/ListUsers";
import { PostList } from "./components/PostList";
import { PostEdit } from "./components/PostEdit";
import { PostCreate } from "./components/PostCreate";
import UserIcon from "@material-ui/icons/Group";
import PostIcon from "@material-ui/icons/Book";
import Dashboard from "./components/Dashboard";
import authProvider from "./providers/authProvider";

export function App() {
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  );
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="users" list={UserList} icon={UserIcon} />
      {/*  componente que ajuda a criar uma estrutura de exemplo */}
      {/* <Resource name="posts" list={ListGuesser} /> */}
      {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  );
}
