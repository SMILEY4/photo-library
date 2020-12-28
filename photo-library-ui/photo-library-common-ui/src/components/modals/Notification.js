import React from "react";
import "./notification.css"
import GradientBorderWrapper from "../gradientborder/GradientBorderWrapper";
import {CgClose} from "react-icons/cg";

export const NotificationType = {
	ERROR: "error",
	WARN: "warn",
	VALID: "valid",
	INFO: "info"
}

export default function Notification({type, icon, title, addCloseButton, onClose, children, className}) {
	return (
		<GradientBorderWrapper className={"notification-wrapper" + " notification-wrapper-" + type}>
			<div className={"notification" + (className ? " "+className : "")}>
				{
					icon
						? <div className="notification-icon">{icon}</div>
						: null
				}
				<div className="notification-content">
					{
						title
							? <h4 className="notification-title">{title}</h4>
							: null
					}
					<div className="notification-body">
						{children}
					</div>
				</div>
				{renderCloseButton(addCloseButton)}
			</div>
		</GradientBorderWrapper>
	)


	function renderCloseButton(addButton) {
		if (addButton) { // TODO: make real/generic icon-button
			return <CgClose onClick={() => onClose ? onClose() : null} className="notification-close"/>
		} else {
			return null
		}
	}
}