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
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                <br/>
                <br/>
                <br/><br/><br/><br/><br/>
                <Footer />
  
            </div>
        );
    }
}