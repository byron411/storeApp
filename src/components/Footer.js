import React from "react";

export class Footer extends React.Component{
    render(){
        return(
            
                <footer className="light-blue darken-4" >
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Cloud Programmers</h5>
                <p className="grey-text text-lighten-4">Proyecto desarrollado con metodología Scrum del programa Misión TIC 2022</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <h6 className="white-text">© 2021 Copyright Text</h6>
            </div>
          </div>
        </footer>
            
        );
    }
}