import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { GoScreenFull } from "react-icons/go";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdVolumeUp,
  MdRepeat,
  MdVolumeOff,
} from "react-icons/md";
import { TiArrowShuffle } from "react-icons/ti";
import {} from "react-icons/fi";
import {} from "react-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statevolum: 1,
      dur: 0,
      currentTime: 0,
    };
    this.audio = React.createRef("audio_tag");
  }

  setStateVolum = (q) => {
    this.setState({
      statevolum: q,
    });
  };
  setDur = (q) => {
    this.setState({
      dur: q,
    });
  };
  setCurrentTime = (q) => {
    this.setState({
      currentTime: q,
    });
  };

  mute = () => {
    if (this.audio.current.muted) {
      this.audio.current.muted = false;
    } else {
      this.audio.current.muted = true;
    }
  };

  fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  handleVolume = (q) => {
    this.setStateVolum(q);
    this.audio.current.volume = q;
  };

  togglePlaying = () => {
    if (this.audio.current.paused) {
      this.audio.current.play();
    } else {
      this.audio.current.pause();
    }
  };

  handleProgress = (e) => {
    let compute = (e.target.value * this.state.dur) / 100;
    this.setCurrentTime(compute);
    this.audio.current.currentTime = compute;
  };
  render() {
    return (
      <>
        <Col className='d-flex pl-1' md={3}>
          <Image src='https://cdn.cnn.com/cnnnext/dam/assets/200117021516-02-eminem-new-album-super-tease.jpg' />

          <Col className='d-flex flex-column' sm={12} md={6}>
            <span>Song title</span>
            <span>Singer</span>
          </Col>
          <div className='d-flex align-items-center'>
            <AiOutlineHeart className='mr-3' />
            <GoScreenFull />
          </div>
        </Col>
        <Col className='d-flex justify-content-center flex-column' md={6}>
          <div className='musicControls d-flex justify-content-center align-items-center'>
            <span>
              <TiArrowShuffle />
            </span>
            <span>
              <MdSkipPrevious />
            </span>
            <span
              className='playbtn'
              onClick={() => {
                this.togglePlaying();
              }}
            >
              {this.audio.current && this.audio.current.paused ? (
                <AiOutlinePlayCircle />
              ) : (
                <AiOutlinePauseCircle />
              )}
            </span>
            <span>
              <MdSkipNext />
            </span>
            <span>
              <MdRepeat />
            </span>
          </div>
          <audio
            onTimeUpdate={(e) => this.setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => this.setDur(e.target.duration)}
            ref={this.audio}
            type='audio/mpeg'
            preload='true'
            src='https://cdns-preview-e.dzcdn.net/stream/c-e711907683c737c6e3151208763b9b26-8.mp3'
          />

          <div className='progressb d-flex justify-content-center'>
            <span className='currentT'>
              {this.fmtMSS(this.state.currentTime)}
            </span>
            <input
              onChange={this.handleProgress}
              value={
                this.state.dur
                  ? (this.state.currentTime * 100) / this.state.dur
                  : 0
              }
              type='range'
              name='progresBar'
              id='prgbar'
              className='mx-2'
            />
            <span className='totalT'>{this.fmtMSS(this.state.dur)}</span>
          </div>
        </Col>
        <Col className='d-flex justify-content-end align-items-center' md={3}>
          <span className='volum' onClick={() => this.mute()}>
            {this.audio.current && this.audio.current.muted ? (
              <MdVolumeOff />
            ) : (
              <MdVolumeUp />
            )}
          </span>
          <input
            value={Math.round(this.state.statevolum * 100)}
            type='range'
            name='volBar'
            id='volBar'
            onChange={(e) => this.handleVolume(e.target.value / 100)}
          />
        </Col>
      </>
    );
  }
}

export default Footer;
