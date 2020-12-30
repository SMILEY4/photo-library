import React, {useState} from "react";
import GradientBorderWrapper from "../gradientborder/GradientBorderWrapper";
import "./textfield.css"

export default function TextFieldBase({initialValue, placeholder, editable, disabled, type, fieldSize, maxLength, onChange, onAccept, children, className, innerClassName}) {

	const [value, setValue] = useState(initialValue ? initialValue : "")

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

	function getClassName() {
		return "text-field"
			+ (disabled ? " text-field-disabled" : "")
			+ (editable === false ? " text-field-not-editable" : "")
			+ (className ? " " + className : "")
			+ (innerClassName ? " " + innerClassName : "")
	}

	function getWrapperClassNames() {
		return "text-field-wrapper"
			+ " text-field-wrapper-" + type
			+ (className ? " " + className : "")
	}

	function getInnerClassNames() {
		return "text-field"
			+ (disabled ? " text-field-disabled" : "")
			+ (editable === false ? " text-field-not-editable" : "")
			+ (innerClassName ? " " + innerClassName : "")
	}

	if(type === undefined || type === "default") {
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

	} else {
		return (
			<GradientBorderWrapper className={getWrapperClassNames()}>
				<div className={getInnerClassNames()}>
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
			</GradientBorderWrapper>
		)
	}


}
