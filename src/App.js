import React from "react";
import * as RoutesModule from "../src/routes";
import "./Styles.css";
import HeaderT from "./Components/HeaderT";
import About from "./Components/About";
import Projects from "./Components/Projects";
import AboutPersonal from "./Components/AboutPersonal";
import Footer from "./Components/Footer.jsx";

let routes = RoutesModule.routes;

function App() {
	return (
		<div className="App">
			<HeaderT />
			{routes}
			<About />
			<Projects />
			<AboutPersonal />
			<Footer />
		</div>
	);
}

export default App;
