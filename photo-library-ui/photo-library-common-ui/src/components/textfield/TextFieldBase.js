import React, {useState} from "react";
import "./textfield.css"

export default function TextFieldBase({initialValue, placeholder, editable, disabled, fieldSize, maxLength, onChange, onAccept, children, className}) {
	const [value, setValue] = useState(initialValue ? initialValue : "")
	return (
		<div className={getClassName()}>
			{children}
			<input
				value={value}
				type="text"
				placeholder={placeholder}
				disabled={disabled || editable === false}
				size={fieldSize}
				maxLength={maxLength}
				onChange={onValueChange}
				onBlur={onLeaveField}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)


	function getClassName() {
		return "text-field"
			+ (children ? " text-field-with-content" : "")
			+ (disabled ? " text-field-disabled" : "")
			+ (editable === false ? " text-field-not-editable" : "")
			+ (className ? " " + className : "")
	}


	function onValueChange(event) {
		const nextValue = event.target.value;
		setValue(nextValue)
		if (onChange) {
			onChange(nextValue)
		}
	}


	function onLeaveField() {
		if (onAccept) {
			onAccept(value)
		}
	}


	function handleKeyDown(event) {
		if (onAccept && event.key === 'Enter') {
			onAccept(value)
			event.target.blur()
		}
	}
}
