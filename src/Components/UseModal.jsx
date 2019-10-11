import { useState } from "react";
import "../../src/styles.css";

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [isShowed, setIsShowed] = useState(false);
	const [isDisplayed, setIsDisplayed] = useState(false);

	function toggle() {
		setIsShowing(!isShowing);
	}

	function highlanderToggle() {
		setIsShown(!isShown);
	}

	function partnerScraperToggle() {
		setIsShowed(!isShowed);
	}

	function fieldGuideToggle() {
		setIsDisplayed(!isDisplayed);
	}

	return {
		isShowing,
		isShown,
		isShowed,
		isDisplayed,
		toggle,
		highlanderToggle,
		partnerScraperToggle,
		fieldGuideToggle
	};
};

export default useModal;
