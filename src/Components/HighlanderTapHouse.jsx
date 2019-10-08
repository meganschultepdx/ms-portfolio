import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const HighlanderTapHouseVid = require("../assets/img/HighlanderTapHouse.mov");

const HighlanderTapHouse = () => {
	return (
		<div className="stephenKingdom">
			<Player
				playsInline
				poster="/assets/img/highlander"
				src={HighlanderTapHouseVid}
			/>
		</div>
	);
};

export default HighlanderTapHouse;
