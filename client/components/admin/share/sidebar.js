import React from 'react';
import { MenuItemLink, Sidebar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
    },
});

const CustomMenu = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar {...props}>
                <MenuItemLink to="/posts" primaryText="Posts" />
                {/* Add more MenuItemLink components for other resources */}
            </Sidebar>
        </div>
    );
};

export default CustomMenu;