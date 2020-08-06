import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoScreenFull } from "react-icons/go";
import { connect } from "react-redux";
import { selectSongThunk } from "../utilitis";
import AudioPlayer from "./AudioPlayer";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  selectSong: (id) => dispatch(selectSongThunk(id)),
  likeSong: (id) =>
    dispatch({
      type: "LIKE_SONG",
      payload: id,
    }),
});

class Footer extends Component {
  render() {
    return (
      <>
        <Col className='d-flex pl-2' md={3}>
          {this.props.selectedSong && this.props.selectedSong.contributors ? (
            <Image src={this.props.selectedSong.album.cover_xl} />
          ) : this.props.selectedSong && this.props.selectedSong.album ? (
            <Image
              src={
                this.props.selectedSong &&
                this.props.selectedSong.album.cover_big
              }
            />
          ) : (
            <Image
              src={this.props.albumInfo && this.props.albumInfo.cover_big}
            />
          )}
          <Col className='d-flex flex-column' sm={12} md={8}>
            <span>
              {this.props.selectedSong ? (
                this.props.selectedSong.title_short.length > 15 ? (
                  <span style={{ fontSize: "12px" }}>
                    {this.props.selectedSong.title_short.slice(0, 15) + "..."}
                  </span>
                ) : (
                  <span style={{ fontSize: "14px" }}>
                    {this.props.selectedSong.title_short}
                  </span>
                )
              ) : (
                <p>Select a song</p>
              )}
            </span>
            <span style={{ color: "#969696" }}>
              {this.props.selectedSong && this.props.selectedSong.artist.name}
            </span>
          </Col>
          <div className='d-flex align-items-center'>
            {this.props.likedSongs &&
            this.props.likedSongs.indexOf(
              this.props.selectedSong && this.props.selectedSong.id
            ) !== -1 ? (
              <AiFillHeart
                onClick={() => this.props.likeSong(this.props.selectedSong.id)}
              />
            ) : (
              <AiOutlineHeart
                onClick={
                  this.props.selectedSong !== null
                    ? () => this.props.likeSong(this.props.selectedSong.id)
                    : () => {}
                }
              />
            )}
            <GoScreenFull />
          </div>
        </Col>

        <AudioPlayer
          selectedSong={this.props.selectedSong && this.props.selectedSong}
          tracksList={this.props.tracksList}
          selectSong={this.props.selectSong}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
