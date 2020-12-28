import React from "react";
import "./buttonBase.css"

export default function ButtonBase({label, iconLeft, iconRight, disabled, onClick, className}) {

	const handleClick = () => {
		if (!disabled && onClick) {
			onClick()
		}
	}

	function getClassNames() {
		return "button"
			+ (disabled ? " button-disabled" : "")
			+ (className ? " " + className : "")
	}

	return (
		<div className={getClassNames()} onClick={handleClick}>
			{iconLeft}
			{label}
			{iconRight}
		</div>
	)

}
