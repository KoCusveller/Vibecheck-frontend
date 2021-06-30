/**IMPORT LIBRARIES */
import React, { useEffect, useState } from "react";
import Player from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/**IMPORT STYLING */
import "./PlayCity.css";

/**IMPORT COMPONENTS */
import NatureSounds from "../../components/NatureSounds/NatureSounds";

/**IMPORT ACTIONS */
import { fetchCityDetail } from "../../store/cityDetail/actions";

/**IMPORT SELECTORS */
import { selectCityDetail } from "../../store/cityDetail/selectors";

/**IMPORT ICONS */

import PLAY_IMG from "./img/PLAY.png";
import PAUSE_IMG from "./img/PAUSE.png";

// All that is left to do is change it into the fetched items from the redux store

function PlayCity() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [mutedClick, setMutedClick] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const thisCity = useSelector(selectCityDetail);

  useEffect(() => {
    dispatch(fetchCityDetail(id));
  }, [dispatch]);

  return (
    <div className="player-wrapper">
      <Player
        //video
        className="react-player"
        url={thisCity.vidUrl}
        muted={true}
        playing={playing ? true : false}
        config={{
          youtube: {
            playerVars: { loop: 1 },
          },
        }}
        controls={false}
        // loop={true}
        onReady={() => setPlaying(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <Player
        //audio
        url={thisCity.songUrl}
        playing={playing ? true : false}
        style={{ display: "none" }}
        volume={volume}
        muted={false}
        loop={true}
        config={{
          youtube: {
            playerVars: { mute: mutedClick ? 1 : 0 },
          },
        }}
      />
      <div className="audio-controls">
        <button
          className="playCity-button-style"
          onClick={(e) => {
            setPlaying(!playing);
            setMutedClick(!mutedClick);
          }}
        >
          {playing ? (
            <img className="playCity-icon" src={PAUSE_IMG}></img>
          ) : (
            <img className="playCity-icon" src={PLAY_IMG}></img>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={10}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value / 10));
          }}
        />

        <NatureSounds master_playing={playing} />
      </div>
    </div>
  );
}

export default PlayCity;
