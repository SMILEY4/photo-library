import React from "react";
import ButtonBase from "../ButtonBase";

export default function ButtonFilled({type, disabled, onClick, children, className}) {
	if (type === undefined || type === "default") {
		return (
			<ButtonBase
				disabled={disabled}
				onClick={onClick}
				className={"button-filled" + (className ? " " + className : "")}
			>
				{children}
			</ButtonBase>
		)
	} else {
		return (
			<ButtonBase
				type={type}
				disabled={disabled}
				onClick={onClick}
				className={className}
				innerClassName={"button-filled"}
			>
				{children}
			</ButtonBase>
		)
	}
}