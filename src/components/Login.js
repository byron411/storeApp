import React from "react";
import {GoogleLogin} from 'react-google-login';
import axios from "axios";
export class Login extends React.Component{
    responseGoogle=(googleResp)=>{
            console.log(googleResp);
            axios.post('http://localhost:5000/auth/google',{"token": googleResp.tokenId})
            .then(resp=>{
                window.location.assign('/productos');
                console.log('todo bien este es el token',resp.data)
                sessionStorage.setItem('token',resp.data);
            })
            .catch(err=>console.log('hubo error', err))
    }
    render(){
        return(
    <GoogleLogin
    clientId="236842425131-insapaglakr212inlhpfdvc01thnotri.apps.googleusercontent.com"
    buttonText="Acceder con Google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}/>    
        );
    }
}

//export default Login;