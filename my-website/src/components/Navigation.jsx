import React from "react";
import { Image } from "react-bootstrap";

function Navigation({ navSelected, setSelectedNav }) {
  return (
    <>
      <Image className='logo_img' src='/logo_night.png' alt='logo' />
      <ul className='nav-bar'>
        <li
          className={navSelected === "Education" ? "selected" : ""}
          onClick={() => setSelectedNav("Education")}
        >
          Education
        </li>
        <li
          className={navSelected === "Projects" ? "selected" : ""}
          onClick={() => setSelectedNav("Projects")}
        >
          Projects
        </li>
        <li
          className={navSelected === "Contacts" ? "selected" : ""}
          onClick={() => setSelectedNav("Contacts")}
        >
          Contacts
        </li>
      </ul>
    </>
  );
}

export default Navigation;
