import React, { Component } from "react";
import { Col } from "react-bootstrap";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <Col className='nav-bar1' md={10}>
        <p style={{ color: "white" }}>Home Page</p>
      </Col>
    );
  }
}

export default HomePage;
