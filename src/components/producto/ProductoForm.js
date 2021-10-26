import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
class ProductoForm extends React.Component{
    descripcionCambio=(evt)=>{
        const producto=this.props.producto;
        const nuevoProducto={ ...producto, descripcion: evt.target.value};
        console.log('cambió la descripcion', evt.target.value, producto, nuevoProducto);
        this.props.cambiosFormulario(nuevoProducto);

    }
    render(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
          });
        const producto=this.props.producto;
        //console.log('quiero veer el combobox',producto.estado,'nada');
        //console.log('quiero veer el txt descripcion',producto.descripcion,'nada');
        
        return(
            <div onSubmit={this.props.saveProducto}>



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
                      value={producto.descripcion} 
                      onChange={this.descripcionCambio}></input>
                  </div>   
                  <div>
                      <label>Valor unitario</label>
                      <input type="number" required
                      value={producto.valor_unitario} 
                      onChange={(evt)=>this.props.cambiosFormulario({ ...producto, valor_unitario: evt.target.value})}></input>
                  </div>
                  
                  <div>
                  <label>Estado</label>
                      <select id="estado_producto" 
                      
                      onChange={(evt)=>this.props.cambiosFormulario({ ...producto, estado:evt.target.value})}>
                            <option value="true">Disponible</option>
                          <option value="false" >Agotado</option>
                          
                          
                      </select>
                  </div>
                  <div>
                  <input className="btn light-blue darken-4" type='submit' value={producto._id !== false ? 'Editar':'Crear'} style={{margin:'4px'}}/>
                  </div>
                  <div>
                  <input className="btn light-blue darken-4" style={{margin:'4px'}}  type='button' value="Limpiar" onClick={this.props.limpiarFormulario}/>
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
export default ProductoForm;