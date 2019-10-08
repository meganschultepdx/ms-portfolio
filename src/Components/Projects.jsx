import React from "react";

const fieldguide2 = require("../assets/img/fieldguide2.png");
const stephenkingdom = require("../assets/img/stephenkingdom.png");
const highlander = require("../assets/img/highlander.png");
const PartnerScraperPic = require("../assets/img/PartnerScraperPic.png");
const freefood = require("../assets/img/freefood.png");
const hairsalon = require("../assets/img/hairsalon.png");

const Projects = () => {
	return (
		<div className="projects">
			<h2 className="sectionLabel">projects</h2>

			<h3 className="projectTitles">the stephen kingdom</h3>
			<img
				src={stephenkingdom}
				alt="screen shots of app"
				className="screenShot"
			/>
			<h4 className="stackUsed">React Native App with Firebase as BaaS</h4>
			<p className="aboutProject">
				This mobile app will be a database for information on Stephen King
				related movies and mini-series. It will provide users with information
			</p>
			<a
				href="https://github.com/meganschultepdx/the-stephen-kingdom"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			<h3 className="projectTitles">highlander tap house</h3>
			<img src={highlander} alt="screen shots of app" className="screenShot" />
			<h4 className="stackUsed">React web app</h4>
			<p className="aboutProject">
				This web application is designed to be both a tap room beer list for
				customers and a keg tracking app for the eployees of said tap room. It
				is created using React and supporting tools.
			</p>
			<a
				href="https://github.com/meganschultepdx/highlander-tap-house"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			<h3 className="projectTitles">partner scraper tool</h3>
			<div className="imageBackground">
				<div className="whiteImageBackground">
					<img
						src={PartnerScraperPic}
						className="screenShot"
						alt="screen shots of app"
					/>
				</div>
			</div>
			<h4 className="stackUsed">
				react with hooks & c#/EF Core/Sqlite web app
			</h4>
			<p className="aboutProject">
				This was an internal company tool created during a five week internship.
				The back-end is built as an independent API with C#/EF Core/Sqlite; the
				front-end is built in React with Hooks and Typescript and makes get
			</p>
			<a
				href="https://github.com/meganschultepdx/Epicodus-Internship-Project"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			<h3 className="projectTitles">portland field guide</h3>
			<img src={fieldguide2} alt="screen shots of app" className="screenShot" />
			<h4 className="stackUsed">Angular & Firebase web app</h4>
			<p className="aboutProject">
				This is a web application that allows users to search local native and
				invasive plants in Portland, OR. This app was inspired by the love of
				plants and the desire to know them better. It is very satisfying to be
			</p>
			<a
				href="https://portland-field-guide.firebaseapp.com/"
				target="blank"
				className="linkToHosted"
			>
				view hosted site
			</a>
			<a
				href="https://github.com/meganschultepdx/Portland-field-guide"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			<h3 className="projectTitles">alchemy hair salon</h3>
			<img src={hairsalon} alt="screen shots of app" className="screenShot" />
			<h4 className="stackUsed">c# & MySql website</h4>
			<p className="aboutProject">
				This web application allows the user to check the surf report and
				weather for three main surf spots on the Oregon coast. It prpovides only
				the most essential information needed to decide whether the conditions
				are good for surfing at that particular location at that particular time
			</p>
			<a
				href="https://github.com/meganschultepdx/HairSalon"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			<h3 className="projectTitles">pdx free food finder</h3>
			<img src={freefood} alt="screen shots of app" className="screenShot" />
			<h4 className="stackUsed">JavaScript & JQuery Website</h4>
			<p className="aboutProject">
				This is a website that helps users easily locate free food-pantries and
				meals across Portland, OR. As such, we call it "Free Food Finder PDX"
				(FFF-PDX). The landing page displays the FFF-PDX logo, a menu bar and a
			</p>
			<a
				href="https://meganschultepdx.github.io/free-food-finder/index.html"
				target="blank"
				className="linkToHosted"
			>
				view hosted site
			</a>
			<a
				href="https://github.com/meganschultepdx/free-food-finder"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>
		</div>
	);
};

export default Projects;
