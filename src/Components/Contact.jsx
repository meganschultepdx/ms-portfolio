import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faTwitter,
	faGithubAlt
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	return (
		<div className="contact">
			<a href="mailto:megan.schulte.pdx@gmail.com">
				<FontAwesomeIcon icon={faEnvelope} size="lg" />
			</a>
			<a href="https://www.linkedin.com/in/megan-schulte-pdx/">
				<FontAwesomeIcon icon={faLinkedin} size="lg" />
			</a>
			<a href="https://github.com/meganschultepdx">
				<FontAwesomeIcon icon={faGithubAlt} size="lg" />
			</a>
			<a href="https://twitter.com/MeganSchultePdx?s=09">
				<FontAwesomeIcon icon={faTwitter} size="lg" />
			</a>
		</div>
	);
};

export default Contact;
