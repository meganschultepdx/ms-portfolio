import React from "react";
import ReactDOM from "react-dom";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import "../../src/styles.css";

const PortlandFieldGuideVid = require("../assets/img/PortlandFieldGuide.mov");
const fieldGuidePoster = require("../assets/img/fieldGuidePoster.png");

const PortlandFieldGuideModal = ({ isDisplayed, hide }) =>
	isDisplayed
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className="modal-overlay" />
					<div
						className="modal-wrapper"
						aria-modal
						aria-hidden
						tabIndex={-1}
						role="dialog"
					>
						<div className="fieldGuideModal">
							<div className="modal-header">
								<button
									type="button"
									className="modal-close-button"
									data-dismiss="modal"
									aria-label="Close"
									onClick={hide}
								>
									close
								</button>
							</div>
							<Player
								className="fieldGuideVid"
								playsInline
								poster={fieldGuidePoster}
								src={PortlandFieldGuideVid}
							/>
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;

export default PortlandFieldGuideModal;
