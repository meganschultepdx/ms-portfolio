import React from "react";
import "../../src/styles.css";

const Title = () => {
	return (
		<div className="title">
			<div className="titleName">
				<h1 id="titleFirstName">Megan</h1>
				<h1 id="titleLastName">
					<span className="lastNameSpacer">.</span>
					Schulte
				</h1>
			</div>
			<div className="titleDescription">
				<h2 id="titleDescription">
					web developer
					<br />
					portland oregon
				</h2>
			</div>
		</div>
	);
};

export default Title;
