import Button, {ButtonStyles} from "../components/button/Button";
import React from "react";
import SCList from "./utilis/SCList";
import ScColumn from "./utilis/SCColumns";
import SpecializedButton, {SpecialisationType} from "../components/button/SpecializedButton";
import {action} from "@storybook/addon-actions";

export default {
	title: 'Button',
	component: Button
}

export const All = () => (
	<ScColumn>
		<SCList>
			<SpecializedButton onClick={action("Click")} type={SpecialisationType.INFO} label="Info Button"/>
			<SpecializedButton onClick={action("Click")} type={SpecialisationType.VALID} label="Valid Button"/>
			<SpecializedButton onClick={action("Click")} type={SpecialisationType.ERROR} label="Error Button"/>
			<SpecializedButton onClick={action("Click")} type={SpecialisationType.WARN} label="Warn Button"/>
		</SCList>
		<SCList>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.NORMAL} label="First Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.NORMAL} label="Second Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.NORMAL} label="Third Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.NORMAL} label="Disabled Button" disabled={true}/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.NORMAL} small={true} label="Small Button"/>
		</SCList>
		<SCList>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.GHOST} label="First Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.GHOST} label="Second Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.GHOST} label="Third Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.GHOST} label="Disabled Button" disabled={true}/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.GHOST} small={true} label="Small Button"/>
		</SCList>
		<SCList>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.RAW} label="First Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.RAW} label="Second Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.RAW} label="Third Button"/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.RAW} label="Disabled Button" disabled={true}/>
			<Button onClick={action("Click")} buttonStyle={ButtonStyles.RAW} small={true} label="Small Button"/>
		</SCList>

	</ScColumn>
)
