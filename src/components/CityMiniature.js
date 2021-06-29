import React from "react";
import { Link } from "react-router-dom";

// window frame style/size

// get name & url props, map it

export default function CityMiniature({ id, name, url }) {
  return (
    <div>
      <button>
        {name}
        <Link to={`/PlayCity/${id}`}>
          <img src={url} alt={name} style={{ maxWidth: "400px" }} />
        </Link>
      </button>
    </div>
  );
}
