import React from "react";
import ButtonFilled from "./ButtonFilled";

export default function SmallButtonFilled({type, disabled, onClick, children, className}) {
	return (
		<ButtonFilled
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={"button-small" + (className ? " " + className : "")}
		>
			{children}
		</ButtonFilled>
	)
}