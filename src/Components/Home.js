import React, { Component } from "react";
import HeaderT from "./HeaderT";
// import About from "./About";
import Projects from "./Projects";
import AboutPersonal from "./AboutPersonal";
import Footer from "./Footer.jsx";
import HeaderParallax from "../Components/HeaderParallax";

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<HeaderT />
				<HeaderParallax />
				<Projects />
				<AboutPersonal />
				<Footer />
			</React.Fragment>
		);
	}
}
