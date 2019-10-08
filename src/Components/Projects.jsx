import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const fieldguide2 = require("../assets/img/fieldguide2.png");
const stephenkingdom = require("../assets/img/stephenkingdom.png");
const HighlanderTapHouse = require("../assets/img/HighlanderTapHouse.mov");
const PartnerScraper = require("../assets/img/PartnerScraper.mov");

const Projects = () => {
	return (
		<div className="projects">
			<h2>projects</h2>

			<h3>partner scraper tool</h3>
			<Player
				playsInline
				poster="/assets/img/highlander"
				src={PartnerScraper}
			/>
			<p>
				This was an internal company tool created during a five week internship.
				The back-end is built as an independent API with C#/EF Core/Sqlite; the
				front-end is built in React with Hooks and Typescript and makes get
			</p>
			<a
				href="https://github.com/meganschultepdx/Epicodus-Internship-Project"
				target="blank"
			>
				view Code
			</a>

			<h3>the stephen kingdom</h3>
			<img src={stephenkingdom} alt="screen shots of app" />
			<p>
				This mobile app will be a database for information on Stephen King
				related movies and mini-series. It will provide users with information
			</p>
			<a
				href="https://github.com/meganschultepdx/the-stephen-kingdom"
				target="blank"
			>
				view Code
			</a>

			<h3>highlander tap house</h3>
			<Player
				playsInline
				poster="/assets/img/highlander"
				src={HighlanderTapHouse}
			/>
			<p>
				This web application is designed to be both a tap room beer list for
				customers and a keg tracking app for the eployees of said tap room. It
				is created using React and supporting tools.
			</p>
			<a
				href="https://github.com/meganschultepdx/highlander-tap-house"
				target="blank"
			>
				view Code
			</a>

			<h3>portland field guide</h3>
			<a href="https://portland-field-guide.firebaseapp.com/">
				view hosted site
			</a>
			<img src={fieldguide2} alt="screen shots of app" />
			<p>
				This is a web application that allows users to search local native and
				invasive plants in Portland, OR. This app was inspired by the love of
				plants and the desire to know them better. It is very satisfying to be
			</p>
			<a
				href="https://github.com/meganschultepdx/Portland-field-guide"
				target="blank"
			>
				view Code
			</a>

			<h3>pdx free food finder</h3>
			<a
				href="https://meganschultepdx.github.io/free-food-finder/index.html"
				target="blank"
			>
				view hosted site
			</a>
			<p>
				This is a website that helps users easily locate free food-pantries and
				meals across Portland, OR. As such, we call it "Free Food Finder PDX"
				(FFF-PDX). The landing page displays the FFF-PDX logo, a menu bar and a
			</p>
			<a
				href="https://github.com/meganschultepdx/free-food-finder"
				target="blank"
			>
				view Code
			</a>

			<h3>zamn oregon coast surf finder</h3>
			<p>
				This web application allows the user to check the surf report and
				weather for three main surf spots on the Oregon coast. It prpovides only
				the most essential information needed to decide whether the conditions
				are good for surfing at that particular location at that particular time
			</p>
			<a href="https://github.com/meganschultepdx/ZAMN.Solution" target="blank">
				view Code
			</a>
		</div>
	);
};

export default Projects;
