import React from "react";
import { Cabecera } from "./Cabecera";
import { Footer } from "./Footer";

export class Ventas extends React.Component{
    render(){
        
       
        return(
            <div>
            <Cabecera/>
                <h1>En construcción</h1> 
                <br/>
                <br/>
                <br/><br/><br/><br/><br/>   
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
                <br/>
                <br/>
                <br/><br/><br/><br/><br/>
                <Footer />
  
            </div>
        );
    }
}