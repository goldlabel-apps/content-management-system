import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Button
} from '@material-ui/core/';
import { getStore } from '../../';
const sendAction = (lump) => {
    getStore().dispatch(lump)
};

class Home extends Component {



    render() {
        const {
            classes,
            user,
            history,
        } = this.props;
        console.log(user);
        if (!user) {
            history.push('/auth');
            return null;
        }
        return (
            <React.Fragment>
                <div className={cn(classes.slimView)}><div className={cn(classes.slimViewInner)}>
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        onClick={(e) => {
                            e.preventDefault();
                            sendAction({
                                type: 'AUTH/LOGOUT'
                            });
                        }}>
                        Logout
                    </Button>
                </div></div>
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
