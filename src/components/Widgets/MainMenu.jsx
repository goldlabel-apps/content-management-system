import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/';
import IconLink from '@material-ui/icons/Link';
// import { getStore } from '../../';
// const sendAction = (lump) => {
//     getStore().dispatch(lump)
// };

class MainMenu extends Component {
    render() {
        const {
            classes,
            user,
        } = this.props;
        if (!user) {
            return null;
        }
        // console.log()
        return (
            <React.Fragment>
                <Card className={cn(classes.card)}>
                    <CardHeader
                        title={`Main Menu`}
                        subheader={`pick & choose`}
                        avatar={<Avatar src={`/logo192.png`} />}
                    />
                    <CardContent>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemIcon>
                                    <IconLink />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                                <ListSubheader>las</ListSubheader>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </React.Fragment>
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
    connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(MainMenu)))
);


/*
<Button
        variant={`contained`}
        color={`primary`}
    >
        Sign out
</Button>
    */