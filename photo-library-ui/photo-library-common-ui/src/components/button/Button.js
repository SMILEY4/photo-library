import PropTypes from 'prop-types';
import React from "react"
import ButtonBase, {ButtonStyles} from "./ButtonBase";
import "./button.css"



Button.propTypes = {

	/**
	 * The text to display inside the button
	 * */
	label: PropTypes.string.isRequired,

	/**
	 * The style or type of this button (either "normal", "ghost" or "raw" -> see "ButtonStyles")
	 */
	style: PropTypes.oneOf([ButtonStyles.NORMAL, ButtonStyles.GHOST, ButtonStyles.RAW]),

	/**
	 * The icon on the left side of the text
	 */
	icon: PropTypes.node,

	/**
	 * Whether this button is disabled and not clickable
	 */
	disabled: PropTypes.bool,

	/**
	 * The function triggered when the button was pressed
	 */
	onClick: PropTypes.func,

	/**
	 * Additional class name
	 */
	className: PropTypes.string

}

export default function Button({label, style, icon, disabled, onClick, className}) {
	return <ButtonBase
		label={label}
		style={style}
		icon={icon}
		disabled={disabled}
		onClick={onClick}
		className={className}
		iconButton={false}
	/>
}
