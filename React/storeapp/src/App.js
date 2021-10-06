import logo from './logo.svg';
import './App.css';
import React from 'react'
import Productos from './components/Productos';
import ModificarProducto from './components/ModificarProducto';
import InfoModificado from './components/InfoModificado';
import Ventas from './components/Ventas';
import ModificarVenta from './components/ModificarVenta';
import InfoModiVenta from './components/InfoModiVenta';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
    
      </header>
      <Productos />
      <ModificarProducto />
      <InfoModificado />
      <Ventas />
      <ModificarVenta />
      <InfoModiVenta />
    </div>
    
  );
}
 



export default App;