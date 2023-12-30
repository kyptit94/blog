import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const PostEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm fullWidth>
                <TextInput source="title" fullWidth />
                <RichTextInput source="content" multiline fullWidth />
                <DateInput source="publishedAt" fullWidth />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;
