import React from "react";
import { Admin, Resource } from 'react-admin';
import lb4Provider from "react-admin-lb4";
import UserList from "./components/UserList";
import ServiceList from "./components/ServiceList";
import OptionList from "./components/OptionList";
import ServiceEdit from "./components/ServiceEdit";
import OptionEdit from "./components/OptionEdit";
// import ServiceCreate from "./components/ServiceCreate";
// import OptionCreate from "./components/OptionCreate";
function App() {
  return (
    <Admin dataProvider={lb4Provider(' https://localhost:8089/api')}>
      <Resource name='user' list={UserList}></Resource>
      <Resource name='service' list={ServiceList} edit={ServiceEdit} ></Resource>
      <Resource name='option' list={OptionList} edit={OptionEdit} ></Resource>

    </Admin>
  );
}

export default App;
