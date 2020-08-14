import React from "react";
import { Image, Row, Col } from "react-bootstrap";

function Education() {
  return (
    <>
      <div className='education'>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <Image
              fluid
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Universiteti_i_Elbasanit_%22Aleksand%C3%ABr_Xhuvani%22.svg/1200px-Universiteti_i_Elbasanit_%22Aleksand%C3%ABr_Xhuvani%22.svg.png'
            />
          </Col>
          <Col sm={12} md={7} lg={7}>
            <span>"Aleksander Xhuvani" Elbasan, Albania</span>
            <p>Bachelor in IT</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Education;
