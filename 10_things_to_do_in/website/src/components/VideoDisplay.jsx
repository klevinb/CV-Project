import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { VideoList } from "../components";

const mapStateToProps = (state) => state;

function VideoDisplay({ selectedVideo }) {
  if (!selectedVideo)
    return (
      <div className='d-flex justify-content-center align-items-center h-50'>
        <Spinner
          style={{ fontSize: "40px" }}
          animation='grow'
          variant='warning'
        />
      </div>
    );
  const videoSrc = `https://youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <>
      <Container className='videoDetails'>
        <Row>
          <Col className='videoDisplay' sm={12} md={8}>
            <iframe
              frameBorder='0'
              allowFullScreen='allowfullscreen'
              height='100%'
              width='100%'
              title='Video Plater'
              src={videoSrc}
            />
          </Col>
          <Col className='videoDescription' sm={12} md={4}>
            <h4>{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.channelTitle}</p>
            <p>{selectedVideo.snippet.description}</p>
          </Col>
        </Row>
        <Row>
          <VideoList />
        </Row>
      </Container>
    </>
  );
}

export default connect(mapStateToProps)(VideoDisplay);
