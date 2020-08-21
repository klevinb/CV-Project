import React from "react";
import { Container } from "react-bootstrap";
import "./styles/App.scss";
import { Nav, Footer } from "./components";

function App() {
  return (
    <Container fluid className='mainPage'>
      <Nav />
      <div className='content'>
        <h1>Get Information</h1>
        <h3>Before You Travel</h3>
        <span>
          In this website you will find information about the country/city that
          you would like to visit in the future.
        </span>
        <button>GET STARTED</button>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
