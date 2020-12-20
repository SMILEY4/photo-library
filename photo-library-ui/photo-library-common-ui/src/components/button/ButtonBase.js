import PropTypes from 'prop-types';
import React from "react"
import "./button.css"


export const ButtonStyles = {
	NORMAL: "normal",
	GHOST: "ghost",
	RAW: "raw"
}

export default function ButtonBase({label, style, icon, iconSecond, iconButton, disabled, onClick, className}) {

	return (
		<div className={getClassName(disabled, style, label, iconButton, className)} onClick={() => actionOnClick(disabled, onClick)}>
			{renderContent(label, icon, iconSecond)}
		</div>
	);


	function renderContent(label, icon, iconRight) {
		if (icon === undefined && label !== undefined && iconRight === undefined) {
			return label;
		}
		if (icon !== undefined && label === undefined && iconRight === undefined) {
			return icon;
		}
		if (icon === undefined && label === undefined && iconRight !== undefined) {
			return iconRight
		}
		if (icon !== undefined && label !== undefined && iconRight === undefined) {
			return [
				<React.Fragment key="icon-left">{icon}</React.Fragment>,
				<React.Fragment key="label">{label}</React.Fragment>,
			]
		}
		if (icon === undefined && label !== undefined && iconRight !== undefined) {
			return [
				<React.Fragment key="label">{label}</React.Fragment>,
				<React.Fragment key="icon-right">{iconRight}</React.Fragment>,
			]
		}
		if (icon !== undefined && label !== undefined && iconRight !== undefined) {
			return [
				<React.Fragment key="icon-left">{icon}</React.Fragment>,
				<React.Fragment key="label">{label}</React.Fragment>,
				<React.Fragment key="icon-right">{iconRight}</React.Fragment>,
			]
		}
	}


	function actionOnClick(disabled, onClick) {
		if (!disabled && onClick) {
			onClick();
		}
	}


	function getClassName(disabled, style, label, iconButton, addClassName) {
		let className = "button";
		className += style ? (" button-" + style) : (" button-" + ButtonStyles.NORMAL);
		if (disabled) {
			className += " button-disabled"
		}
		if (!label || iconButton) {
			className += " icon-button"
		}
		if (addClassName) {
			className += " " + addClassName
		}
		return className;
	}

}


ButtonBase.propTypes = {

	/**
	 * The text to display inside the button
	 * */
	label: PropTypes.string,

	/**
	 * The style or type of this button (either "normal", "ghost" or "raw" -> see "ButtonStyles")
	 */
	style: PropTypes.oneOf([ButtonStyles.NORMAL, ButtonStyles.GHOST, ButtonStyles.RAW]),

	/**
	 * The optional icon
	 */
	icon: PropTypes.node,

	/**
	 * The optional second icon
	 */
	iconSecond: PropTypes.node,

	/**
	 * Whether this button is an icon-button with the icon as the central element
	 */
	iconButton: PropTypes.bool,

	/**
	 * Whether this button is disabled and not clickable
	 */
	disabled: PropTypes.bool,

	/**
	 * The function triggered when the button was pressed
	 */
	onClick: PropTypes.func,

	/**
	 * Additional class name(s)
	 */
	className: PropTypes.string
}