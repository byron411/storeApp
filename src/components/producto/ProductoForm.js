import React from 'react';
class ProductoForm extends React.Component{
    descripcionCambio=(evt)=>{
        const producto=this.props.producto;
        const nuevoProducto={ ...producto, descripcion: evt.target.value};
        console.log('cambió la descripcion', evt.target.value, producto, nuevoProducto);
        this.props.cambiosFormulario(nuevoProducto);

    }
    render(){
        const producto=this.props.producto;

        return(
            <div onSubmit={this.props.saveProducto}>



<div className="container">
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
                      <input type="text" 
                      value={producto.estado} 
                      onChange={(evt)=>this.props.cambiosFormulario({ ...producto, estado:evt.target.value})}></input>
                      
                      
                  </div>
                  <input className="btn light-blue darken-4" type='submit' value={producto._id != -1 ? 'Editar':'Crear'} />
                  <input className="btn light-blue darken-4" style={{margin:'4px'}}  type='button' value="Limpiar" onClick={this.props.limpiarFormulario}/>
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