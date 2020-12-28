import React from "react";
import "./hlButton.css"
import HLButtonBase from "../base/HLButtonBase";

export default function InfoButtonGhost({bg, label, iconLeft, iconRight, disabled, onClick, className}) {
	return (
		<HLGhostButton
			bg={bg}
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			disabled={disabled}
			onClick={onClick}
			className={"hl-button-info" + (className ? " " + className : "")}
		/>
	)
}
