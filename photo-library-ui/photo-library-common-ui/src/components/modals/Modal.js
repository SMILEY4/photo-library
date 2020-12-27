import React from "react";
import "./modal.css"
import ModalBase from "./ModalBase";
import {CgClose} from "react-icons/cg";
import Button from "../button/Button";
import SpecializedButton from "../button/SpecializedButton";

export default function Modal({show, icon, addCloseButton, onClose, footerActions, className, children}) {
	return (
		<ModalBase show={show} className={className}>
			<div className="modal-header">
				{ icon
					? <div className="modal-icon">{icon}</div>
					: null
				}
				<h3 className="modal-title">
					Modal Header
				</h3>
				{renderCloseButton(addCloseButton)}
			</div>
			<div className="modal-body">
				{children}
			</div>
			<div className="modal-footer">
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
			return <CgClose onClick={() => onClose ? onClose() : null} className="modal-button-close"/>
		} else {
			return null
		}
	}

}