import React from "react";
import TextFieldBase from "../components/textfield/TextFieldBase";
import SCList from "./utilis/SCList";
import {action} from "@storybook/addon-actions";
import SeparatorVert from "../components/separator/SeparatorVert";
import TextFieldFilled from "../components/textfield/TextFieldFilled";
import SCColumns from "./utilis/SCColumns";
import TextFieldGhost from "../components/textfield/TextFieldGhost";
import HLTextField, {HLTextFieldType} from "../components/textfield/HLTextField";
import HLTextFieldGhost0 from "../components/textfield/HLTextFieldGhost0";
import HLTextFieldGhost1 from "../components/textfield/HLTextFieldGhost1";
import {AiFillEdit} from "react-icons/ai";
import SmallButtonFilled from "../components/button/normal/SmallButtonFilled";

export default {
	title: 'TextField',
	component: TextFieldBase,
}

export const Normal = () => (
	<SCColumns>

		<SCList title={"Filled"}>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")}/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} placeholder="Placeholder"/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} initialValue="Initial Value" placeholder="Placeholder"/>
			<SeparatorVert/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} disabled={true}/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} placeholder="Placeholder" disabled={true}/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} initialValue="Initial Value" disabled={true}/>
			<SeparatorVert/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} editable={false}/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} placeholder="Placeholder" editable={false}/>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")} initialValue="Initial Value" editable={false}/>
		</SCList>

		<SCList title={"Ghost"}>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")}/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} placeholder="Placeholder"/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} initialValue="Initial Value" placeholder="Placeholder"/>
			<SeparatorVert/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} disabled={true}/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} placeholder="Placeholder" disabled={true}/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} initialValue="Initial Value" disabled={true}/>
			<SeparatorVert/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} editable={false}/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} placeholder="Placeholder" editable={false}/>
			<TextFieldGhost onChange={action("change")} onAccept={action("accept")} initialValue="Initial Value" editable={false}/>
		</SCList>

		<SCList title={"With Content"}>
			<TextFieldFilled onChange={action("change")} onAccept={action("accept")}>
				<SmallButtonFilled>Button</SmallButtonFilled>
			</TextFieldFilled>
			<TextFieldFilled placeholder="Placeholder" onChange={action("change")} onAccept={action("accept")}>
				<AiFillEdit/>
			</TextFieldFilled>
			<TextFieldFilled initialValue="Disabled" disabled={true} onChange={action("change")} onAccept={action("accept")}>
				<AiFillEdit/>
			</TextFieldFilled>
		</SCList>

	</SCColumns>
)


export const Highlighted = () => (
	<SCColumns>

		<SCList title={"Reference"}>
			<SmallButtonFilled>Button</SmallButtonFilled>
		</SCList>

		<SCList title={"Filled"}>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.NONE}/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.INFO} placeholder="Placeholder"/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" placeholder="Placeholder"/>
			<SeparatorVert/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.SUCCESS} disabled={true}/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.WARN} placeholder="Placeholder" disabled={true}/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" disabled={true}/>
			<SeparatorVert/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} editable={false}/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} placeholder="Placeholder" editable={false}/>
			<HLTextField onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" editable={false}/>
		</SCList>

		<SCList title={"Ghost 0"}>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.NONE}/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.INFO} placeholder="Placeholder"/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" placeholder="Placeholder"/>
			<SeparatorVert/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.SUCCESS} disabled={true}/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.WARN} placeholder="Placeholder" disabled={true}/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" disabled={true}/>
			<SeparatorVert/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} editable={false}/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} placeholder="Placeholder" editable={false}/>
			<HLTextFieldGhost0 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" editable={false}/>
		</SCList>

		<SCList title={"Ghost 1"}>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.NONE}/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.INFO} placeholder="Placeholder"/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" placeholder="Placeholder"/>
			<SeparatorVert/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.SUCCESS} disabled={true}/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.WARN} placeholder="Placeholder" disabled={true}/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" disabled={true}/>
			<SeparatorVert/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} editable={false}/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} placeholder="Placeholder" editable={false}/>
			<HLTextFieldGhost1 onChange={action("change")} onAccept={action("accept")} type={HLTextFieldType.ERROR} initialValue="Initial Value" editable={false}/>
		</SCList>

		<SCList title={"With Content"}>
			<HLTextField type={HLTextFieldType.ERROR} onChange={action("change")} onAccept={action("accept")}>
				<SmallButtonFilled>Button</SmallButtonFilled>
			</HLTextField>
			<HLTextField type={HLTextFieldType.ERROR} placeholder="Placeholder" onChange={action("change")} onAccept={action("accept")}>
				<AiFillEdit/>
			</HLTextField>
			<HLTextField type={HLTextFieldType.ERROR} initialValue="Disabled" disabled={true} onChange={action("change")} onAccept={action("accept")}>
				<AiFillEdit/>
			</HLTextField>
		</SCList>

	</SCColumns>
)