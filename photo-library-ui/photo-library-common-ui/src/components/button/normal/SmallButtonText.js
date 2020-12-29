import React from "react";
import ButtonText from "./ButtonText";

export default function SmallButtonText({disabled, onClick, children, className}) {
	return (
		<ButtonText
			disabled={disabled}
			onClick={onClick}
			className={"button-small" + (className ? " " + className : "")}
		>
			{children}
		</ButtonText>
	)
}