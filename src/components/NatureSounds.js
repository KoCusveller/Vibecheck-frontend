import React from "react";

import { useState } from "react";
import ReactPlayer from "react-player";

//Object that stores all the Nature Sounds information
const type = {
  JUNGLE: {
    name: "JUNGLE",
    url: "https://www.youtube.com/watch?v=QE_jOCqKE3w",
  },
  OCEAN: { name: "OCEAN", url: "https://www.youtube.com/watch?v=f77SKdyn-1Y" },
  RAIN: { name: "RAIN", url: "https://www.youtube.com/watch?v=CFmqh329yW4" },
  STORM: { name: "STORM", url: "https://www.youtube.com/watch?v=nDq6TstdEi8" },
  NONE: { name: "NONE", url: "" },
};

export default function NatureSounds() {
  const [natureSound, setNatureSound] = useState(type.NONE);
  const [playing, setplaying] = useState(false);
  const [volume, setVolume] = useState(1);

  function handleSound(sound) {
    //If you click twice the same button toggle pause/play
    if (sound.name === natureSound.name) {
      return setplaying(!playing);
    }

    //else set new sound and start playing
    setNatureSound(type[sound.name]);
    setplaying(true);
  }

  return (
    <div>
      <ReactPlayer
        style={{ display: "none" }}
        url={natureSound.url}
        volume={volume}
        playing={playing}
        className="react-player"
        loop={true}
      />
      <div className="nature-sound-buttons">
        <button onClick={() => handleSound(type.JUNGLE)}>JUGLE INCON</button>
        <button onClick={() => handleSound(type.OCEAN)}>OCEAN INCON</button>
        <button onClick={() => handleSound(type.RAIN)}>RAIN INCON</button>
        <button onClick={() => handleSound(type.STORM)}>STORM INCON</button>
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => {
            setVolume(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
