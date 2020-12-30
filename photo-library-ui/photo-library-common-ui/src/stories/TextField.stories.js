import React from "react";
import SCList from "./utilis/SCList";
import SCColumns from "./utilis/SCColumns";
import TextFieldFilled from "../components/textfield/TextFieldFilled";
import TextFieldGhost from "../components/textfield/TextFieldGhost";
import SmallButtonFilled from "../components/button/normal/SmallButtonFilled";
import FixedTextFieldFilled from "../components/textfield/FixedTextFieldFilled";
import FixedTextFieldGhost from "../components/textfield/FixedTextFieldGhost";

export default {
	title: 'TextField',
}

export const All = () => (
	<SCColumns>

		<SCList>
			<TextFieldFilled/>
			<TextFieldFilled placeholder="Placeholder" />
			<TextFieldFilled placeholder="Placeholder" disabled={true}/>
			<TextFieldFilled initialValue="Disabled" disabled={true}/>
			<FixedTextFieldFilled initialValue="Not Editable"/>
			<TextFieldFilled type="error"/>
			<TextFieldFilled type="info"/>
			<TextFieldFilled>
				<SmallButtonFilled>Browse</SmallButtonFilled>
			</TextFieldFilled>
		</SCList>

		<SCList>
			<TextFieldGhost/>
			<TextFieldGhost placeholder="Placeholder" />
			<TextFieldGhost placeholder="Placeholder" disabled={true}/>
			<TextFieldGhost initialValue="Disabled" disabled={true}/>
			<FixedTextFieldGhost initialValue="Not Editable"/>
			<TextFieldGhost placeholder="BG 0" bg="0" type="error"/>
			<TextFieldGhost placeholder="BG 1" bg="1" type="info"/>
			<TextFieldGhost>
				<SmallButtonFilled>Browse</SmallButtonFilled>
			</TextFieldGhost>
		</SCList>

	</SCColumns>
)
