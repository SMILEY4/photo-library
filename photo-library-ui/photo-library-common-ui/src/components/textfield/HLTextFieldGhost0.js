import React from "react";
import HLTextField from "./HLTextField";

export default function HLTextFieldGhost0({initialValue, placeholder, type, editable, disabled, fieldSize, maxLength, onChange, onAccept, children, className}) {
	return (
		<HLTextField
			initialValue={initialValue}
			placeholder={placeholder}
			type={type}
			editable={editable}
			disabled={disabled}
			fieldSize={fieldSize}
			maxLength={maxLength}
			onChange={onChange}
			onAccept={onAccept}
			chilren={children}
			className={"hl-text-field-ghost-0" + (className ? " " + className : "")}
		/>
	)


}
