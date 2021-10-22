import React from 'react';
import './App.css';
import Productos from './components/producto/Productos';
import Usuarios from './components/usuario/Usuarios';
import {Login} from './components/Login';

class App extends React.Component {
  state={
    componenteVisible:'productos',
    isProductosVisible:true,
    isUsuariosVisible:false
  }

  constructor(props){
    super(props);
    console.log('constructor:', window.location.pathname);
    this.state={
      //componenteVisible:'productos',
      isProductosVisible:window.location.pathname==='/productos',
      isUsuariosVisible:window.location.pathname==='/usuarios'
    }
  }

  showProductos =()=>{
    console.log('mostrar productos');
    this.setState({isUsuariosVisible:false, isProductosVisible:true})
  }
  showUsuarios =()=>{
    console.log('mostrar usuarios');
    this.setState({isUsuariosVisible:true, isProductosVisible:false})
  }
  render(){
    console.log(window.location.pathname);
    /*if(window.location.pathname==='/usuarios'){
      console.log('debemos mostrar los usuairos')
    }
    else if(window.location.pathname==='/productos'){
      console.log('debemos mostrar los pruductos');
    }*/
    let mostrar=<div>Página incorrecta</div>;
    if(this.state.isUsuariosVisible){
      window.history.pushState({},'','/usuarios');
      mostrar=<Usuarios />;
    }
    else if(this.state.isProductosVisible){
      window.history.pushState({},'','/productos');
      mostrar=<Productos />;
    }
    return(

      

      <div className="container">
      
      <div>
        <nav className="light-blue darken-4">
          <div className="container">
            <a className="brand-logo" href='/productos'>Productos</a>
          </div>
          <div>
            <a className="brand-logo" href='/usuarios'>Usuarios</a>
          </div>
        </nav>
      </div>
       <div>
            
            {mostrar}
          </div>
          <div>
            <Login />
          </div>
      </div>
    )
  }
}
  
export default App;
