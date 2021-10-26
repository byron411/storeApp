import React from "react";
import axios from "axios";
import UsuariosList from "./UsuariosList";
import M from 'materialize-css/dist/js/materialize.min.js';
import { Cabecera } from "../Cabecera";
import { Footer } from "../Footer";

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
        this.eliminarUsuario=this.eliminarUsuario.bind(this);
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
        if(id ==='6172f399f79ed7fbc321b61a'){
            M.toast({html:'No puede editar a un super admin'})
        }
        else{
        axios.put(this.URL_USUARIOS+'/'+id,{admin:valor})
        .then(res=>{
            M.toast({html:"Modificado"});
            this.cargarUsuarios();
        })
        .catch(err=>{
            M.toast({html:"Selecione usuario"})
        })
    }}

    eliminarUsuario(pId){
        


        console.log('va a eliminar el usuario',pId);
        if(pId==='6172f399f79ed7fbc321b61a'){
            M.toast({html:'No puede eliminar a un super admin'})
        }
        else{
            //eslint-disable-next-line no-restricted-globals
            if(confirm('eliminar?')){
                console.log('eliminando...');
        
            axios.delete(this.URL_USUARIOS+'/'+pId)
            .then(res=>{
                M.toast({html:"Eliminado"});
                this.cargarUsuarios();
            })
            .catch(err=>{
                M.toast({html:'Error borrando usuario'});
            })}
        }
    }
    
    render(){
        return(
            <div>
                <Cabecera />
                <UsuariosList usuarios={this.state.usuarios} cargarFormulario={this.cargarFormulario} admin={this.state.admin} editarUsuario={this.editarUsuario} name={this.state.name} eliminarUsuario={this.eliminarUsuario}/>
                <Footer/>    
            </div>

        );
    }
}
export default Usuarios;