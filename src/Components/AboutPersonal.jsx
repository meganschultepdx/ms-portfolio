import React from "react";

const gibby = require("../assets/img/gibby.jpg");

const AboutPersonal = () => {
	return (
		<div className="aboutPersonal">
			<h2 className="sectionLabel">more about me</h2>
			<p className="personalParagraph">
				When I'm not coding you can most likely find me somewhere outdoors
				either canoeing, camping or hiking with my dog, at the Hollywood theater
				watching old horror or cult movies, in my studio printing or making
				chainmaille jewelry or hanging out with friends in my neighborhood of St
				Johns.
			</p>
			<div className="gibbyContainer">
				<img src={gibby} alt="my dog" className="gibby" />
			</div>
		</div>
	);
};

export default AboutPersonal;
