import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default PostList;