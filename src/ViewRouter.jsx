
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    AppShell,
    Auth,
    Home,
    NotFound,
} from './components';

class ViewRouter extends Component {

    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <AppShell>
                        <Switch>
                            <Route exact path="/" render={props => {
                                return (<Home />);
                            }} />
                            <Route exact path="/auth" render={props => {
                                return (<Auth />);
                            }} />
                            <Route component={NotFound} />
                        </Switch>
                    </AppShell>
                </Router>
            </React.Fragment>
        );
    }
}

export default ViewRouter;