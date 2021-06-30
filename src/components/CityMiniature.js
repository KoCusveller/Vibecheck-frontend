import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

import "./Style/CityMiniature.css";

export default function CityMiniature({ id, name, url }) {
	return (
		<div>
			<Card className="cardCity">
				<Card.Body>
					<button className="cardButton">
						<Card.Title>{name}</Card.Title>

						<Link to={`/PlayCity/${id}`}>
							<Image
								className="cardImage"
								src={url}
								alt={name}
								variant="bottom"
								fluid
							/>
						</Link>
					</button>
				</Card.Body>
			</Card>
		</div>
	);
}
