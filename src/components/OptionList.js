import React from "react";
import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin';

const OptionFiter = (props) => (<Filter {...props}>
    <SearchInput placeholder="Option Name" source="optionName" resettable alwaysOn />
</Filter>)

function OptionList(props) {
    return (
        <List {...props} filters={<OptionFiter />}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="optionName" />
                <TextField source="price" />
                <TextField source="serviceID" />

            </Datagrid>
        </List>
    );
}

export default OptionList;