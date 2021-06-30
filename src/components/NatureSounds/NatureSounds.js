import React, { useEffect } from "react";

import { useState } from "react";
import ReactPlayer from "react-player";

/**IMPORT IMAGES */

import JUNGLE_IMG from "./img/JUNGLE.png";
import OCEAN_IMG from "./img/OCEAN.png";
import RAIN_IMG from "./img/RAIN.png";
import STORM_IMG from "./img/STORM.png";

import "./NatureSounds.css";

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

export default function NatureSounds({ master_playing }) {
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

  useEffect(() => {
    setplaying(master_playing);
  }, [master_playing]);

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
      <div className="nature-sound-controls">
        <button
          className="natureSound-button-style"
          onClick={() => handleSound(type.JUNGLE)}
        >
          <img className="nature-sound-icon" src={JUNGLE_IMG}></img>
        </button>

        <button
          className="natureSound-button-style"
          onClick={() => handleSound(type.OCEAN)}
        >
          <img className="nature-sound-icon" src={OCEAN_IMG}></img>
        </button>

        <button
          className="natureSound-button-style"
          onClick={() => handleSound(type.RAIN)}
        >
          <img className="nature-sound-icon" src={RAIN_IMG}></img>
        </button>

        <button
          className="natureSound-button-style"
          onClick={() => handleSound(type.STORM)}
        >
          <img className="nature-sound-icon" src={STORM_IMG}></img>
        </button>
      </div>
      <input
        className="nature-sound-volume"
        type="range"
        min={0}
        max={10}
        onChange={(e) => {
          console.log(volume);
          return setVolume(parseFloat(e.target.value / 10));
        }}
      />
    </div>
  );
}
