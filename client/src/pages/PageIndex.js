import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from './home.js';
import Encounter from './encounter';
import Login from './login.js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Upload from './upload.js';
import { useAuthContext } from '../components/AuthContext/index';

function PageIndex() {
    const { user } = useAuthContext();
    return (
        <div className="flex-wrapper">
            <Router>
                <Nav />
                {user
                    ? (
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/encounter">
                                <Encounter />
                            </Route>
                            <Route exact path="/upload">
                                <Upload />
                            </Route>
                            <Redirect from="*" to="/" />
                        </Switch>
                    )
                    : (
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Redirect from="*" to="/" />
                        </Switch>
                    )}
            </Router>
            <Footer />
        </div>
    )
}

export default PageIndex;

