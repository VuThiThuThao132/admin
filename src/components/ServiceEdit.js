import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin"

const ServiceEdit = (props) => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="serviceName" />
            <TextInput disabled source="description" />

        </SimpleForm>
    </Edit>
);

export default ServiceEdit;