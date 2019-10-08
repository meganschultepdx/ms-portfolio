import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const FieldGuideVid = require("../assets/img/PortlandFieldGuide.mov");

const PortlandFieldGuide = () => {
	return (
		<div className="stephenKingdom">
			<Player playsInline poster="/assets/img/highlander" src={FieldGuideVid} />
		</div>
	);
};

export default PortlandFieldGuide;
