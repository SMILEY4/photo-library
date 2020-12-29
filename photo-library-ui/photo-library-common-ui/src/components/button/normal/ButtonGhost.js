import React from "react";
import ButtonBase from "../ButtonBase";

export default function ButtonGhost({type, bg, disabled, onClick, children, className}) {
	if (type === undefined || type === "default") {
		return (
			<ButtonBase
				disabled={disabled}
				onClick={onClick}
				className={"button-ghost" + (className ? " " + className : "")}
			>
				{children}
			</ButtonBase>
		)
	} else {
		return (
			<ButtonBase
				type={type}
				disabled={disabled}
				onClick={onClick}
				className={className}
				innerClassName={"button-ghost button-force-bg-"+bg}
			>
				{children}
			</ButtonBase>
		)
	}
}