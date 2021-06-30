// IMPORT REACT LIBRARIES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT BOOTSTRAP
import { Card, Image } from "react-bootstrap";

// IMPORT STYLING
import "./CityMiniature.css";

export default function CityMiniature({ id, name, url }) {
  return (
    <div className="cardCity">
      <Link to={`/PlayCity/${id}`}>
        <button className="cardButton">
          <h2 className="cardTitle">{name}</h2>

          <Image className="cardImage" src={url} alt={name} variant="bottom" />
        </button>
      </Link>
    </div>
  );
}
