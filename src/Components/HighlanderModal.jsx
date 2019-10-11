import React from "react";
import ReactDOM from "react-dom";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import "../../src/styles.css";

const HighlanderTapHouseVid = require("../assets/img/HighlanderTapHouse.mov");

const HighlanderModal = ({ isShown, hide }) =>
	isShown
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
						<div className="vidModal">
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
								className="modalVid"
								playsInline
								poster="/assets/img/highlander"
								src={HighlanderTapHouseVid}
							/>
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;

export default HighlanderModal;
