
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import cn from 'classnames';
import { styles } from './AppShell.Style';
// import {
//     LoginForm,
//     BottomAppBar,
//     Confirm,
// } from '../index';
// import {
//     Grid,
//     LinearProgress,
// } from '@material-ui/core/';

class AppShell extends Component {  
    
    render (){
        // const { 
        //     classes,
        //     loading,
        // } = this.props;
        // const {
        //     user,
        // } = this.props.store.auth;
        
        // console.log ('loading', loading);
        // const loading = false;

        
        
        return (
            <React.Fragment>
AppShell
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
        loading: store.top.loading,
	};
};

export default (
	connect(
		mapStateToProps,
        null
	)(withStyles(styles, { withTheme: true })(AppShell))
);
