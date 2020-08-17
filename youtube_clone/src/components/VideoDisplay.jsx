import React from "react";

function VideoDisplay({ video }) {
  if (!video) return <div>loading...</div>;
  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <div className='videoDetails'>
        <iframe
          frameBorder='0'
          allowFullScreen='allowfullscreen'
          height='100%'
          width='100%'
          title='Video Plater'
          src={videoSrc}
        />

        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.channelTitle}</p>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
}

export default VideoDisplay;
