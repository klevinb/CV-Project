import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import "../../styles/signup.css";
import "../../styles/login.css";

function Login(props) {
  const [selectedOption, setSelectedOpt] = useState("");

  const handleOptionChange = (changeEvent) => {
    setSelectedOpt(changeEvent.target.value);
  };

  return (
    <>
      {props.location.search !== "?signup" ? (
        <>
          <LoginComponent />
        </>
      ) : (
        <>
          <SignUpComponent
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
        </>
      )}
    </>
  );
}

export default Login;
