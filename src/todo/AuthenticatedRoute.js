import React from 'react';
import {Redirect, Route} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

export  default function AuthenticatedRoute(props) {
    if(AuthenticationService.isUserLogin()){
        return <Route {...props}/>
    }
    else {
        return <Redirect to="/login"/>
    }
    // return (
    //    <React.Fragment>
    //        {
    //            AuthenticationService.isUserLogin()&&<Route {...props}/>
    //        }
    //        {
    //            !AuthenticationService.isUserLogin()&&<Redirect to="/login"/>
    //        }
    //    </React.Fragment>
    // );
}

