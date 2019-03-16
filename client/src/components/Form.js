import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Flex, Box } from "grid-styled";

import { SubmitButton, BackgroundContainer } from "./styles";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Checkbox from "material-ui/Checkbox";
import { FormControlLabel } from "material-ui/Form";

class Form extends Component {
  state = {
    email: "",
    password: "",
    checked: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCheckBoxChange = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { email, password } = this.state;
    const { login, errors } = this.props;

    return (
      <BackgroundContainer>
        <Flex align="center" justify="center">
          <Box
            width={[1, 1 / 2, 0.4, 1 / 3]}
            px={2}
            pt={2}
            my={login ? "calc((98vh - 611.250px)/2)" : "calc((98vh - 629.656px)/2)"}
            style={{ backgroundColor: "white" }}
          >
            <Box width={0.7} px={2} p={4} ms={4} ml="15%">
              <div style={{ textAlign: "center" }}>
                <Typography variant="display1" gutterBottom>
                  Paytm
                </Typography>
                <Typography variant="headline" gutterBottom>
                  {login ? "Welcome Back!" : "Hey First Time!"}
                </Typography>
                <Typography variant="subheading" gutterBottom>
                  {login ? "Login to your account" : "Sign up in a blink!"}
                </Typography>
              </div>
            </Box>
            <Box width={1} px={2}>
              <TextField
                name="email"
                label="Enter your email"
                type="email"
                value={email}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
                error={errors.email}
              />
            </Box>
            <Box width={1} px={2}>
              <TextField
                name="password"
                label="Enter your password"
                type="password"
                value={password}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
                error={errors.password}
              />
            </Box>
            <Box width={1} p={2} pb={4} mb={4}>
              {login ? (
                <div style={{ textAlign: "center" }}>
                  <Typography variant="subheading" gutterBottom>
                    Forgot Password?
                  </Typography>
                </div>
              ) : (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleCheckBoxChange}
                      color="primary"
                    />
                  }
                  label="Have a referral code?"
                />
              )}
            </Box>
            <Box width={[1, 0.7]} ml={["0%", "15%"]} px={2}>
              <SubmitButton onClick={this.handleSubmit}>
                <Typography variant="button" gutterBottom>
                  {login ? "Login" : "Sign Up"}
                </Typography>
              </SubmitButton>
            </Box>
            <Box width={[1, 0.7]} ml={["0%", "15%"]} p={2}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="caption" gutterBottom>
                  By clicking Login, I agree to the Terms and Conditions and
                  Privacy Policy
                </Typography>
              </div>
            </Box>
            <Box width={1} p={2} pb={4}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="subheading" gutterBottom>
                  No Account?{" "}
                  {login ? (
                    <Link to="/signup">Sign Up</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </Typography>
              </div>
            </Box>
          </Box>
        </Flex>
      </BackgroundContainer>
    );
  }
}

export default Form;
