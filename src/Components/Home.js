import React from "react";
import HeaderT from "./HeaderT";
import Projects from "./Projects";
import AboutPersonal from "./AboutPersonal";
import Footer from "./Footer.jsx";
import HeaderParallax from "./HeaderParallax";
import ScrollButton from "./ScrollButton";

const Home = () => {
	return (
		<React.Fragment>
			<HeaderT />
			<HeaderParallax />
			<Projects />
			<AboutPersonal />
			<ScrollButton />
			<Footer />
		</React.Fragment>
	);
};
export default Home;
