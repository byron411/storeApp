import React from 'react';

class ProductosList extends React.Component{
    render(){
        const productos=this.props.productos;
        
        console.log(typeof(productos));
        const productoRow=productos.map((st, index)=>{
            var nuevoEstado="";
            if (st.estado===false){
                nuevoEstado="Agotado";
            }
            else{
                nuevoEstado="Disponible";
            }
            return(
                <tr key={index}>
                        <td>{st._id}</td>
                        <td>{st.descripcion}</td>
                        <td>{new Intl.NumberFormat("co-CO",{style:"currency",currency:"COP"}).format(st.valor_unitario)}</td>
                        <td>{nuevoEstado}</td>
                        <td><button
                         className="btn light-blue darken-4"
                        type="button" 
                        onClick={()=>this.props.editarProducto({_id:st._id,descripcion:st.descripcion,valor_unitario:st.valor_unitario,estado:st.estado})}
                        ><i className="material-icons">edit</i></button></td>
                    <td><button 
                    className="btn light-blue darken-4"
                    type="button" onClick={()=>this.props.deleteProducto(st._id)}>
                        <i className="material-icons">delete</i>
                    </button></td>
                </tr>
            )            
        });
        return(
            <div>
                <div>
                <h5>Lista productos</h5>
                        <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descripción</th>
                                <th>Valor unitario</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productoRow}
                        </tbody>
                        </table>
                </div>
            </div>
        );
    }
}
export default ProductosList;