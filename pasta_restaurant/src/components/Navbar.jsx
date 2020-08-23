import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className='nav-bar'>
        <Link to='/'>
          <Image fluid src='/logo.png' alt='app logo' />
        </Link>
      </div>
    </>
  );
}
