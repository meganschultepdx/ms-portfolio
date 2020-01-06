import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "./Components/Resume";
import Home from "./Components/Home";

function App() {
	return (
		<React.Fragment className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/resume" component={Resume} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
