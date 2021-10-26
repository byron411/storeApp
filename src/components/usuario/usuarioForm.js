import React from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
class UsuarioForm extends React.Component{
    render(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
          });
        return(
            <div >
                <div className="container" style={{width:'100%'}}>
                    <h5>Crear/Editar</h5>
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content" style={{margin:'4px'}}>
                                <form>
                                    <div>
                                        <label>Descripción</label>
                                        <input type="text" required
                                        onChange={{}}></input>
                                    </div>   
                                    <div>
                                        <label>Valor unitario</label>
                                        <input type="number" required
                                        value={{}} 
                                        onChange={{}}></input>
                                    </div>
                  
                                    <div>
                                        <label>Estado</label>
                                        <select id="estado_producto"
                                        onChange={{}}>
                                        <option value="true">Disponible</option>
                                        <option value="false" >Agotado</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input className="btn light-blue darken-4" type='submit' value="Crear" style={{margin:'4px'}}/>
                                    </div>
                                    <div>
                                        <input className="btn light-blue darken-4" style={{margin:'4px'}}  type='button' value="Limpiar" onClick={{}}/>
                                    </div>
                                </form>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>


              
          </div>
        );
    }
}
 export default UsuarioForm;