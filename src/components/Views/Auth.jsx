// Auth
import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';

import {
    Avatar,
    Button,
    Card,
    CardHeader,
    CardContent,
    IconButton,
} from '@material-ui/core/';
import IconLogout from '@material-ui/icons/Help';

import { getStore } from '../../';
const sendAction = (lump) => {
    getStore().dispatch(lump)
};

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ]
};

class Auth extends Component {
    render() {
        const {
            classes,
            user,
            history,
        } = this.props;
        // console.log(user)
        return (
            <div className={cn(classes.slimView)}><div className={cn(classes.slimViewInner)}>
                {!user ?

                    <Card className={cn(classes.card)}>
                        <CardHeader
                            title={`Sign in`}
                            subheader={`Using a github account`}
                            avatar={<Avatar src={`/logo192.png`} />}
                            action={
                                <IconButton
                                    aria-label="Help"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sendAction({
                                            type: 'HELP/OPEN'
                                        });
                                    }}
                                >
                                    <IconLogout />
                                </IconButton>
                            }
                        />
                        <CardContent>
                            <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        </CardContent>
                    </Card>


                    :
                    <div className={cn(classes.buttonList)}>
                        <Button
                            color={`secondary`}
                            variant={`contained`}
                            onClick={(e) => {
                                e.preventDefault();
                                history.push(`/`);
                            }}>
                            Home
                    </Button>
                    </div>

                }
            </div></div >
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
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(Auth)))
);
