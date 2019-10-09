import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
} from '@material-ui/core/';
import IconLogout from '@material-ui/icons/ExitToApp';
import { getStore } from '../../';
const sendAction = (lump) => {
    getStore().dispatch(lump)
};

class UserEntity extends Component {
    render() {
        const {
            classes,
            user,
        } = this.props;
        if (!user) {
            return null;
        }
        // console.log()
        return (
            <React.Fragment>
                <Card className={cn(classes.card)}>
                    <CardHeader
                        title={user.displayName}
                        subheader={user.providerData[0].providerId}
                        avatar={<Avatar src={user.photoURL} />}
                        action={
                            <IconButton
                                aria-label="logout"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sendAction({
                                        type: 'AUTH/LOGOUT'
                                    });
                                }}
                            >
                                <IconLogout />
                            </IconButton>
                        }
                    />
                </Card>
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
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(UserEntity)))
);


/*
        <Button
            variant={`contained`}
            color={`primary`}
            >
            Sign out
        </Button>
*/