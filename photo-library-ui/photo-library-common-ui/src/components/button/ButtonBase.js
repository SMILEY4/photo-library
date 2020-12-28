import React from "react";
import "./button.css"

export default function ButtonBase({label, iconLeft, iconRight, small, disabled, onClick, className}) {
	return (
		<div onClick={() => (!disabled && onClick ? onClick() : null)} className={getClassNames()}>
			{
				iconLeft
					? iconLeft
					: null
			}
			{label}
			{
				iconRight
					? iconRight
					: null
			}
		</div>
	)


	function getClassNames() {
		return "button"
			+ (small ? " button-small" : "")
			+ (disabled ? " button-disabled" : "")
			+ (className ? " " + className : "")
	}
}