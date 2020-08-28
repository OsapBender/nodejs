import React from "react";
import {Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {MAIN_PAGE_ROUTE, AUTH, CHAT} from "../../constants/routes";

// import PageMain from "../../pages/page-main/page-main";
import PageError from "../../pages/page-error/page-error";
import auth from "../auth/auth";
import chat from "../../pages/chat/chat";
import "./app.pcss";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({component, ...options}) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const finalComponent = isAuth ? component : auth;
    return <Route { ...options } component={ finalComponent } />;
};

const App = () => (
    <div className='app'>
        <Switch>
            <Route exact={ true } path={ MAIN_PAGE_ROUTE } component={ auth } />
            <Route path={ AUTH } component={ auth } />
            <PrivateRoute path={ CHAT } component={ chat } />
            <Route path='*' component={ PageError } />
        </Switch>
    </div>
)

export default App;