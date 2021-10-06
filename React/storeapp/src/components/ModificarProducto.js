import React from "react";
import "bootstrap/dist/css/bootstrap.css"

class ModificarProducto extends React.Component{

    render(){
        return(
            <div className="modificar-producto">
                <header>
                    <h1>Modificar producto</h1>
                </header>
                <nav></nav>
                <article>
                      <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">ID</label>
                            <div class="col-sm-10">
                            <input type="text" readOnly value="1" class="form-control" id="idcodigo"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Descripción</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="descripcion"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Valor unitario</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="valorunitario"></input>
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
export default ModificarProducto;