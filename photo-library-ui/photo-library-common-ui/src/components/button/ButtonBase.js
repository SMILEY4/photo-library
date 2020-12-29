import React from "react";
import GradientBorderWrapper from "../gradientborder/GradientBorderWrapper";
import "./buttons.css"

export default function ButtonBase({disabled, type, onClick, children, className, innerClassName}) {

	const handleClick = () => {
		if (!disabled && onClick) {
			onClick()
		}
	}


	function getDefaultClassNames() {
		return "button"
			+ (disabled ? " button-disabled" : "")
			+ (className ? " " + className : "")
	}


	function getTypedClassNames() {
		return "button"
			+ (disabled ? " button-disabled" : "")
			+ (innerClassName ? " " + innerClassName : "")
	}


	function getWrapperClassName() {
		return "button-wrapper"
			+ " button-wrapper-" + type
			+ (disabled ? " button-wrapper-disabled" : "")
			+ (className ? " " + className : "")
	}


	if (type === undefined || type === null || type === "default") {
		return (
			<div className={getDefaultClassNames()} onClick={handleClick}>
				{children}
			</div>
		)
	} else {
		return (
			<GradientBorderWrapper className={getWrapperClassName()}>
				<div onClick={handleClick} className={getTypedClassNames()}>
					{children}
				</div>
			</GradientBorderWrapper>
		)
	}

}