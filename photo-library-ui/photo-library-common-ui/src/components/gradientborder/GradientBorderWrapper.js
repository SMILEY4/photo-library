import React from "react";
import "./gradientBorderWrapper.css"

export default function GradientBorderWrapper({children, className}) {
	return (
		<div className={"gradient-border-wrapper" + (className ? " " + className : "")}>
			{children}
		</div>
	)
}