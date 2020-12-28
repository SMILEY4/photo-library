import React from "react";
import "./hlButton.css"
import HLButtonBase from "../base/HLButtonBase";

export default function WarnButton({label, iconLeft, iconRight, disabled, onClick, className}) {
	return (
		<HLButtonBase
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			disabled={disabled}
			onClick={onClick}
			className={"hl-button-warn" + (className ? " " + className : "")}
		/>
	)
}
