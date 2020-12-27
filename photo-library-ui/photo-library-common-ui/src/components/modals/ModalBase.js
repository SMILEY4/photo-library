import React from "react";
import "./modalBase.css"

// https://reactgo.com/react-modal-tutorial/
export default function ModalBase({show, showOverlay, className, children}) {
	if (!show) {
		return null;
	}
	return (
		<div className={showOverlay===false ? "modal-hidden-overlay" : "modal-overlay"}>
			<div className={"modal with-shadow-2" + (className ? " " + className : "")}>
				{children}
			</div>
		</div>
	)
}