import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
    render(){
        return(
            <h1>Hola mundo desde react</h1>
        )
    }
}
render(<App />, document.getElementById('app'));