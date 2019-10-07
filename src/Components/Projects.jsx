import React from "react";

const Projects = () => {
	return (
		<div className="projects">
			<h2>projects</h2>
			<h3>partner scraper tool</h3>
			<p>
				This was an internal company tool created during a five week internship.
				The back-end is built as an independent API with C#/EF Core/Sqlite; the
				front-end is built in React with Hooks and Typescript and makes get
				requests to the backend API to access the sqlite database. The main
				function of the tool is to use album upcs to make scrapes (currently a
				GET request to an API) of company partners to get information on whether
				an album that has been submitted to that partner is currently live on
				their site. It performs and displays Scans for an entered upc that are
				made up of a list of scrapes from all active partners. At a glance the
				UI displays the most recent scan with date and live/notlive as well as a
				table with the history of scans/scrapes for the entered upc. We started
				a dataset page with a table that would display all scrapes for a
				specific upc but were not able to finish the filter/sort function for
				the table in the time of our internship.
			</p>
			<a href="https://github.com/meganschultepdx/Epicodus-Internship-Project">
				view Code
			</a>
			<h3>the stephen kingdom</h3>
			<p>
				This mobile app will be a database for information on Stephen King
				related movies and mini-series. It will provide users with information
				specific to how the work is relate to Stephen King, be it writing,
				directing, or just being based off his literature. This information will
				be pulled from a Firebase database as a stretch goal. As a stretch goal
				it will also provide the user with information on where the movies can
				be viewed online by use of the Utelly API. Because I will be learning
				how to build a React Native app for the first time and would also like
				to incorporate some accessibility functions into the app, the content
				structure will be kept somewhat simple for MVP.
			</p>
			<a href="https://github.com/meganschultepdx/the-stephen-kingdom">
				view Code
			</a>
			<h3>highlander tap house</h3>
			<p>
				This web application is designed to be both a tap room beer list for
				customers and a keg tracking app for the eployees of said tap room. It
				is created using React and supporting tools.
			</p>
			<a href="https://github.com/meganschultepdx/highlander-tap-house">
				view Code
			</a>
			<h3>highlander tap house</h3>
			<p>
				This web application is designed to be both a tap room beer list for
				customers and a keg tracking app for the eployees of said tap room. It
				is created using React and supporting tools.
			</p>
			<a href="https://github.com/meganschultepdx/highlander-tap-house">
				view Code
			</a>
			<h3>portland field guide</h3>
			<p>
				This is a web application that allows users to search local native and
				invasive plants in Portland, OR. This app was inspired by the love of
				plants and the desire to know them better. It is very satisfying to be
				out on a hike, in city you love, and be able to recognize the plants
				around you. As such, this app was designed and optimized for use on a
				phone, acting as a digital field guide. Thus, this app is for the people
				and visitors of Portland, OR!
			</p>
			<a href="https://github.com/meganschultepdx/Portland-field-guide">
				view Code
			</a>
			<h3>zamn oregon coast surf finder</h3>
			<p>
				This web application allows the user to check the surf report and
				weather for three main surf spots on the Oregon coast. It prpovides only
				the most essential information needed to decide whether the conditions
				are good for surfing at that particular location at that particular time
				and day. The information is presented in a visually appealing and
				uncluttered manner via constantly updating embedded widgets and also via
				other surfers comments/posts. In addition to the surf report it also
				includes separate pages for nearby hikes and restaurants; these pages
				also allow users to add recommendations and comments.
			</p>
			<a href="https://github.com/meganschultepdx/ZAMN.Solution">view Code</a>
			<h3>pdx free food finder</h3>
			<p>
				This is a website that helps users easily locate free food-pantries and
				meals across Portland, OR. As such, we call it "Free Food Finder PDX"
				(FFF-PDX). The landing page displays the FFF-PDX logo, a menu bar and a
				display that shows the free grocery and meal events of the day, a quick
				about-us blurb, and a notice about the fruit and vegetables that are
				currently in season within the area. The menu bar allows the user to
				navigate to through the five FFF-PDX webpages: about page, resources
				page, calendar page, map page, and a link back to the homepage.
			</p>
			<a href="https://github.com/meganschultepdx/free-food-finder">
				view Code
			</a>
		</div>
	);
};

export default Projects;
