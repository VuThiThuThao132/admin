import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin"

const OptionEdit = (props) => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="optionName" />
            <TextInput disabled source="price" />
            <TextInput disabled source="serviceID" />

        </SimpleForm>
    </Edit>
);

export default OptionEdit;