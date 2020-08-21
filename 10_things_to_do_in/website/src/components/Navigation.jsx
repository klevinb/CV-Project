import React from "react";
import { Image } from "react-bootstrap";

import { FaSearchLocation } from "react-icons/fa";

function Navigation() {
  return (
    <div className='nav-bar'>
      <Image id='logo' src='/assets/logo.png' alt='logo' />
      <ul className='nav-links'>
        <li>Home</li>
        <li>
          <FaSearchLocation />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
