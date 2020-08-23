import React from "react";
import menu from "../data/menu.json";
import { Carousel, Row, Col, Image } from "react-bootstrap";

import StarRatings from "react-star-ratings";

export default function Manu() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='menuPage'>
      <Carousel pause='hover'>
        {menu.map((dish) => (
          <Carousel.Item>
            <Row>
              <Col sm={12} md={6}>
                <Image fluid src={dish.image} alt='First slide' />
              </Col>
              <Col className='dishDetails' sm={12} md={6}>
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
                <span>Comments</span>
                <div className='ratings'>
                  {dish.comments.map((comment) => (
                    <div className='rating'>
                      <p>{comment.author}</p>
                      <StarRatings
                        rating={comment.rating}
                        starRatedColor='orange'
                        numberOfStars={5}
                        name='rating'
                      />
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
