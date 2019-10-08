import React from "react";
import "./App.css";
import HeaderT from "./Components/HeaderT";
import About from "./Components/About";
import Projects from "./Components/Projects";
import AboutPersonal from "./Components/AboutPersonal";
import Footer from "./Components/Footer.jsx";

function App() {
	return (
		<div className="App">
			<HeaderT />
			<About />
			<Projects />
			<AboutPersonal />
			<Footer />
		</div>
	);
}

export default App;
