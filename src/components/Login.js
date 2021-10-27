import React from "react";
import {GoogleLogin} from 'react-google-login';
import axios from "axios";
import { Footer } from "./Footer";


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
            <div>
        <nav className=" blue-grey darken-4 lighten-1" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">AdminSales</a>
    
            <ul className="right hide-on-med-and-down">
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Acerca de</a></li>
            </ul>
            <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>


  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      
      <h1 class="header center blue-text">Sistema de Gestión de Ventas</h1>
      <div class="row center">
        <h5 class="header col s12 light">Gestión de ventas, usuarios y productos</h5>
      </div>
      <div class="row center">
        
        <GoogleLogin
            clientId="236842425131-insapaglakr212inlhpfdvc01thnotri.apps.googleusercontent.com"
            buttonText="Acceder con Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}/> 
      </div>
    </div>
    </div>

    <div class="container">
    <div class="section">

      
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">business_center</i></h2>
            <h5 class="center">Productos</h5>

            <p class="light">Gestiona la información de tus productos. Puedes consultar, agregar, modificar tus productos a partir de campos como indentificador, descripción, valor unitario y estado (Disponible - Agotado).</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">layers</i></h2>
            <h5 class="center">Ventas</h5>

            <p class="light">Gestiona tus ventas. La applicación contiene una GUI para el registro de ventas realizadas y otra para listar buscar y actualizar las ventas de tus productos. Las ventas contienen información como: Identificador unido de venta, valor total de la venta, cantidad y precio unitario de cada producto, fecha de venta, el documento de identificación y nombre del cliente.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group_add</i></h2>
            <h5 class="center">Usuarios</h5>

            <p class="light">Gestion de usuarios. Puedes registrarte con una cuenta de Google para empezar a utilizar la aplicación. Una vez dentro asigna rol de administrador o vendedor para empezar a crear productos o ventas.</p>
          </div>
        </div>
      </div>

    </div>
    
    
  </div>

  <Footer />
  
       
    </div>
        );
    }
}

//export default Login;