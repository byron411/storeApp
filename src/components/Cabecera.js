import React from "react";

export class Cabecera extends React.Component{
    render(){
        console.log('hay algo aqui?',sessionStorage.getItem('token'))
        let logButton="";
        if(sessionStorage.getItem('token')){
            logButton=<button  type="button" onClick={()=>{
                sessionStorage.removeItem('token');
                window.location.assign('/');
            }}       ><i class="material-icons right">exit_to_app</i></button>


        }
       
        return(
            <div>
            
                <nav className="light-blue darken-4" id="cabecera">
                    <div >
                    <a href="/" className="brand-logo">Admin</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/usuarios">Usuarios</a></li>
                        <li>{logButton}</li>                        
                    </ul>
                    </div>
  </nav>

                
      </div>
        );
    }
}