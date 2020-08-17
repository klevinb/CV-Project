import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect, selectedVideo }) {
  const listOfVideos = videos
    .filter(
      (video) =>
        video.snippet.title !== video.snippet.channelTitle &&
        video !== selectedVideo
    )
    .map((video, key) => (
      <VideoItem onVideoSelect={onVideoSelect} key={key} video={video} />
    ));
  return <div>{listOfVideos}</div>;
}

export default VideoList;
