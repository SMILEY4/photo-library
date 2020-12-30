import React from "react";
import TextFieldBase from "./TextFieldBase";
import TextFieldFilled from "./TextFieldFilled";

export default function FixedTextFieldFilled({initialValue, placeholder, disabled, type, fieldSize, maxLength, onChange, onAccept, children, className}) {
	return (
		<TextFieldFilled
			initialValue={initialValue}
			placeholder={placeholder}
			editable={false}
			disabled={disabled}
			type={type}
			fieldSize={fieldSize}
			maxLength={maxLength}
			onChange={onChange}
			onAccept={onAccept}
			children={children}
			className={className}
		/>
	)
}
