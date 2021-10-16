//Se necesita para cargar html
import React, {Component} from 'react';
import { render } from 'react-dom';

//import App from './components/Login';
class Producto extends Component{
    render(){
        return(
            <h1>Hola desde productos</h1>
        );
    }
}



render (<App />, document.getElementById('app'));