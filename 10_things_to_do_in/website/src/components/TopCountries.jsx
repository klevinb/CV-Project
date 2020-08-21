import React, { useEffect } from "react";
import { Card, Button, Row, Col, Container, Carousel } from "react-bootstrap";
import cities from "../data/cities.json";

export default function TopCountries() {
  return (
    <Container className='topcities'>
      <Row>
        {cities.map((city) => (
          <Col>
            <Card>
              <Carousel>
                {city.images.map((img) => (
                  <Carousel.Item>
                    <Card.Img variant='top' fluid src={img} alt='First slide' />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
