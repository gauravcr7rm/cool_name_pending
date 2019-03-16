import React, { Component } from "react";
import Form from "./Form";
import { isEmail } from "validator";
import axios from "axios";

class LoginScreen extends Component {
  state = { errors: {} };

  handleLogin = async loginData => {
    const { email, password } = loginData;
    if (!email || !isEmail(email) || !password) {
      this.setState(prev => ({
        errors: { ...prev.errors, email: true, password: true }
      }));
      return;
    }
    if (!email || !isEmail(email)) {
      this.setState(prev => ({ errors: { ...prev.errors, email: true } }));
      return;
    }
    if (!password) {
      this.setState(prev => ({ errors: { ...prev.errors, password: true } }));
      return;
    }
    try {
      this.setState({ errors: {} });
      const res = await axios.post("/api/login", { email, password });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form login errors={this.state.errors} onSubmit={this.handleLogin} />
    );
  }
}

export default LoginScreen;
