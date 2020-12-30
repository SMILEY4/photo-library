import React from "react";
import TextFieldBase from "./TextFieldBase";

export default function TextFieldFilled({initialValue, placeholder, editable, disabled, type, fieldSize, maxLength, onChange, onAccept, children, className}) {
	return (
		<TextFieldBase
			initialValue={initialValue}
			placeholder={placeholder}
			editable={editable}
			disabled={disabled}
			type={type}
			fieldSize={fieldSize}
			maxLength={maxLength}
			onChange={onChange}
			onAccept={onAccept}
			children={children}
			className={className}
			innerClassName={"text-field-filled"}
		/>
	)
}
