import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import "../../styles/signup.css";
import "../../styles/login.css";

class Login extends Component {
  state = {
    login: true,
    selectedOption: "",
  };

  handleOptionChange = (changeEvent) => {
    console.log(changeEvent.target.value);
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  render() {
    return (
      <>
        {this.state.login && this.props.location.search !== "?signup" ? (
          <>
            <LoginComponent />
          </>
        ) : (
          <>
            <SignUpComponent
              selectedOption={this.state.selectedOption}
              handleOptionChange={this.handleOptionChange}
            />
          </>
        )}
      </>
    );
  }
}

export default Login;
