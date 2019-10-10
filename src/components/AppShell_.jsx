import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
// import {
//     Grid,
// } from '@material-ui/core/';
import { DrawerNav } from './';

class AppShell extends Component {
    render() {
        const {
            user,
            history,
            children
        } = this.props;
        if (!user) {
            history.push('/auth');
            return null;
        }
        return (
            <React.Fragment>
                <DrawerNav />
                {children}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        user: store.auth.user
    };
};

export default (
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(AppShell)))
);

/*
    <Grid container>
        <Grid item xs={3}>
            <UserEntity />
        </Grid>
        <Grid item xs={9}>
            <MainMenu />
        </Grid>
    </Grid>
*/