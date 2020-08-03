import React, { Component } from "react";
import { Row, Col, Image, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Song from "./Song";
import { connect } from "react-redux";
import { fetchArtistInfos, selectSongThunk } from "../utilitis";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtistInfos(id)),
  selectSong: (id) => dispatch(selectSongThunk(id)),
});

class ArtistPage extends Component {
  componentDidMount = async () => {
    this.props.fetchArtist(this.props.match.params.id);
  };
  render() {
    return (
      <>
        {this.props.artistInfo && (
          <Col className='albumPage' md={10}>
            <Row className='row row-cols-xs-1'>
              <div
                id='content'
                className='col-12 col-md-4 d-flex justify-content-end'
              >
                <div id='artist' className='card mt-5'>
                  <Image
                    onClick={this.showComments}
                    src={this.props.artistInfo.artist.picture_xl}
                    style={{ height: "250px" }}
                  />
                  <p></p>
                  <h4 id='label1'>
                    {this.props.artistInfo.artist.name}
                    {" - Top 50"}
                  </h4>
                  <Button className='play'>PLAY</Button>
                  <Link to={"/artist/" + this.props.artistInfo.artist.id}>
                    <label id='label2'>
                      {this.props.artistInfo.artist.name}
                    </label>
                  </Link>
                </div>
              </div>
              <div id='songs' className='col'>
                <div className='card'>
                  {this.props.artistInfo.topSongs.data.map((song, i) => (
                    <Song
                      selectSong={this.props.selectSong}
                      key={i}
                      song={song}
                    />
                  ))}
                </div>
              </div>
            </Row>
          </Col>
        )}

        {this.props.loading.artistInfo && (
          <Col className='albumPage' md={10}>
            <Row className='row row-cols-xs-1'>
              <Col
                id='content'
                className='col-12 col-md-4 mt-5 d-flex justify-content-end'
              >
                <Spinner animation='border' variant='light' />
              </Col>
              <Col
                id='songs'
                className='col pt-5 d-flex justify-content-center'
              >
                <Spinner animation='border' variant='light' />
              </Col>
            </Row>
          </Col>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
