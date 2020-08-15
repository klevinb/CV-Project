import React from "react";
import {
  Image,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";

function Education() {
  return (
    <>
      <div className='education'>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <a href='https://uniel.ems.al/' target='_blank'>
              <Image
                fluid
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Universiteti_i_Elbasanit_%22Aleksand%C3%ABr_Xhuvani%22.svg/1200px-Universiteti_i_Elbasanit_%22Aleksand%C3%ABr_Xhuvani%22.svg.png'
              />
            </a>
          </Col>
          <Col sm={12} md={7} lg={7}>
            <span>"Aleksander Xhuvani" University Elbasan, Albania</span>
            <p className='titles'>Bachelor in IT</p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column'>
                <p>Starting date</p>
                <p>15-10-2016</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Ending date</p>
                <p>20-07-2019</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='education'>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <a href='https://strive.school/' target='_blank'>
              <Image
                fluid
                src='https://scontent.fosl1-1.fna.fbcdn.net/v/t1.0-9/p960x960/106021628_677337352815317_3039720649727959783_o.png?_nc_cat=109&_nc_sid=85a577&_nc_ohc=w3yhnCIpp9gAX_hGExV&_nc_ht=scontent.fosl1-1.fna&oh=027868da31bf70c82b3f11ca505dfb57&oe=5F5DCFB1'
              />
            </a>
          </Col>
          <Col sm={12} md={7} lg={7}>
            <span>STRIVE School </span>
            <p className='titles'>6 months coding course</p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column'>
                <p>Starting date</p>
                <p>15-04-2020</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Ending date</p>
                <p>30-09-2020</p>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                      Tech Stack
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                      <ListGroup>
                        <ListGroup.Item>HTML/CSS/JS</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>TypeScript</ListGroup.Item>
                      </ListGroup>
                      <ListGroup>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>PostgreSQL</ListGroup.Item>
                      </ListGroup>
                      <ListGroup>
                        <ListGroup.Item>Node.js</ListGroup.Item>
                        <ListGroup.Item>Bootstrap4</ListGroup.Item>
                        <ListGroup.Item>Git</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Education;
