// import React, { useState, useEffect } from 'react';
// import {
//     Create,
//     SimpleForm,
//     DateTimeInput,
//     SelectInput,
//     useNotify,
//     useRefresh,
//     useRedirect,
//     useQuery,
//     TextInput,
// } from 'react-admin';

// const ServiceCreate = (props) => {
//     const notify = useNotify();
//     const refresh = useRefresh();
//     const redirect = useRedirect();

//     const onSuccess = ({ data }) => {
//         notify(`New Service created `);
//         redirect(`/services?filter=%7B"id"%3A"${data.id}"%7D`);
//         refresh();
//     };

//     const [users, setUsers] = useState([]);
//     const { data: user } = useQuery({
//         type: 'getList',
//         resource: 'users',
//         payload: {
//             pagination: { page: 1, perPage: 600 },
//             sort: { field: 'email', order: 'ASC' },
//             filter: {},
//         },
//     });

//     const [services, setServices] = useState([]);
//     const { data: service } = useQuery({
//         type: 'getList',
//         resource: 'services',
//         payload: {
//             pagination: { page: 1, perPage: 1000 },
//             sort: { field: 'title', order: 'ASC' },
//             filter: {},
//         },
//     });


//     useEffect(() => {
//         if (service) setServices(service.map((d) => ({ id: d.title, name: d.title })));
//         if (user)
//             setUsers(user.map((d) => ({ id: d.email, name: d.email })));
//     }, [service, user]);

//     return (
//         <Create {...props} title='Create new Rental' onSuccess={onSuccess}>
//             <SimpleForm>
//                 <TextInput disabled source='staff_id' defaultValue='1' />
//                 <SelectInput source='customer_email' choices={users} />
//                 <SelectInput source='service_title' choices={services} />
//                 <SelectInput source='service_name' />
//                 <SelectInput source='service_discription' />


//             </SimpleForm>
//         </Create>
//     );
// };

// export default RentalCreate;