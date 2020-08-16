import React from "react";
import { Image } from "react-bootstrap";

function Navigation({ navSelected, setSelectedNav }) {
  return (
    <>
      <Image className='logo_img' src='/assets/logo_night.png' alt='logo' />
      <ul className='nav-bar'>
        <li
          className={navSelected === "Education" ? "selected" : ""}
          onClick={() => setSelectedNav("Education")}
        >
          Education
          <br />
          <span>&amp;</span>
          <br />
          Experience
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
      <ul className='socials'>
        <a
          href='https://github.com/klevinb'
          rel='noopener noreferrer'
          target='_blank'
        >
          <li>GitHub</li>
        </a>
        <a
          href='https://www.linkedin.com/in/klevinbazaiti/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <li>LinkedIn</li>
        </a>
        <a
          href='https://www.instagram.com/klevinb/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <li>Instagram</li>
        </a>
      </ul>
    </>
  );
}

export default Navigation;
