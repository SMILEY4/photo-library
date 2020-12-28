import React from "react";
import GradientBorderWrapper from "../misc/GradientBorderWrapper";
import "./hlButtons.css"

export const HLButtonType = {
	ERROR: "error",
	WARN: "warn",
	SUCCESS: "success",
	INFO: "info"
}

export default function HLButton({type, label, iconLeft, iconRight, small, disabled, onClick, className}) {
	return (
		<GradientBorderWrapper className={getWrapperClassName()}>
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
		</GradientBorderWrapper>
	)


	function getWrapperClassName() {
		return "hl-button-wrapper"
			+ " hl-button-wrapper-" + type
			+ (className ? " " + className : "")
	}


	function getClassNames() {
		return "hl-button"
			+ " hl-button-" + type
			+ (small ? " hl-button-small" : "")
			+ (disabled ? " hl-button-disabled" : "")
	}

}
