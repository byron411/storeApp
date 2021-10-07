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

function App() {
  return (
    
          <div className="App">
                <h1>Login</h1>
                <article>
                      <form>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Usuario</label>
                            <div class="col-sm-9">
                            <input type="text" class="form-control" id="usuario"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class="col-sm-9">
                            <input type="password" class="form-control" id="contraseña"></input>
                            </div>
                        </div>
                        
                        <div>
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </div>
                        </form>
                </article> 
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




