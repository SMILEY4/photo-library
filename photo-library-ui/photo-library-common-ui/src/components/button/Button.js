import React from "react";
import "./button.css"

export const ButtonStyles = {
	NORMAL: "normal",
	GHOST: "ghost",
	RAW: "raw"
}

export default function Button({label, disabled, buttonStyle, onClick, className}) {
	return (
		<div className={getClassName(className, buttonStyle)} onClick={onClick}>
				{label}
		</div>
	)


	function getClassName(addClassName, buttonStyle) {
		const style = buttonStyle ? buttonStyle : ButtonStyles.NORMAL
		return "button"
			+ " button-" + style
			+ (disabled ? " button-disabled" : "")
			+ (addClassName ? " " + addClassName : "")
	}
}
