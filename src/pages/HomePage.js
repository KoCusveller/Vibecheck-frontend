import React from "react";

import CityMiniature from "../components/CityMiniature";

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
			<div>Homepage</div>

			<div>
				{dummyArray.map((city, index) => (
					<CityMiniature
						key={index}
						name={city.name}
						url={city.url}
					/>
				))}
			</div>
		</div>
	);
}
