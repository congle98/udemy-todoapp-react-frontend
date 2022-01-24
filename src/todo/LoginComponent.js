import React, {useState} from "react";
import AuthenticationService from "./AuthenticationService";

export default function LoginComponent(props) {
    let [state, setState] = useState({
        username: "",
        password: "",
        hasLoginFailed: false,
        showSuccessMessage: false,

    });


    function handleUsernameChange(event) {
        setState({
            ...state,
            username: event.target.value,
        });
    }

    function handlePasswordChange(event) {
        setState({
            ...state,
            password: event.target.value
        });
    }
    function loginClicked(){
        if(state.username ==="cong"&& state.password==="123456"){
            props.history.push(`/welcome/${state.username}`);
            AuthenticationService.registerSuccessFullLogin(state.username,state.password);
            setState({
                ...state,
                showSuccessMessage: true,
                hasLoginFailed: false,
            })
        }
        else {
            setState({
                ...state,
                showSuccessMessage:false,
                hasLoginFailed:true,
            })
        }
    }
    return (
        <React.Fragment>
            <div className="container">
                {/*<ShowInvalidCredentials hasLoginFailed={state.hasLoginFailed}/>*/}
                {state.hasLoginFailed && <p className="alert alert-warning">Invalid Credentials</p>}
                {state.showSuccessMessage && <p className="alert alert-success">Login success</p>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={state.showSuccessMessage}/>*/}
                Username:<input className="form-control" type="text" name="username" value={state.username}
                                onChange={(e) => handleUsernameChange(e)}/>
                Password:<input className="form-control" type="password" name="password" value={state.password}
                                onChange={(e) => handlePasswordChange(e)}/>
                <button className="btn btn-primary" onClick={loginClicked}>Login</button>
            </div>

        </React.Fragment>
    )
}