import React from "react";
import "./textfield.css"
import TextFieldBase from "./TextFieldBase";

export default function TextFieldGhost({initialValue, placeholder, editable, disabled, fieldSize, maxLength, onChange, onAccept, className}) {
	return (
		<TextFieldBase
			initialValue={initialValue}
			placeholder={placeholder}
			editable={editable}
			disabled={disabled}
			fieldSize={fieldSize}
			maxLength={maxLength}
			onChange={onChange}
			onAccept={onAccept}
			className={"text-field-ghost" + (className ? " " + className : "")}
		/>
	)
}
