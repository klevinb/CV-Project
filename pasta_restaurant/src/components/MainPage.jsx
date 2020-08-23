import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import menu from "../data/menu.json";

export default function MainPage({ history }) {
  return (
    <>
      <div className='mainPage'>
        <Row>
          <Col className='headings' sm={12} md={6} lg={8}>
            <h3>HAVE YOU TRIED OUR PASTAS YET? VISIT US TODAY!</h3>
            <div className='mainButtons'>
              <button onClick={() => history.push("/reservation")}>
                RESERVE TABLE
              </button>
              <button onClick={() => history.push("/menu")}>BROWSE MENU</button>
            </div>
          </Col>

          <Col sm={12} md={6} lg={4} className='dishes'>
            <Carousel pause='hover'>
              {menu.map((dish) => (
                <Carousel.Item>
                  <img className='d-block' src={dish.image} alt='First slide' />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
}
