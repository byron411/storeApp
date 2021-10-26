import React from "react";
import axios from "axios";
import ProductoForm from "./ProductoForm";
import ProductosList from "./ProductosList";
import M from 'materialize-css/dist/js/materialize.min.js';
import { Cabecera } from "../Cabecera";


class Productos extends React.Component{
    constructor(props){
        super(props);
        this.URL_PRODUCTOS='http://localhost:5000/productos';
        this.producto_vacio={_id:false,descripcion:"", valor_unitario:"",estado:""};
        
        this.state={
          productos:[],
          productoSeleccionado:this.producto_vacio,
        };
        this.cambiosFormulario=this.cambiosFormulario.bind(this);
        this.editarProducto=this.editarProducto.bind(this);
        this.deleteProducto=this.deleteProducto.bind(this);
        this.limpiarFormulario=this.limpiarFormulario.bind(this);
        this.saveProducto=this.saveProducto.bind(this);
        
      }

    //Conectar a backend
    componentDidMount(){
      
    axios.get(this.URL_PRODUCTOS, {
      headers:{
        token: sessionStorage.getItem('token')
      }}).then((respuesta)=>{
    console.log('Este es la respuesta de listar productos',respuesta);
    //console.log('Este es solo el estado',respuesta.data.estado);
    this.setState({productos:respuesta.data})
    }).catch(err=>{
      console.log('hubo un error listando los productos', err);
    });
}
    editarProducto(producto){
        this.setState({productoSeleccionado:producto});
        console.log('quiero editar un estudiante el nuevo producto es', producto); 
        
           
    }
  
    deleteProducto(_id){
      //console.log('quiero delete un estudiante'+_id);
      //eslint-disable-next-line no-restricted-globals
      if(confirm('¿Seguro desea eliminar?')){
      axios.delete(this.URL_PRODUCTOS+'/'+_id, {
        headers:{
          token: sessionStorage.getItem('token')
        }});
      this.componentDidMount();
      M.toast({html:'Producto eliminado'});
      this.componentDidMount();
      /*axios.get(this.URL_PRODUCTOS, {
        headers:{
          token: sessionStorage.getItem('token')
        }}).then((respuesta)=>{
        this.setState({productos:respuesta.data})
        M.toast({html:'Producto eliminado'});
        }).catch(err=>{
          console.log('hubo un error listando los productos', err);
        });*/
  }}
  
    limpiarFormulario(){
      this.setState({productoSeleccionado:this.producto_vacio});
    }
    //funcion para guardar un objeto producto
    saveProducto(evt){
      const producto=this.state.productoSeleccionado;
      if(producto.descripcion ==="" || producto.valor_unitario===""){
        document.write('Error en el formulario');
        return;
      }
      
      evt.preventDefault();
      if(this.state.productoSeleccionado._id === false){
        var elestado=producto.estado;
        if (elestado===''){
          elestado=1;
        }

        var productoInser={descripcion:producto.descripcion,valor_unitario:producto.valor_unitario,estado:elestado};
        console.log('esto es lo que insertare',productoInser);
        axios.post(this.URL_PRODUCTOS, productoInser, {
          headers:{
            token: sessionStorage.getItem('token')
          }}).then((res)=>{
            this.componentDidMount();
            this.limpiarFormulario();
            console.log('todo bien con el post',res,producto);
            M.toast({html:"Producto agregado"});
            this.componentDidMount();
        }).catch(err=>{
          console.log('Error al hacer post',err);
        });
      }
      else{
        console.log('ruta:',this.URL_PRODUCTOS+'/'+producto._id,producto);
        axios.put(this.URL_PRODUCTOS+'/'+producto._id,producto, {
          headers:{
            token: sessionStorage.getItem('token')
          }});
          this.componentDidMount();
          this.limpiarFormulario();
          M.toast({html:'Producto modificado'});
          this.componentDidMount();
         
      }
       // console.log('vamos a guardar un producto');
    }
    /*Esta función es obligatorio en formularios, se solicita definir una función
    *cuando se vaya a cambiar algo en un formulario
    *necesita ser registrada this.bind
    */
    cambiosFormulario(nuevoEstado){
      /*var combo=document.getElementById("estado_producto");
      var seleccionado=combo.options[combo.selectedIndex].text;
      var asignar=Number;
      console.log(seleccionado);
      console.log(nuevoEstado._id);
      let recibido={};//{descripcion:nuevoEstado.descripcion,valor_unitario:nuevoEstado.valor_unitario,estado:0};
      
      if (seleccionado==='Agotado'){
        asignar=0;
      }
      else{
        asignar=1;
      }
      if (asignar>0){
        recibido={_id:true,descripcion:nuevoEstado.descripcion,valor_unitario:nuevoEstado.valor_unitario,estado:1}
        this.setState({productoSeleccionado:recibido})
        console.log(recibido);
      }
      else{
        recibido={_id:true,descripcion:nuevoEstado.descripcion,valor_unitario:nuevoEstado.valor_unitario,estado:0}
        this.setState({productoSeleccionado:recibido})
        console.log(recibido);
      }
      /*console.log('hola cambio',nuevoEstado);
      this.setState({productoSeleccionado:nuevoEstado});*/

      

      console.log('este print esta en Producto.js cambiosFormulario',nuevoEstado);
      this.setState({productoSeleccionado:nuevoEstado});
    }

    
  
    render(){

        return(
          <div>
            <Cabecera />
            <div className="container">
            
          <ProductosList productos={this.state.productos} 
          editarProducto={this.editarProducto} deleteProducto={this.deleteProducto}/>
          <ProductoForm 
          producto={this.state.productoSeleccionado} 
          cambiosFormulario={this.cambiosFormulario} 
          limpiarFormulario={this.limpiarFormulario}
          saveProducto={this.saveProducto}
          />
      </div>
      </div>
        );
    }
}
 export default Productos;