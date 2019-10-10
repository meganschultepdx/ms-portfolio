import React from "react";
import UseModal from "./UseModal";
import KingdomModal from "./KingdomModal";
import HighlanderModal from "./HighlanderModal";
import PartnerScraperModal from "./PartnerScraperModal";
import PortlandFieldGuideModal from "./PortlandFieldGuideModal";

const fieldguide2 = require("../assets/img/fieldguide2.png");
const stephenkingdom = require("../assets/img/stephenkingdom.png");
const highlander = require("../assets/img/highlander.png");
const PartnerScraperPic = require("../assets/img/PartnerScraperPic.png");
const freefood = require("../assets/img/freefood.png");
const hairsalon = require("../assets/img/hairsalon.png");

const Projects = () => {
	const {
		isShowing,
		isShown,
		isShowed,
		isDisplayed,
		toggle,
		highlanderToggle,
		partnerScraperToggle,
		fieldGuideToggle
	} = UseModal();
	return (
		<div className="projects">
			<h2 className="sectionLabel">projects</h2>

			{/* the stephen kingdom */}
			<h3 className="projectTitles">the stephen kingdom</h3>
			<button onClick={toggle}>
				<div className="container">
					<img
						src={stephenkingdom}
						alt="screen shots of app"
						className="screenShot"
					/>
					<div className="middle">
						<div className="textOnHover">click for more views of app</div>
					</div>
				</div>
			</button>
			<KingdomModal isShowing={isShowing} hide={toggle} />
			<h4 className="stackUsed">
				React Native App with Expo & Firebase as BaaS
			</h4>
			<p className="aboutProject">
				This mobile app is a database reference of all Stephen King related
				movies and mini-series. It was built as my capstone project for school.
			</p>
			<a
				href="https://github.com/meganschultepdx/the-stephen-kingdom"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			{/* highlander Tap House */}
			<h3 className="projectTitles">highlander tap house</h3>
			<button onClick={highlanderToggle}>
				<div className="container">
					<img
						src={highlander}
						alt="screen shots of app"
						className="screenShot"
					/>
					<div className="middle">
						<div className="textOnHover">click for more views of app</div>
					</div>
				</div>
			</button>
			<HighlanderModal isShown={isShown} hide={highlanderToggle} />
			<h4 className="stackUsed">React web app</h4>
			<p className="aboutProject">
				This is a website created for a fictional tap house with both cutstomer
				facing pages and an employee page that allows for adding of new kegs and
				tracking pints left in kegs.
			</p>
			<a
				href="https://github.com/meganschultepdx/highlander-tap-house"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			{/* Partner Scraper Tool */}
			<h3 className="projectTitles">partner scraper tool</h3>
			<div className="imageBackground">
				<div className="whiteImageBackground">
					<button onClick={partnerScraperToggle}>
						<div className="container">
							<img
								src={PartnerScraperPic}
								className="screenShot"
								alt="screen shots of app"
							/>
							<div className="middle">
								<div className="textOnHover">click for more views of app</div>
							</div>
						</div>
					</button>
					<PartnerScraperModal
						isShowed={isShowed}
						hide={partnerScraperToggle}
					/>
				</div>
			</div>
			<h4 className="stackUsed">
				react with hooks & c#/EF Core/Sqlite web app
			</h4>
			<p className="aboutProject">
				This was an internal company tool created during a five week internship
				that is designed to call partner APIs to determine whether a submitted
				album is live on their site. The backend is built as an API with a
				database that is called by the project's front-end to display data.
			</p>
			<a
				href="https://github.com/meganschultepdx/Epicodus-Internship-Project"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			{/* Portland field Guide */}
			<h3 className="projectTitles">portland field guide</h3>
			<button onClick={fieldGuideToggle}>
				<div className="container">
					<img
						src={fieldguide2}
						alt="screen shots of app"
						className="screenShot"
					/>
					<div className="middle">
						<div className="textOnHover">click for more views of app</div>
					</div>
				</div>
			</button>
			<PortlandFieldGuideModal
				isDisplayed={isDisplayed}
				hide={fieldGuideToggle}
			/>
			<h4 className="stackUsed">Angular & Firebase web app</h4>
			<p className="aboutProject">
				This is a web app that was built as part of a group project with mobile
				first design. It provides users with a database of local Portland flora.
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
				className="linkToCode linkToCodeAlt"
			>
				view Code
			</a>
			<div className="spacer"></div>

			{/* Alchemy Hair Salon */}
			<h3 className="projectTitles">alchemy hair salon</h3>
			<div className="alchemyContainer">
				<img src={hairsalon} alt="screen shots of app" className="screenShot" />
			</div>
			<h4 className="stackUsed">c# & MySql website</h4>
			<p className="aboutProject">
				This web application was built as an independent school project and is a
				website for a fictional hair salon. It uses a MySql database to provide
				an editable list of stylists, clients and specialties.
			</p>
			<a
				href="https://github.com/meganschultepdx/HairSalon"
				target="blank"
				className="linkToCode"
			>
				view Code
			</a>
			<div className="spacer"></div>

			{/* free food finder */}
			<h3 className="projectTitles">pdx free food finder</h3>
			<div className="container">
				<img src={freefood} alt="screen shots of app" className="screenShot" />
			</div>
			<h4 className="stackUsed">JavaScript & JQuery Website</h4>
			<p className="aboutProject">
				This is a website that helps users easily locate free food-pantries,
				meal and urban foraging opportunities across Portland. It was built as a
				school group project in Epicodus's intro to coding course.
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
				className="linkToCode linkToCodeAlt"
			>
				view Code
			</a>
			<div className="spacer"></div>
		</div>
	);
};

export default Projects;
