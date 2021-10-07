import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


class Login extends React.Component{
    render(){
        return(
  
            <div className="login">
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
        </div>
                
        );
    }
}
export default Login;