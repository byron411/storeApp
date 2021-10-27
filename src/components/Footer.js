import React from "react";

export class Footer extends React.Component{
    render(){
        return(
            
          <footer class="page-footer   blue-grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="blue-text">AdminSales</h5>
                <p class="grey-text text-lighten-4">brntrj@gmail.com</p>
      
      
              </div>
              <div class="col l3 s12">
                <h5 class="blue-text">Universidad de Antioquia</h5>
                <ul>
                  <li><a class="white-text" href="https://www.misiontic2022.gov.co/portal/">Misión TIC 2022</a></li>
                  <li><a class="white-text" href="https://www.udea.edu.co/wps/portal/udea/web/inicio/unidades-academicas/ingenieria">Faculta de ingenieria</a></li>
                  
                </ul>
              </div>
              <div class="col l3 s12">
                <h5 class="blue-text">Cloud Programmers</h5>
                
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Made by <a class="blue-text text-lighten-3" href="/">Cloud Programmers © 2021 Copyright Text</a>
            </div>
          </div>
        </footer>
            
        );
    }
}