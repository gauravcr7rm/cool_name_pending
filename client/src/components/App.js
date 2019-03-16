import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../actions";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          {/* <div className="container"> */}
            <Route path="/signup" component={SignupScreen} />
            <Route path="/login" component={LoginScreen} />
          {/* </div> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
