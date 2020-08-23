import React from "react";
import { Card, Button, Row, Col, Container, Carousel } from "react-bootstrap";
import cities from "../data/cities.json";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  selectCity: (name) =>
    dispatch({
      type: "SELECT_CITY",
      payload: name,
    }),
});

function TopCities({ selectCity, history }) {
  return (
    <Container className='topcities'>
      <Row>
        {cities.map((city, key) => (
          <Col key={key}>
            <Card>
              <Carousel>
                {city.images.map((img, key) => (
                  <Carousel.Item key={key}>
                    <Card.Img variant='top' src={img} alt='First slide' />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.info}</Card.Text>
                <Button
                  onClick={() => {
                    selectCity(city.name);
                    history.push("/cities/info");
                  }}
                >
                  {" "}
                  10 Things to Do
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default connect(null, mapDispatchToProps)(TopCities);
