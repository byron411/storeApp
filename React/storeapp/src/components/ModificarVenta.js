import React from "react";
import "bootstrap/dist/css/bootstrap.css"

class ModificarVenta extends React.Component{

    render(){
        return(
            <div className="modificar-venta">
                <header>
                    <h1>Modificar venta</h1>
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
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Fecha</label>
                            <div class="col-sm-10">
                            <input type="date" class="form-control" id="fecha"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Nombre cliente</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="nombre"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Documento cliente</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="documento"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Vendedor</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="vendedor"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Estado</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="estado"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">precio unitario</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="precio"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Cantidad</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="cantidad"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Valor total</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="total"></input>
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
export default ModificarVenta;