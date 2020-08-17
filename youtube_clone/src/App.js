import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import youtube from "./api/youtube";
import { NavBar, VideoList, VideoDisplay } from "./components";
import "./styles/index.scss";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSearh = async (searchValue) => {
    const resp = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 15,
        key: process.env.REACT_APP_YOUTUBE_APIKEY,
        q: searchValue,
      },
    });

    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Container fluid className='mainPage'>
        <NavBar onSearch={this.handleSearh} />

        <Row className='selectedVideo'>
          <Col sm={12} md={8} className='col'>
            <VideoDisplay video={selectedVideo} />
          </Col>
          <Col sm={12} md={4} className='videoList'>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={videos}
              selectedVideo={selectedVideo}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
