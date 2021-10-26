import React from "react";

export class Cabecera extends React.Component{
    render(){
        return(
            <div>
                <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href='/productos'>Productos</a>
                </div>
                <div>
                    <a className="brand-logo" href='/usuarios'>Usuarios</a>
                </div>
                </nav>
      </div>
        );
    }
}