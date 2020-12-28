import React from "react";
import HLTextField from "./HLTextField";

export default function HLTextFieldGhost1({initialValue, placeholder, type, editable, disabled, fieldSize, maxLength, onChange, onAccept, className}) {
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
			className={"hl-text-field-ghost-1" + (className ? " " + className : "")}
		/>
	)


}
