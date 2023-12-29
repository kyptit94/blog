import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import Box from '@mui/material/Box';


export const MyAppBar = () => (
    <AppBar color="primary">
        <TitlePortal />
        <Box flex="1" />
        <p>Admin</p>
        <Box flex="1" />
    </AppBar>
);

export default MyAppBar;