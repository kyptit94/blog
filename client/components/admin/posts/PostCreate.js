import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const PostCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm fullWidth>
                <TextInput source="title" fullWidth />
                <RichTextInput source="content" multiline fullWidth />
                <DateInput source="publishedAt" fullWidth />
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;
