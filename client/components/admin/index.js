import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostCreate } from './posts';
import MyLayout from './share/layout';
import { Admin, Resource } from 'react-admin';


const dataProvider = jsonServerProvider('http://localhost:5000/api');

const AdminDashboard = () => {
    console.log(MyLayout)

    return (
        <Admin dataProvider={dataProvider} layout={MyLayout}>
            {/* Define your resources here */}
            <Resource name="posts" list={PostList} create={PostCreate} />
            {/* <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} /> */}
        </Admin>
    );
};

export default AdminDashboard;