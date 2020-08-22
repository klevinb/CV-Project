import React from "react";
import { Container, Carousel } from "react-bootstrap";
import menu from "../data/menu.json";

export default function MainPage() {
  return (
    <>
      <div className='mainPage'>
        <Container>
          <div>
            <h3>HAVE YOU TRIED OUR PASTAS YET? VISIT US TODAY!</h3>
            <div className='mainButtons'>
              <button>RESERVE TABLE</button>
              <button href='#menu'>BROWSE MENU</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
