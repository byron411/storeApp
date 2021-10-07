import React from "react";
import "bootstrap/dist/css/bootstrap.css"

class ModificarUsuario extends React.Component{

    render(){
        return(
            <div className="modificar-usuario">
                <header>
                    <h1>Modificar Usuario</h1>
                </header>
                <nav></nav>
                <article>
                      <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Cedula</label>
                            <div class="col-sm-10">
                            <input type="text" readOnly value="1143555674" class="form-control" id="cedula"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                            <input type="text" readOnly value="Luis Escobar" class="form-control" id="nombre"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Usuario</label>
                            <div class="col-sm-10">
                            <input type="text" readOnly value="lescobar@gmail.com" class="form-control" id="usuario"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class="col-sm-10">
                            <input type="text" readOnly value="*******" class="form-control" id="contraseña"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Rol</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="rol"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Estado</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="estado"></input>
                            </div>
                        </div>
                        
                        <div>
                            <button type="submit" class="btn btn-primary">Modificar</button>
                            <button type="button" class="btn btn-danger">Cancelar</button>
                        </div>
                        </form>
                </article>
                
            </div>
        );
    }
}
export default ModificarUsuario;