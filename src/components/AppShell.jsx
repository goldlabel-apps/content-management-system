import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/AppShell.Style';
import {
    Button
} from '@material-ui/core/';

class AppShell extends Component {

    render() {
        const {
            classes,
            store,
            children,
        } = this.props;
        console.log('store', store.auth.user)
        if (!store.auth.user) {
            return null;
        }
        return (
            <React.Fragment>
                <Button
                    className={cn(classes.classOne)}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        console.log(e.target);
                    }}>
                    AppShell
                </Button>
                {children}
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
