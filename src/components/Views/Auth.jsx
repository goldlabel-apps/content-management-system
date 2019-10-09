// Auth
import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui'
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import '../../theme/firebaseui-styling.global.css';

import {
    Button
} from '@material-ui/core/';

import { getStore } from '../../';

const sendAction = (lump) => {
    getStore().dispatch(lump)
};

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    'credentialHelper': firebaseui.auth.CredentialHelper.NONE
};

class Auth extends Component {
    render() {
        const {
            classes,
            // history,
        } = this.props;

        return (
            <div className={cn(classes.slimView)}><div className={cn(classes.slimViewInner)}>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <div className={cn(classes.buttonList)}>
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        onClick={(e) => {
                            e.preventDefault();
                            sendAction({
                                type: 'AUTH/TEST',
                                payload: {
                                    kuahsfkushf: 123
                                }
                            });
                            // console.log('click', e)
                        }}
                    >
                        Trigger saga
                    </Button>
                </div>
            </div></div >
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store
    };
};

export default (
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(Auth)))
);
