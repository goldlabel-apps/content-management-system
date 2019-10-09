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

// import {
//     Button
// } from '@material-ui/core/';

// import { getStore } from '../../';
// const sendAction = (lump) => {
//     getStore().dispatch(lump)
// };

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
};

class Auth extends Component {
    render() {
        const {
            classes,
            // history,
        } = this.props;

        return (
            <div className={cn(classes.slimView)}><div className={cn(classes.slimViewInner)}>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                <div className={cn(classes.buttonList)}>
                    button list
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
