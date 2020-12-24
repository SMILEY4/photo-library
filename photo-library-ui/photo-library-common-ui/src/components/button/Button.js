import React from "react";
import "./button.css"

export const ButtonStyles = {
	NORMAL: "normal",
	GHOST: "ghost",
	RAW: "raw"
}

export default function Button({label, buttonStyle, onClick, className}) {
	return (
		<div className={getClassName(className, buttonStyle)} onClick={onClick}>
			{label}
		</div>
	)


	function getClassName(addClassName) {
		const style = buttonStyle ? buttonStyle : ButtonStyles.NORMAL
		return "button"
			+ " button-" + style
			+ (addClassName ? " " + addClassName : "")
	}
}
