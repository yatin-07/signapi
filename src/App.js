import React, { Component } from 'react';
import './App.css';
import Navigation from "./componenet/navigation";
import Signin from "./componenet/signin";
import Register from "./componenet/register";
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

onRouteChange = (route) => {
this.setState({route: route});
}

  render(){
    return(
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        {
          this.state.route === 'signin'
          ?
            <Signin onRouteChange={this.onRouteChange}/>
            :
            <Register onRouteChange={this.onRouteChange}/>
        }
            
      </div>
      );
  }
}
  


export default App;
