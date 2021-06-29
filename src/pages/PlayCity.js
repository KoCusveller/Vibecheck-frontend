import React, { useState } from "react";
import Player from "react-player/youtube";
import "../App.css";

// All that is left to do is change it into the fetched items from the redux store

function PlayCity() {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0);
  const [mutedClick, setMutedClick] = useState(false);

  return (
    <div className="player-wrapper">
      <Player
        className="react-player"
        url="https://www.youtube.com/watch?v=cbTV35mLI5A"
        muted={true}
        playing={playing ? true : false}
        config={{
          youtube: {
            playerVars: { loop: 1 },
          },
        }}
        controls={false}
        width="100%"
        height="80%"
        // loop={true}
        // onReady={() => setPlaying(true)}
        // onPlay={() => setPlaying(!playing)}
        // onPause={() => setPlaying(!playing)}
      />
      <Player
        url="https://www.youtube.com/watch?v=-5KAN9_CzSA"
        playing={playing ? true : false}
        style={{ display: "none" }}
        volume={volume}
        muted={false}
        config={{
          youtube: {
            playerVars: { mute: mutedClick ? 1 : 0 },
          },
        }}
      />
      <button
        onClick={(e) => {
          setPlaying(!playing);
          setMutedClick(!mutedClick);
        }}
      >
        {playing ? "Play" : "Pause"}
      </button>
      <input
        type="range"
        min={0}
        max={10}
        onChange={(e) => {
          setVolume(parseInt(e.target.value / 10));
        }}
      />
    </div>
  );
}

export default PlayCity;
