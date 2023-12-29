import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="content" multiline />
                <DateInput source="publishedAt" />
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;
