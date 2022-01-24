import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponet";
import FooterComponent from "./FooterComponent";

function TodoApp(props) {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    );
}

export default TodoApp;









