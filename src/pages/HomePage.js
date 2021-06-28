import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CityMiniature from "../components/CityMiniature";

const temporaryLoginChat = false;

// const cityVibes = fetchCities

const dummyArray = [
	{
		name: "New York",
		url: "https://www.qantas.com/content/dam/travelinsider/images/explore/north-america/usa/new-york/apps-to-download-before-you-go-to-new-york/GettyImages-1035114520.jpg",
	},
	{
		name: "Santiago de Compostela",
		url: "http://www.pietre-vive.org/wp-content/uploads/2017/11/IMG_4628.jpg",
	},
	{
		name: "Rome",
		url: "https://www.worldtopupdates.com/wp-content/uploads/2017/05/5104226627001_5232386545001_5215063851001-vs.jpg",
	},
];

export default function HomePage() {
	return (
		<div>
			<div>
				<h1>Vibecheck</h1>
			</div>

			<div>
				{dummyArray.map((city, index) => (
					<CityMiniature
						key={index}
						name={city.name}
						url={city.url}
					/>
				))}
			</div>
			<div>
				{temporaryLoginChat ? (
					<Link to="/PostCity">
						<Button variant="light">
							<h2> Post a new City Vibe!</h2>
						</Button>
					</Link>
				) : (
					<Link to="/login">
						<Button variant="light">
							<h2>Post a new City Vibe</h2>
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
