import React from "react";
import "./button.css"

export const ButtonStyles = {
	NORMAL: "normal",
	GHOST: "ghost",
	RAW: "raw"
}

export default function Button({label, disabled, buttonStyle, onClick, className, small}) {
	return (
		<div className={getClassName(className, buttonStyle)} onClick={() => (!disabled && onClick ? onClick() : null)}>
			{label}
		</div>
	)


	function getClassName(addClassName, buttonStyle) {
		const style = buttonStyle ? buttonStyle : ButtonStyles.NORMAL
		return "button"
			+ " button-" + style
			+ (disabled ? " button-disabled" : "")
			+ (addClassName ? " " + addClassName : "")
			+ (small ? " button-small" : "")
	}
}
