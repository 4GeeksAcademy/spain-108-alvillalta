import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import starWarsDisplay from "../assets/star-wars-display.jpg";

export const Home = () => {
	return (
		<div className="text-center my-4">
			<img src={starWarsDisplay} className="img-fluid rounded"/>
		</div>
	);
}; 