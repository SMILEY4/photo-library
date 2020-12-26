import React, {useState} from "react";
import "./textfield.css"

export default function TextField({initialValue, placeholder, disabled, editable, fieldSize, maxlength, invalid, outlined, onChange, onAccept, children}) {

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
				maxLength={maxlength}
				onChange={onValueChange}
				onBlur={onLeaveField}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)


	function getClassName() {
		return "text-field"
			+ (invalid ? " text-field-invalid" : "")
			+ (disabled ? " text-field-disabled" : "")
			+ (editable === false ? " text-field-not-editable" : "")
			+ (outlined ? " text-field-outlined" : "")
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
