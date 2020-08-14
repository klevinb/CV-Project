import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";

const MainPage = (props) => {
  const [imgClicked, setImgClicked] = useState(false);

  return (
    <>
      <Container fluid className='night'>
        <div className='content night'>
          <ul className='nav-bar'>
            <li>Education</li>
            <li>Projects</li>
          </ul>
          <p>
            Hi there. My name is{" "}
            <span onClick={() => setImgClicked(!imgClicked)}>Klevin</span>.{" "}
            {imgClicked && (
              <Image width='200px' height='200px' src='/klevin.png' />
            )}
            I am an MERN stack developer and in this page you will find some
            information about my education and my projects.
          </p>
        </div>
      </Container>
    </>
  );
};

export default MainPage;
