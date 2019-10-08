import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const PartnerScraperVid = require("../assets/img/PartnerScraper.mov");

const PartnerScraper = () => {
	return (
		<div className="stephenKingdom">
			<Player
				playsInline
				poster="/assets/img/highlander"
				src={PartnerScraperVid}
			/>
		</div>
	);
};

export default PartnerScraper;
