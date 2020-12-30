import React from "react";
import TextFieldBase from "./TextFieldBase";
import TextFieldGhost from "./TextFieldGhost";

export default function FixedTextFieldGhost({bg, initialValue, placeholder, disabled, type, fieldSize, maxLength, onChange, onAccept, children, className}) {
	return (
		<TextFieldGhost
			bg={bg}
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
