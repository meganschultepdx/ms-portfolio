import React from "react";
import Title from "./Title";
import Contact from "./Contact";

const HeaderT = () => {
	return (
		<div className="header">
			{/* <img src={profilePic} className="profile-pic" alt="profile pic" /> */}
			<Title />
			<Contact />
		</div>
	);
};

export default HeaderT;
