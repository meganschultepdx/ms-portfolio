import React from "react";
import ReactDOM from "react-dom";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const PartnerScraperVid = require("../assets/img/PartnerScraper.mov");

const PartnerScraperModal = ({ isShowed, hide }) =>
	isShowed
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
								src={PartnerScraperVid}
							/>
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;

export default PartnerScraperModal;
