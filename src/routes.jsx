import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import PartnerScarper from "./Components/PartnerScraper";
import HighlanderTapHouse from "./Components/HighlanderTapHouse";
import StephenKingdom from "./Components/StephenKingdom";
import PortlandFieldGuide from "./Components/PortlandFieldGuide";

export const routes = (
	<div>
		<Router>
			<Switch>
				{/* <Route exact path="/" component={App} /> */}
				<Route path="/partnerscraper" component={PartnerScarper} />
				<Route path="/highlandertaphouse" component={HighlanderTapHouse} />
				<Route path="/stephenkingdom" component={StephenKingdom} />
				<Route path="/portlandfieldguide" component={PortlandFieldGuide} />
			</Switch>
		</Router>
	</div>
);
