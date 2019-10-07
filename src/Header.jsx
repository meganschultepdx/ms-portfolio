import React from "react";
// import profilePic from "./assets/img/profilePic;";
import Title from "./Components/Title";
import Contact from "./Components/Contact";

const Header = () => {
	return (
		<div className="header">
			{/* <img src={profilePic} className="profile-pic" alt="profile pic" /> */}
			<Title />
			<Contact />
		</div>
	);
};

export default Header;
