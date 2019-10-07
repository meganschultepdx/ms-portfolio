import React from "react";
import "./App.css";
import HeaderT from "./Components/HeaderT";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
	return (
		<div className="App">
			<HeaderT />
			<About />
			<Projects />
		</div>
	);
}

export default App;
