import React from "react";

export class Cabecera extends React.Component{
    render(){
        console.log('hay algo aqui?',sessionStorage.getItem('token'))
        let logButton="";
        if(sessionStorage.getItem('token')){
            logButton=<button  className="btn-floating btn-large waves-effect waves-light red accent-4"  type="button" onClick={()=>{
                sessionStorage.removeItem('token');
                window.location.assign('/');
            }}       ><i className="material-icons">exit_to_app</i></button>


        }
       
        return(
            <div>
  <nav className=" blue-grey darken-4 lighten-1" role="navigation" style={{height:'70px'}}>
            <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">AdminSales</a>
    
            <ul className="right hide-on-med-and-down">
            <li><a href="/productos">Productos</a></li>
            <li><a href="/usuarios">Usuarios</a></li>
            <li><a href="/ventas">Ventas</a></li>
            <li>{logButton}</li>
            </ul>
            <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>    
      </div>
        );
    }
}