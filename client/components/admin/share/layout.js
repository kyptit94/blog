import React from 'react';
import { Layout } from 'react-admin';
import Sidebar from './sidebar';
import Appbar from './appbar';

const MyLayout = (props) => (
    <Layout
        {...props}
        appBar={Appbar}
        sideBar={Sidebar}
    />
);

export default MyLayout;