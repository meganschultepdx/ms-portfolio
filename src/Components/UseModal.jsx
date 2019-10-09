import { useState } from "react";

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);
	const [isShown, setIsShown] = useState(false);

	function toggle() {
		setIsShowing(!isShowing);
	}

	function highlanderToggle() {
		setIsShown(!isShown);
	}

	return {
		isShowing,
		isShown,
		toggle,
		highlanderToggle
	};
};

export default useModal;
