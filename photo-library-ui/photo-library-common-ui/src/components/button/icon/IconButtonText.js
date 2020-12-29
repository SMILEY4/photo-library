import React from "react";
import IconButtonBase from "./IconButtonBase";

export default function IconButtonText({disabled, onClick, children, className}) {
	return (
		<IconButtonBase
			disabled={disabled}
			onClick={onClick}
			className={"button-text" + (className ? " " + className : "")}
		>
			{children}
		</IconButtonBase>
	)
}