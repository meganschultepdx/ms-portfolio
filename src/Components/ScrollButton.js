/** React components for scrolling back to the top of the page **/
import React from "react";

class ScrollButton extends React.Component {
	constructor() {
		super();

		this.state = {
			intervalId: 0
		};
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		let intervalId = setInterval(this.scrollStep.bind(this), "0");
		this.setState({ intervalId: intervalId });
	}

	render() {
		return (
			<button
				title="Back to top"
				className="scrollBtn"
				onClick={() => {
					this.scrollToTop();
				}}
			>
				<span className="arrow-up">
					<i class="fas fa-chevron-up fa-2x"></i>
				</span>
			</button>
		);
	}
}

export default ScrollButton;
