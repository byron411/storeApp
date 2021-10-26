import React from "react";
import axios from "axios";
import UsuariosList from "./UsuariosList";
import M from 'materialize-css/dist/js/materialize.min.js';

class Usuarios extends React.Component{
    //-----------------------------------------------------
    // Constructores
    //-----------------------------------------------------
    constructor(props){
        super(props);
        this.URL_USUARIOS="http://localhost:5000/usuarios"
        this.state={
            id:'',
            name:'',
            admin:'',
            usuarios:[],
        };
        this.cargarUsuarios=this.cargarUsuarios.bind(this);
        this.cargarFormulario=this.cargarFormulario.bind(this);
        this.editarUsuario=this.editarUsuario.bind(this);
    }

    //---------------------------------------------------------
    //Métodos
    //---------------------------------------------------------
    
    componentDidMount(){
        this.cargarUsuarios();
    }
    

    cargarUsuarios(){
        axios.get(this.URL_USUARIOS)
        .then(res=>{
            this.setState({usuarios:res.data})
            //console.log('usuairos desde el metodo cargar',this.state.usuarios);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    cargarFormulario(usuario){
        console.log('recibo para editar ¿es admin?',usuario.admin);
        this.setState({
            id:usuario._id,
            name:usuario.name,
            admin:usuario.admin
        })
        console.log('estado de admin',this.state.admin);
    }

    editarUsuario(evt){
        const admin=this.state.admin;
        const id=this.state.id;
        evt.preventDefault();
        console.log('Hola desde usuario.js',admin);
        var valor=document.getElementById("admin_usuario").value;
    
        axios.put(this.URL_USUARIOS+'/'+id,{admin:valor})
        .then(res=>{
            M.toast({html:"Modificado"});
            this.cargarUsuarios();
        })
        .catch(err=>{
            M.toast({html:"Selecione usuario"})
        })
        

    }

    render(){
        return(
            <div>
                <UsuariosList usuarios={this.state.usuarios} cargarFormulario={this.cargarFormulario} admin={this.state.admin} editarUsuario={this.editarUsuario} name={this.state.name}/>
                
            </div>
        );
    }
}
export default Usuarios;