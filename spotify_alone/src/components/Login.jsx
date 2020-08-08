import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import "../styles/signup.css";
import "../styles/login.css";

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

  toggleLogin = () => {
    this.setState({ login: !this.state.login });
  };

  render() {
    return (
      <>
        {this.state.login ? (
          <>
            <LoginComponent toggleLogin={this.toggleLogin} />
          </>
        ) : (
          <>
            <SignUpComponent
              selectedOption={this.state.selectedOption}
              handleOptionChange={this.handleOptionChange}
              toggleLogin={this.toggleLogin}
            />
          </>
        )}
      </>
    );
  }
}

export default Login;
