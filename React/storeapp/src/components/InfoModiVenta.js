import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"

class InfoModiVenta extends React.Component{
    render(){
        return(
            <div className="info-venta">
            <div class="alert alert-success" role="alert">
            Se ha guardado la venta 
            <br></br>
            <br></br>
            <button type="button" class="btn btn-success">Success</button>
          </div>
          </div>
        );
    }
}
export default InfoModiVenta;