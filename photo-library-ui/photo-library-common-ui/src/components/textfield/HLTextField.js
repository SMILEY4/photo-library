import React, {useState} from "react";
import "./hlTextfield.css"
import GradientBorderWrapper from "../gradientborder/GradientBorderWrapper";

export const HLTextFieldType = {
	NONE: "none",
	ERROR: "error",
	WARN: "warn",
	SUCCESS: "success",
	INFO: "info"
}

export default function HLTextField({initialValue, placeholder, type, editable, disabled, fieldSize, maxLength, onChange, onAccept, className}) {
	const [value, setValue] = useState(initialValue ? initialValue : "")
	return (
		<GradientBorderWrapper className={getWrapperClassNames()}>
			<div className={getClassNames()}>
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
		</GradientBorderWrapper>
	)


	function getClassNames() {
		return "hl-text-field"
			+ (disabled ? " hl-text-field-disabled" : "")
			+ (editable === false ? " hl-text-field-not-editable" : "")
	}


	function getWrapperClassNames() {
		return "hl-text-field-wrapper"
			+ " hl-text-field-wrapper-" + type
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
