import React from "react";
import { Col, Card } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  onVideoSelect: (video) =>
    dispatch({
      type: "SELECT_VIDEO",
      payload: video,
    }),
});

function VideoList({ cityInfo, selectedVideo, onVideoSelect }) {
  if (!cityInfo) return <div>Loading...</div>;
  return (
    <>
      {cityInfo.data.items
        .filter((video) => video !== selectedVideo)
        .map((video, key) => (
          <Col key={key} className='videoList' sm={12} md={3}>
            <Card>
              <Card.Img
                variant='top'
                src={video.snippet.thumbnails.medium.url}
                onClick={() => onVideoSelect(video)}
              />
              <Card.Body>
                <Card.Title>
                  <span>{video.snippet.title}</span>
                </Card.Title>
                <Card.Text>{video.snippet.channelTitle}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
