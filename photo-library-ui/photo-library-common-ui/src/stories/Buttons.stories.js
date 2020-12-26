import Button, {ButtonStyles} from "../components/button/Button";
import React from "react";
import SCList from "./utilis/SCList";
import ScColumn from "./utilis/SCColumns";
import SpecializedButton, {SpecialisationType} from "../components/button/SpecializedButton";

export default {
	title: 'Components/Button',
	component: Button,
}

export const All = () => (
	<ScColumn>
		<SCList>
			<SpecializedButton type={SpecialisationType.INFO} label="Info Button"/>
			<SpecializedButton type={SpecialisationType.VALID} label="Valid Button"/>
			<SpecializedButton type={SpecialisationType.ERROR} label="Error Button"/>
			<SpecializedButton type={SpecialisationType.WARN} label="Warn Button"/>
		</SCList>
		<SCList>
			<Button buttonStyle={ButtonStyles.NORMAL} label="First Button"/>
			<Button buttonStyle={ButtonStyles.NORMAL} label="Second Button"/>
			<Button buttonStyle={ButtonStyles.NORMAL} label="Third Button"/>
			<Button buttonStyle={ButtonStyles.NORMAL} label="Disabled Button" disabled={true}/>
		</SCList>
		<SCList>
			<Button buttonStyle={ButtonStyles.GHOST} label="First Button"/>
			<Button buttonStyle={ButtonStyles.GHOST} label="Second Button"/>
			<Button buttonStyle={ButtonStyles.GHOST} label="Third Button"/>
			<Button buttonStyle={ButtonStyles.GHOST} label="Disabled Button" disabled={true}/>
		</SCList>
		<SCList>
			<Button buttonStyle={ButtonStyles.RAW} label="First Button"/>
			<Button buttonStyle={ButtonStyles.RAW} label="Second Button"/>
			<Button buttonStyle={ButtonStyles.RAW} label="Third Button"/>
			<Button buttonStyle={ButtonStyles.RAW} label="Disabled Button" disabled={true}/>
		</SCList>

	</ScColumn>
)
