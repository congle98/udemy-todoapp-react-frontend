
class AuthenticationService {
    static registerSuccessFullLogin(username,password){
        localStorage.setItem("authenticatedUser",username);
    }

    static logout(){
        localStorage.removeItem("authenticatedUser");
    }

    static isUserLogin(){
        let isLogin = localStorage.getItem("authenticatedUser");
        return !!isLogin;

    }

}

export default AuthenticationService;