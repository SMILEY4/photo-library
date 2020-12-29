import React from "react";
import ButtonBase from "../ButtonBase";

export default function IconButtonBase({disabled, onClick, children, className}) {
	return (
		<ButtonBase
			disabled={disabled}
			onClick={onClick}
			className={"icon-button" + (className ? " " + className : "")}
		>
			{children}
		</ButtonBase>
	)
}