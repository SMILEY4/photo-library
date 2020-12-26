import React from "react";
import {CgClose} from "react-icons/cg";
import "./modal.css"
import Button, {ButtonStyles} from "../button/Button";

// https://reactgo.com/react-modal-tutorial/
export default function Modal({show, onClose, title, className, children}) {
	if (!show) {
		return null;
	}
	return (
		<div className="modal-overlay">
			<div className={"modal" + (className ? " " + className : "")}>

				<div className="modal-top">
					<div className="modal-title">
						{title}
					</div>
					<CgClose onClick={onClose}/>
				</div>

				<div className="modal-content">
					{children}
				</div>

				<div className="modal-bottom">
					<Button label="Accept" buttonStyle={ButtonStyles.NORMAL}/>
				</div>

			</div>
		</div>
	)


}