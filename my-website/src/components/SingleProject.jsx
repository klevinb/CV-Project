import React, { useState } from "react";
import { Row, Col, Carousel, Button } from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";

function SingleProject(props) {
  const [selected, setSelected] = useState("Desktop view");

  return (
    <Row>
      <Col sm={12} md={12} className='projectDetails'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>

        <p>{props.tools}</p>
        <a href={props.repoLink} rel='noopener noreferrer' target='_blank'>
          <Button>
            <AiOutlineGithub /> Repo Link
          </Button>
        </a>
      </Col>
      <Col sm={12} md={12}>
        <div className='d-flex justify-content-center'>
          <ul>
            <li
              className={selected === "Desktop view" ? "selected" : ""}
              onClick={() => setSelected("Desktop view")}
            >
              Desktop view
            </li>
            <li
              className={selected === "Mobile view" ? "selected" : ""}
              onClick={() => setSelected("Mobile view")}
            >
              Mobile view
            </li>
          </ul>
        </div>
        <Carousel>
          {props.photos.map((photo) => (
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={
                  selected === "Desktop view"
                    ? photo.desktopView
                    : photo.mobileView
                }
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>{photo.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}

export default SingleProject;
