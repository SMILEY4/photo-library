import React from "react";
import "./hlButton.css"
import HLButtonBase from "../base/HLButtonBase";

export default function WarnButtonGhost({bg, label, iconLeft, iconRight, disabled, onClick, className}) {
	return (
		<HLButtonBase
			bg={bg}
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			disabled={disabled}
			onClick={onClick}
			className={"hl-button-warn" + (className ? " " + className : "")}
		/>
	)
}
