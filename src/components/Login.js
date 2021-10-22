import React from "react";
import {GoogleLogin} from 'react-google-login';
import axios from "axios";
export class Login extends React.Component{
    responseGoogle=(googleResp)=>{
            console.log(googleResp);
            axios.post('http://localhost:5000/auth/google',googleResp)
            .then(data=>console.log('todo bien', data))
            .catch(err=>console.log(err))
    }
    render(){
        return(
                
                    <GoogleLogin
    clientId="236842425131-insapaglakr212inlhpfdvc01thnotri.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            
        );
    }
}

//export default Login;