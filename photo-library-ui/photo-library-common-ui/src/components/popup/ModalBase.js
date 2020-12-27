import React from "react";
import "./modalBase.css"

// https://reactgo.com/react-modal-tutorial/
export default function ModalBase({show, className, children}) {
	if (!show) {
		return null;
	}
	return (
		<div className="modal-overlay">
			<div className={"modal" + (className ? " " + className : "")}>
				{children}
			</div>
		</div>
	)
}