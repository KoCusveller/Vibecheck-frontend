import React from "react";

import { useState } from "react";
import ReactPlayer from "react-player";

const JUNGLE_URL = "";
const OCEAN_URL = "";
const RAIN_URL = "";
const STORM_URL = "";

export default function NatureSounds() {
  const [url, seturl] = useState("");
  return (
    <div>
      <ReactPlayer url="url" />
    </div>
  );
}
