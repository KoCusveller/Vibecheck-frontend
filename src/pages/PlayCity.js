import React from "react";
import { useState } from "react";
import YoutubePlayer from "react-player/youtube";
import SoundClouldPlayer from "react-player/soundcloud";

/**PROBLEMS *
 * 1- Make video responsive (size)
 * 2- Play/Pause song and video wen click only on video
 * 3- Hide title and other anoying things.
 * */
export default function PlayCity() {
  const [playing, setplaying] = useState(false);
  const [volume, setvolume] = useState(1);
  return (
    <div>
      Play City{" "}
      {
        // Render a YouTube video player
      }
      <div style={{ minHeight: "100%", minWidth: "100%" }}>
        <YoutubePlayer
          url="https://www.youtube.com/watch?v=gxR_ktz18Q0"
          playing={playing}
          muted={true}
          config={{
            youtube: {
              playerVars: { rel: 0, modestbranding: 1 },
            },
          }}
          height="1000px"
          width="100%"
        />{" "}
      </div>
      <SoundClouldPlayer
        style={{ display: "none" }}
        url="https://soundcloud.com/lofi_girl/4-am-studysession"
        playing={playing}
        volume={volume}
      />
      <button onClick={() => setplaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        min={0}
        max={10}
        onChange={(event) => setvolume(event.target.value / 10)}
      ></input>
    </div>
  );
}
