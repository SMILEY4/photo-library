import React from 'react';
import {BsFillPauseFill} from "react-icons/bs";
import Button from "../components/buttonOld/Button";
import ButtonBase, {ButtonStyles as ButtonStyle} from '../components/buttonOld/ButtonBase';
import IconButton from "../components/buttonOld/IconButton";


export default {
	component: ButtonBase,
	title: "ButtonBase",
}

const TemplateMatrix = args => [
	<div style={{display: 'flex', flexDirection: 'row'}}>
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			gap: '20px',
			padding: '50px',
			background: 'var(--background-color-0)'
		}}>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
				{buildButtonList(false)}
			</div>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
				{buildButtonList(true)}
			</div>
		</div>
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			gap: '20px',
			padding: '50px',
			background: 'var(--background-color-1)'
		}}>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
				{buildButtonList(false)}
			</div>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
				{buildButtonList(true)}
			</div>
		</div>
	</div>
]
export const Buttons = TemplateMatrix.bind({})
Buttons.args = {}


function buildButtonList(disabled) {
	return [
		<Button label="Normal" style={ButtonStyle.NORMAL} disabled={disabled}/>,
		<Button label="Ghost" style={ButtonStyle.GHOST} disabled={disabled}/>,
		<Button label="Text Button" style={ButtonStyle.RAW}/>,
		<Button label="With Icon" style={ButtonStyle.NORMAL} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<Button label="With Icon" style={ButtonStyle.GHOST} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<Button label="With Icon" style={ButtonStyle.RAW} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<IconButton style={ButtonStyle.NORMAL} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<IconButton style={ButtonStyle.GHOST} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<IconButton style={ButtonStyle.RAW} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<IconButton style={ButtonStyle.NORMAL} label="Pause" icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<IconButton style={ButtonStyle.GHOST} label="Pause" icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<IconButton style={ButtonStyle.RAW} label="Pause" icon={<BsFillPauseFill/>} disabled={disabled}/>
	];
}