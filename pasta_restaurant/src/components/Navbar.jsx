import React from "react";
import { Image } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
      <div className='nav-bar'>
        <Image fluid src='/logo.png' alt='app logo' />
        <ul className='nav-links'>
          <li>HOME</li>
          <li>MENU</li>
        </ul>
      </div>
    </>
  );
}
