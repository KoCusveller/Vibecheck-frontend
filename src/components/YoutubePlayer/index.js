import React from "react";
import YouTubePlayer from "react-player/youtube";

function YoutubePlayer(props) {
  return (
    <div>
      <YouTubePlayer
        url={props.url}
        muted={props.muted}
        playing={props.playing}
        controls={props.controls}
        style={props.style}
        config={props.config}
        width={props.width}
        height={props.height}
        volume={props.volume}
      />
    </div>
  );
}

export default YoutubePlayer;
