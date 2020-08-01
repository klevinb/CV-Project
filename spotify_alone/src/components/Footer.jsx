import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoScreenFull } from "react-icons/go";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <Col className='d-flex pl-1' md={3}>
          <Image src='https://cdn.cnn.com/cnnnext/dam/assets/200117021516-02-eminem-new-album-super-tease.jpg' />

          <Col className='d-flex flex-column' md={6}>
            <span>Song title</span>
            <span>Singer</span>
          </Col>
          <div className='d-flex align-items-center'>
            <AiOutlineHeart className='mr-3' />
            <GoScreenFull />
          </div>
        </Col>
        <Col className='d-flex justify-content-center' md={6}>
          <span>HERE</span>
        </Col>
        <Col className='d-flex justify-content-end' md={3}>
          <span>HERE</span>
        </Col>
      </>
    );
  }
}

export default Footer;
