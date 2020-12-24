import PropTypes from 'prop-types';
import React from "react"
import "./button.css"
import {ButtonStyles} from "./ButtonBase";
import ToggleButtonBase from "./ToggleButtonBase";



export default function ToggleIconButton({label, labelSelected, style, icon, iconSelected, disabled, onToggle, className}) {
	return <ToggleButtonBase
		label={label}
		labelSelected={labelSelected}
		style={style}
		icon={icon}
		iconSelected={iconSelected}
		disabled={disabled}
		onToggle={onToggle}
		className={className}
		iconButton={true}
	/>
}

ToggleIconButton.propTypes = {


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