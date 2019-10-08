import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faTwitterSquare,
	faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	return (
		<div className="contact">
			<a href="mailto:megan.schulte.pdx@gmail.com">
				<FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
			</a>
			<a href="https://www.linkedin.com/in/megan-schulte-pdx/">
				<FontAwesomeIcon icon={faLinkedin} size="lg" />
			</a>
			<a href="https://github.com/meganschultepdx">
				<FontAwesomeIcon icon={faGithubSquare} size="lg" />
			</a>
			<a href="https://twitter.com/MeganSchultePdx?s=09">
				<FontAwesomeIcon icon={faTwitterSquare} size="lg" />
			</a>
		</div>
	);
};

export default Contact;
