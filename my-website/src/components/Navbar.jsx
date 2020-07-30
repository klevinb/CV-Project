import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
  state = {
    clicked: false,
  };

  render = () => (
    <>
      <Navbar bg='light' expand='lg' className='d-flex justify-content-between'>
        <div>
          <Link
            onClick={() => this.setState({ clicked: !this.state.clicked })}
            to='/'
            className='navbar-brand'
          >
            {"<Klevin />"}
          </Link>
        </div>
        <div>
          <Navbar.Toggle
            onClick={() => this.setState({ clicked: !this.state.clicked })}
            aria-controls='basic-navbar-nav'
          />
          <div
            className={
              this.state.clicked
                ? "navbar-collapse collapse show"
                : "navbar-collapse collapse"
            }
            id='basic-navbar-nav'
          >
            <Nav>
              <Link
                onClick={() => this.setState({ clicked: !this.state.clicked })}
                to='/about'
                className='nav-link mr-3 '
              >
                About
              </Link>
              <Link
                onClick={() => this.setState({ clicked: !this.state.clicked })}
                to='/projects'
                className='nav-link mr-3'
              >
                Projects
              </Link>
              <Link
                onClick={() => this.setState({ clicked: !this.state.clicked })}
                to='/contact'
                className='nav-link'
              >
                Contact
              </Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
