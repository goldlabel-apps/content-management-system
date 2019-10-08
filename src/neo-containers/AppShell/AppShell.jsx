import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
// import {
//     LoginForm,
//     BottomAppBar,
//     Confirm,
// } from '../index';
import {
    Button
} from '@material-ui/core/';

class AppShell extends Component {  
    
    render (){
        const { 
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <Button
                    className={cn(classes.classOne)}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        console.log (e.target);
                    }}>
                    AppShell
                </Button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
	};
};

export default (
	connect(
		mapStateToProps, null
	)(withStyles(styles, { withTheme: true })(AppShell))
);
