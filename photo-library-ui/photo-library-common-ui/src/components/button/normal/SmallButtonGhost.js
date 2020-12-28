import React from "react";
import ButtonBase from "../base/ButtonBase";
import "./buttonNormal.css"

export default function SmallButtonGhost({label, iconLeft, iconRight, disabled, onClick, className}) {
	return (
		<ButtonBase
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			disabled={disabled}
			onClick={onClick}
			className={"button-small button-ghost" + (className ? " " + className : "")}
		/>
	)
}
