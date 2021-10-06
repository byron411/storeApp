import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"

class InfoModificado extends React.Component{
    render(){
        return(
            
            <div class="alert alert-success" role="alert">
            Se ha guardado el producto 
            <br></br>
            <br></br>
            <button type="button" class="btn btn-success">Success</button>
          </div>
        );
    }
}
export default InfoModificado;