import React from "react";
import {ButtonStyles} from "./Button";
import "./button.css"
import "./specializedButton.css"

export const SpecialisationType = {
	ERROR: "error",
	WARN: "warn",
	VALID: "valid",
	INFO: "info"
}

export default function Button({label, disabled, type, onClick, className}) {
	return (
		<div className={getClassName(className)} onClick={onClick}>
			{label}
		</div>
	)


	function getClassName(addClassName) {
		return "button"
			+ " button-normal"
			+ " specialized-button"
			+ " specialized-button-" + type
			+ (disabled ? " button-disabled" : "")
			+ (addClassName ? " " + addClassName : "")
	}
}
