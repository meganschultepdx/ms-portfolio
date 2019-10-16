import React from "react";
import ReactDOM from "react-dom";
import "../../src/styles.css";

const newKingdomScreenshots = require("../assets/img/newKingdomScreenshots.jpg");
// const stephenkingdom = require("../assets/img/stephenkingdom.png");

const KingdomModal = ({ isShowing, hide }) =>
	isShowing
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
						<div className="modal">
							<div className="modal-header">
								<button
									type="button"
									className="modal-close-button"
									data-dismiss="modal"
									aria-label="Close"
									onClick={hide}
								>
									close
									{/* <span aria-hidden="true">&times;</span> */}
								</button>
							</div>
							{/* <img
								src={stephenkingdom}
								alt="screen shots of app"
								className="screenShot"
							/> */}
							<img
								src={newKingdomScreenshots}
								alt="screenshots of app"
								className="modalImage"
							/>
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;

export default KingdomModal;
