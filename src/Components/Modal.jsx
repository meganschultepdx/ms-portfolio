import React from "react";
import ReactDOM from "react-dom";

const kingdomscreenshots = require("../assets/img/kingdomscreenshots.pdf");

const Modal = ({ isShowing, hide }) =>
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
							<img src={kingdomscreenshots} alt="screenshots of app" />
						</div>
					</div>
				</React.Fragment>,
				document.body
		  )
		: null;

export default Modal;
