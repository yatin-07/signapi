import React, { Componenet } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Componenet {
constructor(){
  super()
  this.state = {
    username: '',
    email: '',
    password: ''

  }
}

  render(){
    return(
      <div>
<h1>hello</h1>
      </div>
      );
  }
}
  


export default App;
