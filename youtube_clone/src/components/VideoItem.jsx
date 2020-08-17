import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function VideoItem({ video, onVideoSelect }) {
  return (
    <Row>
      <Col sm={6}>
        <Image
          fluid
          src={video.snippet.thumbnails.medium.url}
          alt='video preview'
          onClick={() => onVideoSelect(video)}
        />
      </Col>
      <Col sm={6} onClick={() => onVideoSelect(video)}>
        <span>{video.snippet.title}</span>
        <p>{video.snippet.channelTitle}</p>
      </Col>
    </Row>
  );
}

export default VideoItem;
