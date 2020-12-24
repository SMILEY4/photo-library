import PropTypes from 'prop-types';
import React from "react"
import "./button.css"
import ButtonBase, {ButtonStyles} from "./ButtonBase";



export default class ToggleButtonBase extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			selected: false,
		}
		this.actionClick = this.actionClick.bind(this)
	}


	render() {
		let {label, labelSelected, style, icon, iconSelected, iconButton, disabled, className} = this.props;
		return <ButtonBase
			label={this.state.selected && labelSelected ? labelSelected : label }
			style={style}
			icon={this.state.selected && iconSelected ? iconSelected : icon }
			iconButton={iconButton}
			disabled={disabled}
			onClick={this.actionClick}
			className={className + (this.state.selected ? " buttonOld-selected" : "")}
		/>
	}


	actionClick() {
		const newState = !this.state.selected
		this.setState({
			selected: newState
		})
		if (this.props.onToggle) {
			this.props.onToggle(newState)
		}
	}

}


ToggleButtonBase.propTypes = {

	/**
	 * The text to display inside the buttonOld
	 * */
	label: PropTypes.string,

	/**
	 * The text to display when this buttonOld is toggled/selected
	 */
	labelSelected: PropTypes.string,

	/**
	 * The style or type of this buttonOld (either "normal", "ghost" or "raw" -> see "ButtonStyles")
	 */
	style: PropTypes.oneOf([ButtonStyles.NORMAL, ButtonStyles.GHOST, ButtonStyles.RAW]),

	/**
	 * The optional icon on the left side of the text
	 */
	icon: PropTypes.node,

	/**
	 * The icon to display when this buttonOld is toggled/selected
	 */
	iconSelected: PropTypes.node,

	/**
	 * Whether this buttonOld is an icon-buttonOld with the icon as the central element
	 */
	iconButton: PropTypes.bool,

	/**
	 * Whether this buttonOld is disabled and not clickable
	 */
	disabled: PropTypes.bool,

	/**
	 * The function triggered when the state of the buttonOld was changed
	 */
	onToggle: PropTypes.func,

	/**
	 * Additional class name
	 */
	className: PropTypes.string
}