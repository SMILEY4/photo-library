import React from "react";
import IconButtonBase from "./IconButtonBase";

export default function IconButtonGhost({disabled, onClick, children, className}) {
	return (
		<IconButtonBase
			disabled={disabled}
			onClick={onClick}
			className={"button-ghost" + (className ? " " + className : "")}
		>
			{children}
		</IconButtonBase>
	)
}