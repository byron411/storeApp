import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div>
            <header>
                <h1>Login primerizo</h1>
            </header>
            <div className="container">
                        <div className="row">
                            <div className="col s5">
                                <div className="card">
                                    <div className="card-content">
                                        <form>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text" placeholder="Usuario"></input>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <textarea className="materialize-textarea" placeholder="Contraseña"></textarea>
                                                </div>
                                            </div>
                                            <a class="waves-effect waves-light btn" href="/api/admin"><i class="material-icons left">login</i>Login</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}
export default Login;