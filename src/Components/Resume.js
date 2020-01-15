import React from "react";
import { Link } from "react-router-dom";
import PDFViewer from "./PDXViewer";
import PDFJSBackend from "../Backends/pdfjs";

const Resume = () => {
	return (
		<React.Fragment>
			<Link to="/">
				<div className="backhome-container ">
					<button className="back-home">back home</button>
				</div>
			</Link>
			<PDFViewer backend={PDFJSBackend} src="/megan_schulte_resume.pdf" />
		</React.Fragment>
	);
};

export default Resume;
