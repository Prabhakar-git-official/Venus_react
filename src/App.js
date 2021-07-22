import React  from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import {Card,Button,Container} from 'react-bootstrap';

import './App.css';
import Vault from "./Vault";
import Transmuter from "./transmuter";


function App() {
  
  return (
    <div class="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>

      <div class="jumbotron my-auto">
      
  
        <center>

          <br></br>
          <br></br>
          <br></br>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <br/>
              <div class="display-4  mb-1"><h1 class="homehead">ALCHEMIX</h1></div>
              <br></br><br></br><br></br>
              
              
              <br></br>
              <br />
              <Button variant="primary"
                className="btn"
                onClick={() => {
                  history.push("/Vault");
                }}
              >
               Vault page    
              </Button>{' '}
              <Button variant="primary"
                className="btn"
                onClick={() => {
                  history.push("/Transmuter");
                }}
              >
               Transmuter page    
              </Button>{' '}






            </Route>
            
            
            <Route path="/Vault">
              <Vault />
            </Route>
            <Route path="/Transmuter">
              <Transmuter />
            </Route>
          </Switch>
        </Router>
        </center>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
