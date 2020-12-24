import React from 'react';
import {BsFillPauseFill} from "react-icons/bs";
import {ButtonStyles as ButtonStyle} from '../components/buttonOld/ButtonBase';
import ToggleButton from "../components/buttonOld/ToggleButton";
import ToggleButtonBase from "../components/buttonOld/ToggleButtonBase";
import ToggleIconButton from "../components/buttonOld/ToggleIconButton";


export default {
	component: ToggleButtonBase,
	title: "ToggleButton",
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
				{buildToggleButtonList(false)}
			</div>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
				{buildToggleButtonList(true)}
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
				{buildToggleButtonList(false)}
			</div>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
				{buildToggleButtonList(true)}
			</div>
		</div>
	</div>
]
export const ToggleButtons = TemplateMatrix.bind({})
ToggleButtons.args = {}


function buildToggleButtonList(disabled) {
	return [
		<ToggleButton label="Normal 1" style={ButtonStyle.NORMAL} disabled={disabled}/>,
		<ToggleButton label="Normal 2" labelSelected="Normal Selected" style={ButtonStyle.NORMAL} disabled={disabled}/>,
		<ToggleButton label="Ghost" style={ButtonStyle.GHOST} disabled={disabled}/>,
		<ToggleButton label="Text Button" style={ButtonStyle.RAW}/>,
		<ToggleButton label="With Icon" style={ButtonStyle.NORMAL} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleButton label="With Icon" style={ButtonStyle.GHOST} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleButton label="With Icon" style={ButtonStyle.RAW} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleIconButton style={ButtonStyle.NORMAL} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleIconButton style={ButtonStyle.GHOST} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleIconButton style={ButtonStyle.RAW} icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleIconButton style={ButtonStyle.NORMAL} label="Pause" icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleIconButton style={ButtonStyle.GHOST} label="Pause" icon={<BsFillPauseFill/>} disabled={disabled}/>,
		<ToggleIconButton style={ButtonStyle.RAW} label="Pause" icon={<BsFillPauseFill/>} disabled={disabled}/>
	];
}