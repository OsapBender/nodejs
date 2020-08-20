import React from "react";
import { Route, Switch } from "react-router-dom";

import PageMain from "../page-main/page-main";
import PageError from "../page-error/page-error";
import { MAIN_PAGE_ROUTE, AUTH } from "../../constants/routes";
import "./app.pcss";
import auth from "../auth/auth";

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Switch>
                    <Route exact={ true } path={ MAIN_PAGE_ROUTE } component={ PageMain } />
                    <Route path={ AUTH } component={ auth } />
                    <Route path='*' component={ PageError } />
                </Switch>
            </div>
        );
    }
}
