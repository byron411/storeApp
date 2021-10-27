import React from "react";
import M from 'materialize-css/dist/js/materialize.min.js';

class UsuariosList extends React.Component{

   
    render(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
          });
        const usuarios=this.props.usuarios;
        const admin=this.props.admin;
        const name=this.props.name;
        console.log('usuarios desde la vista lista',usuarios);
        console.log('admin desde la vista lista',admin);
        const filaUsuario=usuarios.map((i,pos)=>{
            return(
            <tr key={pos}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.admin.toString()}</td>
                <td>
                    <button className="btn light-blue darken-4" type="button" onClick={()=>this.props.cargarFormulario(i)}>
                        <i className="material-icons">edit</i>
                    </button>
                </td>
                <td>
                    <button className="btn light-blue darken-4" type="button" 
                    onClick={()=>this.props.eliminarUsuario(i._id)}>
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>);
        })
        return(
            
            <div>
                <div className="container">
                
            <h5>Lista usuarios</h5>
                        <div className="row">
                            <div className="col s5">
                                <div className="card">
                                    <div className="card-content">
                                    <h5>Cambiar Rol</h5>
                                        <form onSubmit={this.props.editarUsuario}>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text" disabled value={name} placeholder="Nombre"></input>
                                                </div>
                                                <div className="input-field col s12">
                                                <label>¿Actualmente es admin?</label>
                                                    <input type="text" disabled name="title" value={admin ===true ? 'Si':'No'}></input>
                                                </div>

                                                <div>
                  <label>¿Hacer administrador?</label>
                      <select id="admin_usuario">
                            <option value="true">Si</option>
                          <option value="false" >No</option>
                          
                          
                      </select>
                  </div>
                                            </div>

                                            
                                            <button className="btn light-blue darken-4" type="submit">Editar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col s7">
                                <table>
                                <caption>Lista de Usuarios</caption>
                                    <thead>
                                        <tr>
                                            <th>Nombres</th>
                                            <th>Email</th>
                                            <th>¿Es admin?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filaUsuario}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default UsuariosList;