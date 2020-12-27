import React from "react";
import "./dialog.css"
import ModalBase from "./ModalBase";
import {CgClose} from "react-icons/cg";
import Button from "../button/Button";
import SpecializedButton from "../button/SpecializedButton";

export default function Dialog({show, icon, addCloseButton, onClose, footerActions, className, children}) {
	return (
		<ModalBase show={show} className={"dialog" + (className ? " " + className : "")}>
			<div className="dialog-header">
				{icon
					? <div className="dialog-icon">{icon}</div>
					: null
				}
				<h3 className="dialog-title">
					Modal Header
				</h3>
				{renderCloseButton(addCloseButton)}
			</div>
			<div className="dialog-body">
				{children}
			</div>
			<div className="dialog-footer">
				{
					footerActions.map(action => {
						if (action.specialization) {
							return (
								<SpecializedButton
									label={action.label}
									type={action.specialization}
									disabled={action.disabled}
									onClick={action.onClick}
								/>
							)
						} else {
							return (
								<Button
									label={action.label}
									disabled={action.disabled}
									onClick={action.onClick}
									buttonStyle={action.buttonStyle}
								/>
							)
						}
					})
				}
			</div>
		</ModalBase>
	)


	function renderCloseButton(addButton) {
		if (addButton) { // TODO: make real/generic icon-button
			return <CgClose onClick={() => onClose ? onClose() : null} className="dialog-button-close"/>
		} else {
			return null
		}
	}

}