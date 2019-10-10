// NotFound
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Grid,
    Typography,
} from '@material-ui/core/';

class Content extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <Grid container>
                <Grid item>
                    <div className={cn(classes.view)}>
                        <Typography variant={`h5`}>
                            Content
                        </Typography>

                        <Typography variant={`body1`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ornare nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex velit, vulputate vitae quam eu, molestie scelerisque ligula. Vestibulum sit amet nisl tincidunt, condimentum purus at, fringilla nisl. Proin suscipit libero eget porttitor viverra. Nullam id dui in est porttitor varius vitae vel nibh. Donec congue velit nec diam bibendum, vel facilisis risus auctor. Pellentesque ut nunc imperdiet, porta quam quis, volutpat leo. Nulla eleifend elit quis nisi feugiat, quis tempus purus fermentum. Vestibulum maximus sagittis convallis. Cras quis quam pharetra, rhoncus turpis at, ullamcorper ante. Phasellus tempor tortor in pharetra facilisis.
                        </Typography>

                        <Typography variant={`body1`}>
                        Ut quis purus eu eros viverra interdum ut quis nunc. Fusce ultrices vitae lorem at viverra. Integer fringilla, mauris maximus tempor vulputate, nisl massa porttitor justo, in laoreet enim nisi a mi. Nullam imperdiet magna et semper aliquam. Aenean blandit efficitur nibh, id sodales arcu imperdiet ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nibh id nisl pellentesque finibus. Proin neque lacus, ornare in diam non, eleifend luctus elit. Donec neque felis, bibendum vitae erat id, tincidunt ullamcorper nibh. Nulla mattis leo sed nisl aliquam suscipit nec eu sem. Sed laoreet tortor maximus, dapibus augue ut, consectetur odio. Sed lacus tellus, pulvinar at dolor in, condimentum tempus elit.
                        </Typography>
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
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(Content)))
);
