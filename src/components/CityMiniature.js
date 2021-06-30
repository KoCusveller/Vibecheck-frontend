// IMPORT REACT LIBRARIES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT BOOTSTRAP
import { Card, Image } from "react-bootstrap";

// IMPORT STYLING
import "./Style/CityMiniature.css";

export default function CityMiniature({ id, name, url }) {
	return (
		<Card className="cardCity">
			<button className="cardButton">
				<h2 className="cardTitle">{name}</h2>

				<Link to={`/PlayCity/${id}`}>
					<Image
						className="cardImage"
						src={url}
						alt={name}
						variant="bottom"
					/>
				</Link>
			</button>
		</Card>
	);
}
