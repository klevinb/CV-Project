import React, { useState, useEffect } from "react";
import { Col, Row, Spinner, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Song from "./Song";
import { selectSongFromSearch } from "../../utilitis";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, props) => ({
  selectSong: (song) => dispatch({ type: "PLAY_LIKEDSONG", payload: song }),
});

function Library(props) {
  const [clicked, setClicked] = useState("");

  return (
    <>
      <Col className='albumPage' md={10}>
        <Row className='row row-cols-xs-1'>
          <div
            id='content'
            className='col-12 col-md-4 d-flex justify-content-end'
          >
            <div className='card mt-5 mr-2 text-center'>
              <Image
                onClick={() =>
                  setClicked(clicked === "LikedSongs" ? "" : "LikedSongs")
                }
                src='/likedSongs.png'
                style={{ height: "250px" }}
              />
              <p></p>
              <h4 id='label1'>Liked Songs</h4>
              <Button className='play'>PLAY</Button>

              <label id='label2'>{props.likedSongs.length} Songs</label>
            </div>
          </div>
          {clicked === "LikedSongs" && (
            <div id='songs' className='col'>
              <div className='card'>
                {props.likedSongs.map((song, i) => (
                  <Song selectSong={props.selectSong} key={i} song={song} />
                ))}
              </div>
            </div>
          )}
        </Row>
      </Col>

      {false && (
        <Col className='albumPage' md={10}>
          <Row className='row row-cols-xs-1'>
            <Col
              id='content'
              className='col-12 col-md-4 mt-5 d-flex justify-content-between'
            >
              <Spinner animation='border' variant='light' />
            </Col>
          </Row>
        </Col>
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
