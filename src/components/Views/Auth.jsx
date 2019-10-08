// Auth
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core/';

class Auth extends Component {
    render() {
        const {
            classes,
            // history,
        } = this.props;

        return (
            <div className={cn(classes.view)}>
                <Card className={cn(classes.card)}>
                    <CardHeader
                        title={`AUTH`}
                        subheader={`McAuthorise yourself`}
                    />
                    <CardMedia
                        className={classes.media}
                        image={`/img/wp-json.png`}
                        title={`Full Stack JavaScript Web development`}
                    />
                    <CardContent>
                        <Typography variant={`body1`}>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
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
