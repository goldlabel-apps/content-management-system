import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
// import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Grid,
} from '@material-ui/core/';
import { UserEntity, MainMenu } from '../';
// import { getStore } from '../../';
// const sendAction = (lump) => {
//     getStore().dispatch(lump)
// };


class Home extends Component {
    render() {
        const {
            user,
            history,
        } = this.props;
        if (!user) {
            history.push('/auth');
            return null;
        }
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={6}>
                        <MainMenu />
                    </Grid>
                    <Grid item xs={6}>
                        <UserEntity />
                    </Grid>
                </Grid>

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
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(Home)))
);
