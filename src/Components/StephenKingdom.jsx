import React from "react";
import "../../src/styles.css";

const kingdomscreenshots = require("../assets/img/kingdomscreenshots.png");

const StephenKingdom = () => {
	return (
		<div className="stephenKingdom">
			<img src={kingdomscreenshots} alt="app screenshots" />
		</div>
	);
};

export default StephenKingdom;
