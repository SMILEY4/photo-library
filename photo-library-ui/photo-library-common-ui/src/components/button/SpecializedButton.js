import React from "react";
import "./specializedButton.css"
import Button, {ButtonStyles} from "./Button";

export const SpecialisationType = {
	ERROR: "error",
	WARN: "warn",
	VALID: "valid",
	INFO: "info"
}

export default function SpecializedButton({label, disabled, type, onClick, className}) {
	return (
		<div className={getClassName(className)}>
			<Button
				label={label}
				buttonStyle={ButtonStyles.NORMAL}
				disabled={disabled}
				onClick={onClick}
				className={"wrapped-button"}
			/>
		</div>
	)


	function getClassName(addClassName) {
		return "specialized-button"
			+ " specialized-button-" + type
			+ (addClassName ? " " + addClassName : "")
	}
}
