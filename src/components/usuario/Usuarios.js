import React from "react";
import UsuarioForm from "./usuarioForm";
import UsuariosList from "./UsuariosList";

class Usuarios extends React.Component{
    render(){
        return(
            <div>
                <UsuariosList />
                <UsuarioForm />
            </div>
        );
    }
}
export default Usuarios;