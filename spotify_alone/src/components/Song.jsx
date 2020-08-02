import React, { Component } from "react";
import { RiMusicLine } from "react-icons/ri";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class Song extends Component {
  state = {
    durr: 0,
  };

  fmtMSS = (s) => {
    this.setState({
      durr: (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s,
    });
  };

  componentDidMount() {
    this.fmtMSS(this.props.song.duration);
  }
  render() {
    return (
      <div
        onClick={() => this.props.selectSong(this.props.song.id)}
        className={
          this.props.selectedSong &&
          this.props.selectedSong[0].id === this.props.song.id
            ? "selected"
            : "song"
        }
        key={this.props.song.id}
      >
        <div className='d-flex justify-content-between'>
          <p>
            <RiMusicLine />
            {this.props.song.title}
          </p>
          <p>{this.state.durr}</p>
        </div>
        <div
          className={
            this.props.selectedSong &&
            this.props.selectedSong[0].id === this.props.song.id
              ? "text-left"
              : "text-left artistSong"
          }
        >
          <p>{this.props.song.artist.name}</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Song);
