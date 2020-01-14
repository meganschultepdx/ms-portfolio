import React from "react";
import { Parallax, Background } from "react-parallax";
import About from "./About";

const headerForest = require("../assets/img/headerForest.jpg");

const HeaderParallax = () => {
	return (
		<div className="headerParallax">
			<Parallax
				blur={0.5}
				bgImage={headerForest}
				bgImageAlt="forest"
				strength={600}
			>
				<About />
				<div style={{ width: "100%", height: "auto" }} />
			</Parallax>
		</div>
	);
};

export default HeaderParallax;
