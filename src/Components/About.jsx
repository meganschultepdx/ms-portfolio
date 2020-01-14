import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles.css";

const About = () => {
	return (
		<div className="about">
			<p className="aboutParagraphs">
				Hi! I am front-end developer who is most passionate about bringing
				beautiful designs and interactive, intuitive user experiences to life!
			</p>
			{/* <p className="aboutParagraphs  two">
				I love programming in JavaScript and am currently most excited about
				React with Hooks and Context and the clean, powerful code you can write
				with it.
			</p> */}
			<p className="aboutParagraphs">
				I can't stop trying to learn everything at once and I am so eager to
				continue growing in my new career!
			</p>
			<Link to="/resume" className="linkToResume">
				view my resume
			</Link>
		</div>
	);
};

export default About;
