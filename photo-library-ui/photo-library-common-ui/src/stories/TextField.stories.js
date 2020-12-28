import React from "react";
import TextField from "../components/textfield/TextField";
import SCColumns from "./utilis/SCColumns";
import {action} from "@storybook/addon-actions";
import SCList from "./utilis/SCList";
import {AiFillEdit, AiOutlineSearch} from "react-icons/ai";
import ButtonFilled from "../components/button/ButtonFilled";

export default {
	title: 'TextField',
	component: TextField,
}

export const All = () => (
	<SCColumns>
		<SCList>
			<ButtonFilled label="Button"/>
		</SCList>
		<SCList>
			<TextField onAccept={action("accepted")} onChange={action("changed")}/>
			<TextField onAccept={action("accepted")} onChange={action("changed")} initialValue="Initial Value"/>
			<TextField onAccept={action("accepted")} onChange={action("changed")} initialValue="Not Editable"
					   editable={false}/>
			<TextField onAccept={action("accepted")} onChange={action("changed")} placeholder="Placeholder"/>
			<TextField onAccept={action("accepted")} onChange={action("changed")} placeholder="Disabled Placeholder"
					   disabled={true}/>
			<TextField onAccept={action("accepted")} onChange={action("changed")} initialValue="Disabled"
					   disabled={true}/>
			<TextField onAccept={action("accepted")} onChange={action("changed")} invalid={true}
					   placeholder={"Always Invalid"}/>
		</SCList>
		<SCList>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")}/>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")}
					   initialValue="Initial Value"/>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")}
					   initialValue="Not Editable" editable={false}/>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")}
					   placeholder="Placeholder"/>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")}
					   placeholder="Disabled Placeholder" disabled={true}/>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")}
					   initialValue="Disabled" disabled={true}/>
			<TextField outlined={true} onAccept={action("accepted")} onChange={action("changed")} invalid={true}
					   placeholder={"Always Invalid"}/>
		</SCList>
	</SCColumns>
)

export const WithContent = () => (

	<SCColumns>

		<SCList>

			<TextField placeholder="Some Text" onAccept={action("accepted")} onChange={action("changed")}>
				<ButtonFilled label={"Button"} small={true}/>
			</TextField>

			<TextField placeholder="Outlined Style" outlined={true} onAccept={action("accepted")} onChange={action("changed")}>
				<ButtonFilled label={"Button"} small={true}/>
			</TextField>

			<TextField placeholder="Invalid" onAccept={action("accepted")} onChange={action("changed")} invalid={true}>
				<ButtonFilled label={"Button"} small={true}/>
			</TextField>

			<TextField initialValue="Not Editable" editable={false} onAccept={action("accepted")} onChange={action("changed")}>
				<ButtonFilled label={"Button"} small={true}/>
			</TextField>

			<TextField initialValue="Not Editable" editable={false} invalid={true} onAccept={action("accepted")} onChange={action("changed")}>
				<ButtonFilled label={"Button"} small={true}/>
			</TextField>

		</SCList>


		<SCList>

			<TextField placeholder="Some Text" onAccept={action("accepted")} onChange={action("changed")}>
				<AiFillEdit/>
			</TextField>

			<TextField placeholder="Outlined Style" outlined={true} onAccept={action("accepted")} onChange={action("changed")}>
				<AiOutlineSearch/>
			</TextField>

			<TextField placeholder="Invalid" onAccept={action("accepted")} onChange={action("changed")} invalid={true}>
				<AiFillEdit/>
			</TextField>

			<TextField initialValue="Not Editable" editable={false} onAccept={action("accepted")} onChange={action("changed")}>
				<AiOutlineSearch/>
			</TextField>

			<TextField initialValue="Not Editable" editable={false} invalid={true} onAccept={action("accepted")} onChange={action("changed")}>
				<AiFillEdit/>
			</TextField>

		</SCList>

	</SCColumns>
)
