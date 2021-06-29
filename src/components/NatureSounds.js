import React from "react";

import { useState } from "react";
import ReactPlayer from "react-player";

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
    if (sound.name === natureSound.name) setplaying(!playing);

    setNatureSound(type[sound.name]);
  }

  return (
    <div style={{ display: "none" }}>
      <ReactPlayer
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
          max={10}
          onChange={(e) => {
            setVolume(parseInt(e.target.value / 10));
          }}
        />
      </div>
    </div>
  );
}
