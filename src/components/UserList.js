import React from "react";
import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin';

const UserFiter = (props) => (<Filter {...props}>
    <SearchInput placeholder="User email" source="email" resettable alwaysOn />
</Filter>)

function UserList(props) {
    return (
        <List {...props} filters={<UserFiter />}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="password" />
                <TextField source="phone" />
                <TextField source="block" />
                <TextField source="image" />
                <TextField source="status" />
                <TextField source="role" />

            </Datagrid>
        </List>
    );
}

export default UserList;