import React from "react";

// window frame style/size

// get name & url props, map it

export default function CityMiniature({ name, url }) {
	return (
		<div>
			<button>
				{name}

				<img src={url} alt={name} style={{ maxWidth: "400px" }} />
			</button>
		</div>
	);
}
