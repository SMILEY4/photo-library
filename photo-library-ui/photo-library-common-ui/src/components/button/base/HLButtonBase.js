import React from "react";
import "./hlButtonBase.css"
import GradientBorderWrapper from "../../gradientborder/GradientBorderWrapper";

export default function HLButtonBase({label, iconLeft, iconRight, disabled, onClick, className, classNameInner}) {

	const handleClick = () => {
		if (!disabled && onClick) {
			onClick()
		}
	}

	function getWrapperClassName() {
		return "hl-button-wrapper"
			+ (disabled ? " hl-button-wrapper-disabled" : "")
			+ (className ? " " + className : "")
	}

	function getClassNames() {
		return "hl-button"
			+ (disabled ? " hl-button-disabled" : "")
			+ (classNameInner ? " " + classNameInner : "")
	}

	return (
		<GradientBorderWrapper className={getWrapperClassName()}>
			<div onClick={handleClick} className={getClassNames()}>
				{iconLeft}
				{label}
				{iconRight}
			</div>
		</GradientBorderWrapper>
	)

}
