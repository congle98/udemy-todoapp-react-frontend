import AuthenticationService from "./AuthenticationService";
import {Link} from "react-router-dom";
import React from "react";

export default function HeaderComponent(props) {
    let isLogin = AuthenticationService.isUserLogin();
    console.log("loadlai");
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><Link to="/" className="navbar-brand">Todos Application</Link></div>
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    {isLogin && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isLogin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {isLogin &&  <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    )
}