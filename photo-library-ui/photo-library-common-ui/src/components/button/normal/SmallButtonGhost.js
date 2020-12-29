import React from "react";
import ButtonGhost from "./ButtonGhost";

export default function SmallButtonGhost({type, bg, disabled, onClick, children, className}) {
	return (
		<ButtonGhost
			type={type}
			bg={bg}
			disabled={disabled}
			onClick={onClick}
			className={"button-small" + (className ? " " + className : "")}
		>
			{children}
		</ButtonGhost>
	)
}