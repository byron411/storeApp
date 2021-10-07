import logo from './logo.svg';
import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Productos from './components/Productos';
import ModificarProducto from './components/ModificarProducto';
import InfoModificado from './components/InfoModificado';
import Ventas from './components/Ventas';
import ModificarVenta from './components/ModificarVenta';
import InfoModiVenta from './components/InfoModiVenta';
import Usuarios from './components/Usuarios';
import ModificarUsuario from './components/ModificarUsuario';
import Login from './components/login';

function App() {
  return (
    
          <div className="App">
                <br />
                <Login />
                <br />
                <Productos />
                <ModificarProducto />
                <InfoModificado />
                <Ventas />
                <ModificarVenta />
                <InfoModiVenta />
                <Usuarios />
                <ModificarUsuario />
    
            </div>

    
  );
}
 



export default App;




