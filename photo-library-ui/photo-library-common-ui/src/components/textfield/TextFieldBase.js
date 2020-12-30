import React from "react";
import GradientBorderWrapper from "../gradientborder/GradientBorderWrapper";
import "./textfield.css"

export default class TextFieldBase extends React.Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			value: (props.initialValue ? props.initialValue : "")
		}
		this.onValueChange = this.onValueChange.bind(this)
		this.onLeaveField = this.onLeaveField.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.getClassName = this.getClassName.bind(this)
		this.getWrapperClassNames = this.getWrapperClassNames.bind(this)
		this.getInnerClassNames = this.getInnerClassNames.bind(this)
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.initialValue && nextProps.initialValue !== this.state.value) {
			this.setState({value: nextProps.initialValue})
		}
	}


	onValueChange(event) {
		const nextValue = event.target.value;
		this.setState({value: nextValue})
		if (this.props.onChange) {
			this.props.onChange(nextValue)
		}
	}


	onLeaveField() {
		if (this.props.onAccept) {
			this.props.onAccept(this.state.value)
		}
	}


	handleKeyDown(event) {
		if (this.props.onAccept && event.key === 'Enter') {
			this.props.onAccept(this.state.value)
			event.target.blur()
		}
	}


	getClassName() {
		return "text-field"
			+ (this.props.disabled ? " text-field-disabled" : "")
			+ (this.props.editable === false ? " text-field-not-editable" : "")
			+ (this.props.className ? " " + this.props.className : "")
			+ (this.props.innerClassName ? " " + this.props.innerClassName : "")
	}


	getWrapperClassNames() {
		return "text-field-wrapper"
			+ " text-field-wrapper-" + this.props.type
			+ (this.props.className ? " " + this.props.className : "")
	}


	getInnerClassNames() {
		return "text-field"
			+ (this.props.disabled ? " text-field-disabled" : "")
			+ (this.props.editable === false ? " text-field-not-editable" : "")
			+ (this.props.innerClassName ? " " + this.props.innerClassName : "")
	}


	render() {
		if (this.props.type === undefined || this.props.type === "default") {
			return (
				<div className={this.getClassName()}>
					{this.props.children}
					<input
						value={this.state.value}
						type="text"
						placeholder={this.props.placeholder}
						disabled={this.props.disabled || this.props.editable === false}
						size={this.props.fieldSize}
						maxLength={this.props.maxLength}
						onChange={this.onValueChange}
						onBlur={this.onLeaveField}
						onKeyDown={this.handleKeyDown}
					/>
				</div>
			)

		} else {
			return (
				<GradientBorderWrapper className={this.getWrapperClassNames()}>
					<div className={this.getInnerClassNames()}>
						{this.props.children}
						<input
							value={this.state.value}
							type="text"
							placeholder={this.props.placeholder}
							disabled={this.props.disabled || this.props.editable === false}
							size={this.props.fieldSize}
							maxLength={this.props.maxLength}
							onChange={this.onValueChange}
							onBlur={this.onLeaveField}
							onKeyDown={this.handleKeyDown}
						/>
					</div>
				</GradientBorderWrapper>
			)
		}

	}
}
