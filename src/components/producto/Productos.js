import React from "react";
import axios from "axios";
import ProductoForm from "./ProductoForm";
import ProductosList from "./ProductosList";


class Productos extends React.Component{
    constructor(props){
        super(props);
        this.URL_PRODUCTOS='http://localhost:5000/productos';
        this.producto_vacio={_id:-1,descripcion:"", valor_unitario:"",estado:""};
        this.state={
          productos:[],
          productoSeleccionado:this.producto_vacio
        };
        this.cambiosFormulario=this.cambiosFormulario.bind(this);
        this.editarProducto=this.editarProducto.bind(this);
        this.deleteProducto=this.deleteProducto.bind(this);
        this.limpiarFormulario=this.limpiarFormulario.bind(this);
        this.saveProducto=this.saveProducto.bind(this);
      }

    //Conectar a backend
    componentDidMount(){
    axios.get(this.URL_PRODUCTOS).then((respuesta)=>{
    console.log('Este es la respuesta de listar productos',respuesta);
    //console.log('Este es solo el estado',respuesta.data.estado);
    this.setState({productos:respuesta.data})
    }).catch(err=>{
      console.log('hubo un error listando los productos', err);
    });
}
    editarProducto(producto,estado){
        console.log('quiero editar un estudiante',producto,estado);
        var nuevoEstado="";
        if(estado===false){
          nuevoEstado="Agotado";
        }
        else{
          nuevoEstado="Disponible";
        }
        this.setState({productoSeleccionado:{_id:producto._id,descripcion:producto.descripcion, valor_unitario:producto.valor_unitario,estado:nuevoEstado}})
  
    }
  
    deleteProducto(_id){
      //console.log('quiero delete un estudiante'+_id);
      axios.delete(this.URL_PRODUCTOS+'/'+_id);
      this.componentDidMount();
  }
  
    limpiarFormulario(){
      this.setState({productoSeleccionado:this.producto_vacio});
    }
    saveProducto(evt){
      const producto=this.state.productoSeleccionado;
      if(producto.descripcion ==="" || producto.valor_unitario===""){
        document.write('Error en el formulario');
        return;
      }
      
      evt.preventDefault();
      if(this.state.productoSeleccionado._id === -1){
        //console.log('post');
        axios.post(this.URL_PRODUCTOS, {...producto, _id:null}).then((res)=>{
            this.componentDidMount();
            this.limpiarFormulario();
            console.log('todo bien con el post',res,producto);
        }).catch(err=>{
          console.log('Error al hacer post',err);
        });
      }
      else{
        axios.put(this.URL_PRODUCTOS+'/'+producto._id,producto);
        this.componentDidMount();
        this.limpiarFormulario();
        //console.log(this.URL_PRODUCTOS+'/'+producto._id);
      }
       // console.log('vamos a guardar un producto');
    }
    /*Esta función es obligatorio en formularios, se solicita definir una función
    *cuando se vaya a cambiar algo en un formulario
    *necesita ser registrada this.bind
    */
    cambiosFormulario(nuevoEstado){
      console.log('hola cambio',nuevoEstado);
      this.setState({productoSeleccionado:nuevoEstado});
    }
    render(){
        return(
            <div className="container">
          <ProductosList productos={this.state.productos} editarProducto={this.editarProducto} deleteProducto={this.deleteProducto}/>
          <ProductoForm 
          producto={this.state.productoSeleccionado} 
          cambiosFormulario={this.cambiosFormulario} 
          limpiarFormulario={this.limpiarFormulario}
          saveProducto={this.saveProducto}
          />
      </div>
        );
    }
}
 export default Productos;