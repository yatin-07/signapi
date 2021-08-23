import React, { Component } from 'react';
import './App.css';

import Signin from "./componenet/signin";

class App extends Component {
constructor() {
  super();
  this.state = {
    username: '',
    email: '',
    password: '',
    route: 'signin'

  }
}

onRouteChange = () => {
this.setState({route: 'home'});
}

  render(){
    return(
      <div className="App">
            <Signin onRouteChange={this.onRouteChange}/>
      </div>
      );
  }
}
  


export default App;
