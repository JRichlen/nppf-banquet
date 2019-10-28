import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6'>
                    {'NPPF Banquet'}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);
