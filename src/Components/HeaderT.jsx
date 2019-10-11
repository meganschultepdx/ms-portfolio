import React from "react";
import Title from "./Title";
import Contact from "./Contact";
import "../../src/styles.css";

const HeaderT = () => {
	return (
		<div className="header">
			<Title />
			<Contact />
		</div>
	);
};

export default HeaderT;
