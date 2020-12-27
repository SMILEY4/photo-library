import React from "react";
import Button, {ButtonStyles} from "./Button";
import GradientBorderWrapper from "../misc/GradientBorderWrapper";
import "./specializedButton.css"

export const SpecialisationType = {
	ERROR: "error",
	WARN: "warn",
	VALID: "valid",
	INFO: "info"
}

export default function SpecializedButton({label, disabled, type, onClick, className}) {
	return (
		<GradientBorderWrapper className={getClassName(className)}>
			<Button
				label={label}
				buttonStyle={ButtonStyles.NORMAL}
				disabled={disabled}
				onClick={onClick}
				className={"wrapped-button"}
			/>
		</GradientBorderWrapper>
	)


	function getClassName(addClassName) {
		return "specialized-button"
			+ " specialized-button-" + type
			+ (addClassName ? " " + addClassName : "")
	}
}
