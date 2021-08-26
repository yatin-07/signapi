import React, { Component } from "react";
import "./App.css";
import Navigation from "./componenet/navigation";
import Signin from "./componenet/signin";
import Register from "./componenet/register";
//import axios from "axios";

const initialState = {
  route: "signin",
  isSignedIn: false,
  user: {
    name: "",
    email: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // onInputChange = (event) => {
  //   this.setState({input: event.target.value});
  // }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
