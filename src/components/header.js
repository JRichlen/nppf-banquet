import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHeaderStyles} from '../styles/header';

export const Header = () => {
    const classes = useHeaderStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        aria-label='menu'
                        className={classes.menuButton}
                        color='inherit'
                        edge='start'
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        className={classes.title}
                        variant='h6'
                    >
                        {'NPPF Banquet'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
