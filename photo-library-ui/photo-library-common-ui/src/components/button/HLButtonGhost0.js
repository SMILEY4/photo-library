import React from "react";
import HLButton from "./HLButton";
import "./hlButtons.css"

export default function HLButtonGhost0({type, label, iconLeft, iconRight, small, disabled, onClick, className}) {
	return (
		<HLButton
			type={type}
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			small={small}
			disabled={disabled}
			onClick={onClick}
			className={"hl-button-ghost-0" + (className ? " " + className : "")}
		/>
	)
}
