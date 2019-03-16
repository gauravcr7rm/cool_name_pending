import React, { Component } from "react";
import Form from "./Form";
import { isEmail } from "validator";
import axios from "axios";

class SignupScreen extends Component {
  state = { errors: {} };

  handleSignUp = async signUpData => {
    const { email, password } = signUpData;
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
      const res = await axios.post("/api/signup", signUpData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  render() {
    return <Form errors={this.state.errors} onSubmit={this.handleSignUp} />;
  }
}

export default SignupScreen;
