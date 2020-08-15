import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";
import Education from "./Education";
import Projects from "./Projects";
import Navigation from "./Navigation";

const MainPage = (props) => {
  const [imgClicked, setImgClicked] = useState(false);
  const [navSelected, setSelectedNav] = useState("");
  const [day, setDay] = useState(false);

  return (
    <>
      <Container fluid className='night'>
        <div className='content night'>
          <Navigation
            navSelected={navSelected}
            setSelectedNav={setSelectedNav}
          />
          <p>
            Hi there. My name is{" "}
            <span onClick={() => setImgClicked(!imgClicked)}>Klevin</span>.{" "}
            {imgClicked && (
              <>
                <Image width='200px' height='200px' src='/klevin.png' />
                <br />
              </>
            )}
            I am an MERN stack developer and in this page you will find
            information about my education, projects and my contacts.
          </p>
          <div className='infoSection'>
            {navSelected === "Education" && <Education />}

            {navSelected === "Projects" && <Projects />}
          </div>
        </div>
        <div className='dayToggle'>
          <Image
            src={day ? "/switchOFF.png" : "/switchON.png"}
            alt='toggle day/nigh'
            onClick={() => setDay(!day)}
          />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
