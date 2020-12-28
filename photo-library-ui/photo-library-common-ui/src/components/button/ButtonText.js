import React from "react";
import "./button.css"
import ButtonBase from "./ButtonBase";

export default function ButtonGhost({label, iconLeft, iconRight, small, disabled, onClick, className}) {
	return (
		<ButtonBase
			label={label}
			iconLeft={iconLeft}
			iconRight={iconRight}
			small={small}
			disabled={disabled}
			onClick={onClick}
			className={"button-text" + (className ? " " + className : "")}
		/>
	)
}