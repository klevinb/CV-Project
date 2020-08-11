import React, { useState } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { RiDownloadLine } from "react-icons/ri";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

function NavigationBar(props) {
  const [selected, setSelected] = useState("Home");
  return (
    <>
      <Col
        className='nav-bar d-flex flex-column justify-content-between'
        md={2}
      >
        <div className='d-flex justify-content-center flex-column m-2 mt-3'>
          <Link to='/'>
            <Image fluid src='/spotify_navigation_logo.png' alt='nav-logo' />
          </Link>
          <ul className='mt-3'>
            <li>
              <Link onClick={() => setSelected("Home")} to='/'>
                {selected === "Home" ? <AiFillHome /> : <AiOutlineHome />}
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setSelected("Search")} to='/search'>
                <FiSearch />
                Search
              </Link>
            </li>
            <li onClick={() => setSelected("Your Library")}>
              <Link to='/library'>
                <GiBookshelf />
                Your Library
              </Link>
            </li>
          </ul>
        </div>
        <div className='d-flex flex-column m-2 userInfo'>
          {props.loggedin ? (
            <>
              <Row className='m-0 p-0'>
                <Col className='p-0' md={2}>
                  <RiDownloadLine />
                </Col>
                <Col md={9}>
                  <span>Install App</span>
                </Col>
              </Row>
              <hr className='my-2' />
              <Row className='m-0 p-0 d-flex align-items-center'>
                <Col className='p-0' md={2}>
                  <Image
                    src='https://static.toiimg.com/thumb/msid-73070532,width-1070,height-580,imgsize-1209854,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'
                    alt='user photo'
                  />
                </Col>
                <Col md={9}>
                  <span>Klevin Bazaiti</span>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Button
                className='buttons'
                onClick={() => props.history.push("/login?signup")}
              >
                SIGN UP
              </Button>
              <Button
                className='buttons'
                onClick={() => props.history.push("/login")}
              >
                LOG IN
              </Button>
              <div className='d-flex justify-content-center privacy'>
                <div className='d-flex flex-column'>
                  <p>Cookie</p>
                  <p>Policy</p>
                </div>
                <div>
                  <p>Privacy</p>
                </div>
              </div>
            </>
          )}
        </div>
      </Col>
    </>
  );
}

export default connect(mapStateToProps, null)(withRouter(NavigationBar));