// NotFound
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core/';

class NotFound extends Component {
    render() {
        const {
            classes,
            nav,
            history,
        } = this.props;

        // console.log('Home', nav, history);

        const mapNav = false;
        return (
            <div className={cn(classes.view)}>

                <div className={cn(classes.pad)}>
                    <Card className={cn(classes.card)}>
                        <CardHeader
                            title={`listingslab`}
                            subheader={`globally relevant javaScript engineering`}
                        />
                        <CardMedia
                            className={classes.media}
                            image={`/png/graphics/404.png`}
                            title={`Full Stack JavaScript Web development`}
                        />
                        <CardContent>
                            <Typography variant={`body1`}>
                                With over 20 years experience of professional Full Stack JavaScript
                                Web development we specialise in creating Progressive Web Apps using React
                                and Node JS.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Grid container>
                    {mapNav ?
                        nav.map((item, i) => {
                            const {
                                label,
                                description,
                                icon,
                                path,
                            } = item;
                            if (path === `/`) {
                                return null;
                            }
                            return (
                                <Grid key={`teaser_${i}`} item xs={12} sm={6} md={6}>
                                    {label}
                                    {description}
                                    {icon}
                                    {path}
                                </Grid>
                            );
                        })
                        : null}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
    };
};

export default (
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(NotFound)))
);
