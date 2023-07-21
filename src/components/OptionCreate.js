// import React, { useState, useEffect } from 'react';
// import {
//     Create,
//     SimpleForm,
//     SelectInput,
//     useNotify,
//     useRefresh,
//     useRedirect,
//     useQuery,
//     TextInput,
// } from 'react-admin';

// const OptionCreate = (props) => {
//     const notify = useNotify();
//     const refresh = useRefresh();
//     const redirect = useRedirect();

//     const onSuccess = ({ data }) => {
//         notify(`New Rental created `);
//         redirect(`/options?filter=%7B"id"%3A"${data.id}"%7D`);
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

//     const [Options, setOptions] = useState([]);
//     const { data: option } = useQuery({
//         type: 'getList',
//         resource: 'options',
//         payload: {
//             pagination: { page: 1, perPage: 1000 },
//             sort: { field: 'title', order: 'ASC' },
//             filter: {},
//         },
//     });


//     useEffect(() => {
//         if (option) setOptions(option.map((d) => ({ id: d.title, name: d.title })));
//         if (option)
//             setOptions(user.map((d) => ({ id: d.email, name: d.email })));
//     }, [option, user]);

//     return (
//         <Create {...props} title='Create new Option' onSuccess={onSuccess}>
//             <SimpleForm>
//                 <TextInput disabled source='staff_id' defaultValue='1' />
//                 <SelectInput source='user_email' choices={users} />
//                 <SelectInput source='option_name' choices={option} />
//                 <SelectInput source='option_price' />

//             </SimpleForm>
//         </Create>
//     );
// };

// export default OptionCreate;