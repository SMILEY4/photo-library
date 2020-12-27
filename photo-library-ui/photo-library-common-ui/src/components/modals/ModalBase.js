import React from "react";
import "./modalBase.css"

// https://reactgo.com/react-modal-tutorial/
export default function ModalBase({show, showOverlay, addShadow, className, children}) {
	if (!show) {
		return null;
	}
	return (
		<div className={showOverlay===false ? "modal-hidden-overlay" : "modal-overlay"}>
			<div className={(className ? className : "") + (addShadow===false ? "" : " modal with-shadow-2")}>
				{children}
			</div>
		</div>
	)
}