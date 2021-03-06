import React from "react";
import ButtonBase from "../ButtonBase";

export default function ButtonText({disabled, onClick, children, className}) {
	return (
		<ButtonBase
			disabled={disabled}
			onClick={onClick}
			className={"button-text" + (className ? " " + className : "")}
		>
			{children}
		</ButtonBase>
	)
}