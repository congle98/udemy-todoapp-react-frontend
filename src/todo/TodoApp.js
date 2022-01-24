import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

function TodoApp(props) {

    return (
        <div className="TodoApp">
            <BrowserRouter>
                <>
                    <Route path="/" exact  component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/welcome" component={WelcomeComponent}/>
                </>
            </BrowserRouter>
        </div>
    );
}

export default TodoApp;

export function LoginComponent() {
    let [state,setState] = useState({
        username:"",
        password:"",
        hasLoginFailed:false,
        showSuccessMessage:false,

    });


    function handleUsernameChange(event){
        setState({
            ...state,
            username:event.target.value,
        });
        console.log(state)
    }
    function handlePasswordChange(event){
        setState({
            ...state,
            password:event.target.value
        });
        console.log(state)
    }
    function loginClicked(){
        if(state.username ==="cong"&& state.password==="123456"){
            setState({
                ...state,
                showSuccessMessage:true,
                hasLoginFailed:false,
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
            <div className="w-50 m-auto">
                {/*<ShowInvalidCredentials hasLoginFailed={state.hasLoginFailed}/>*/}
                {state.hasLoginFailed && <p>Invalid Credentials</p>}
                {state.showSuccessMessage && <p>Login success</p>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={state.showSuccessMessage}/>*/}
                Username:<input className="form-control" type="text" name="username" value={state.username} onChange={(e)=>handleUsernameChange(e)}/><br/>
                Password:<input  className="form-control" type="password" name="password" value={state.password} onChange={(e)=>handlePasswordChange(e)}/>
                <button className="btn btn-primary" onClick={loginClicked}>Login</button>
            </div>

        </React.Fragment>
)
}

export function WelcomeComponent(){
    return (
        <div>
            Welcome Todo application
        </div>
    )
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return (
            <div>Invalid Credentials</div>
        )
    }
    return null
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return (
            <div>Login success</div>
        )
    }
    return null
}



