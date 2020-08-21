import React from "react";

export default function MainPage(props) {
  return (
    <div className='content'>
      <h1>Get Information</h1>
      <h3>Before You Travel</h3>
      <span>
        In this website you will find information about the country/city that
        you would like to visit in the future.
      </span>
      <button onClick={() => props.history.push("/cities")}>GET STARTED</button>
    </div>
  );
}
