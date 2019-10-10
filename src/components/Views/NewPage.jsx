// NotFound
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Grid,
} from '@material-ui/core/';

class NewPage extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <Grid container>
                <Grid item>
                    <div className={cn(classes.view)}>
                        Content
                    </div>
                </Grid>
            </Grid>
            
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
    };
};

export default (
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(NewPage)))
);
