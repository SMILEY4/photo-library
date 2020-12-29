import React from "react";
import IconButtonBase from "./IconButtonBase";

export default function IconButtonFilled({disabled, onClick, children, className}) {
	return (
		<IconButtonBase
			disabled={disabled}
			onClick={onClick}
			className={"button-filled" + (className ? " " + className : "")}
		>
			{children}
		</IconButtonBase>
	)
}