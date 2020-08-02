import React from "react";
import { RiMusicLine } from "react-icons/ri";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

function Song(props) {
  return (
    <div
      onClick={() => props.selectSong(props.song.id)}
      className={
        props.selectedSong && props.selectedSong[0].id === props.song.id
          ? "selected"
          : "song"
      }
      key={props.song.id}
    >
      <div className='d-flex justify-content-between'>
        <p>
          <RiMusicLine />
          {props.song.title}
        </p>
        <p>{props.song.duration / 100}</p>
      </div>
      <div
        className={
          props.selectedSong && props.selectedSong[0].id === props.song.id
            ? "text-left"
            : "text-left artistSong"
        }
      >
        <p>{props.song.artist.name}</p>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Song);
