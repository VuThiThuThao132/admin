import React from "react";
import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin';

const ServiceFiter = (props) => (<Filter {...props}>
    <SearchInput placeholder="Service Name" source="serviceName" resettable alwaysOn />
</Filter>)

function ServiceList(props) {
    return (
        <List {...props} filters={<ServiceFiter />}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="serviceName" />
                <TextField source="description" />

            </Datagrid>
        </List>
    );
}

export default ServiceList;