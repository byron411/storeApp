import React from 'react';
import './App.css';
import Productos from './components/producto/Productos';
import Usuarios from './components/usuario/Usuarios';
import {Login} from './components/Login';
import { Ventas } from './components/Ventas';

class App extends React.Component {
  state={
    componenteVisible:'productos',
    isProductosVisible:true,
    isUsuariosVisible:false,
    isInicioVisible:false,
  }

  constructor(props){
    super(props);
    console.log('constructor:', window.location.pathname);
    this.state={
      //componenteVisible:'productos',
      isProductosVisible:window.location.pathname==='/productos',
      isUsuariosVisible:window.location.pathname==='/usuarios',
      isInicioVisible:window.location.pathname==='/'
    }
  }

  showProductos =()=>{
    console.log('mostrar productos');
    this.setState({isUsuariosVisible:false, isProductosVisible:true, isInicioVisible:false})
  }
  showUsuarios =()=>{
    console.log('mostrar usuarios');
    this.setState({isUsuariosVisible:true, isProductosVisible:false, isInicioVisible:false})
  }
  showInicio=()=>{
    this.setState({isUsuariosVisible:false, isProductosVisible:false, isInicioVisible:true})
  }
  render(){
    
    console.log(window.location.pathname);
    /*if(window.location.pathname==='/usuarios'){
      console.log('debemos mostrar los usuairos')
    }
    else if(window.location.pathname==='/productos'){
      console.log('debemos mostrar los pruductos');
    }*/
    let mostrar='';
    if(this.state.isUsuariosVisible){
      window.history.pushState({},'','/usuarios');
      mostrar=<Usuarios />;
    }
    else if(this.state.isProductosVisible){
      window.history.pushState({},'','/productos');
      mostrar=<Productos />;
    }
    else if(this.state.isInicioVisible){
      window.history.pushState({},'','/');
      mostrar=<Login />;
    }
    return(<div>{mostrar}</div>);
  }
}
  
export default App;
