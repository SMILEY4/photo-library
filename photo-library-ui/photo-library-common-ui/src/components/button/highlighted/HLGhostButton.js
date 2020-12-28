import React from "react";
import "./hlButton.css"
import HLButtonBase from "../base/HLButtonBase";

export default function HLGhostButton({bg, label, iconLeft, iconRight, disabled, onClick, className}) {
	return (
		<HLButtonBase
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			disabled={disabled}
			onClick={onClick}
			className={className}
			classNameInner={"hl-button-ghost-" + bg}
		/>
	)
}
