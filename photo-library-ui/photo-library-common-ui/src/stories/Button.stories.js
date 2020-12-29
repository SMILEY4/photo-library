import ScColumn from "./utilis/SCColumns";
import SCList from "./utilis/SCList";
import React from "react";
import {action} from "@storybook/addon-actions";
import {AiFillCaretRight, AiFillHome} from "react-icons/ai";
import ButtonFilled from "../components/button/normal/ButtonFilled";
import ButtonGhost from "../components/button/normal/ButtonGhost";
import ButtonText from "../components/button/normal/ButtonText";
import IconButtonFilled from "../components/button/icon/IconButtonFilled";
import IconButtonGhost from "../components/button/icon/IconButtonGhost";
import IconButtonText from "../components/button/icon/IconButtonText";
import SmallButtonFilled from "../components/button/normal/SmallButtonFilled";
import SmallButtonGhost from "../components/button/normal/SmallButtonGhost";
import SmallButtonText from "../components/button/normal/SmallButtonText";


export default {
	title: 'Buttons',
}


export const Normal = () => (
	<ScColumn>

		<SCList title="Filled">

			<ButtonFilled onClick={click()}>
				Button
			</ButtonFilled>

			<ButtonFilled onClick={click()}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</ButtonFilled>

			<ButtonFilled onClick={click()} disabled={true}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</ButtonFilled>

			<SmallButtonFilled onClick={click()}>
				Button
			</SmallButtonFilled>

			<SmallButtonFilled onClick={click()}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</SmallButtonFilled>

			<SmallButtonFilled onClick={click()} disabled={true}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</SmallButtonFilled>

		</SCList>

		<SCList title="Ghost">

			<ButtonGhost onClick={click()}>
				Button
			</ButtonGhost>

			<ButtonGhost onClick={click()}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</ButtonGhost>

			<ButtonGhost onClick={click()} disabled={true}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</ButtonGhost>

			<SmallButtonGhost onClick={click()}>
				Button
			</SmallButtonGhost>

			<SmallButtonGhost onClick={click()}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</SmallButtonGhost>

			<SmallButtonGhost onClick={click()} disabled={true}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</SmallButtonGhost>

		</SCList>

		<SCList title="Text">

			<ButtonText onClick={click()}>
				Button
			</ButtonText>

			<ButtonText onClick={click()}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</ButtonText>

			<ButtonText onClick={click()} disabled={true}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</ButtonText>

			<SmallButtonText onClick={click()}>
				Button
			</SmallButtonText>

			<SmallButtonText onClick={click()}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</SmallButtonText>

			<SmallButtonText onClick={click()} disabled={true}>
				<AiFillHome/>
				Button
				<AiFillCaretRight/>
			</SmallButtonText>

		</SCList>

	</ScColumn>
)


export const Highlighted = () => (
	<ScColumn>

		<SCList title="Filled">
			<ButtonFilled type="info" onClick={click()}>Info</ButtonFilled>
			<ButtonFilled type="success" onClick={click()}>Success</ButtonFilled>
			<ButtonFilled type="error" onClick={click()}>Error</ButtonFilled>
			<ButtonFilled type="warn" onClick={click()}>Warning</ButtonFilled>
			<SmallButtonFilled type="info" onClick={click()}>Info</SmallButtonFilled>
		</SCList>

		<SCList title="Ghost 0">
			<ButtonGhost type="info" bg={0}>Info</ButtonGhost>
			<ButtonGhost type="success" bg={0}>Success</ButtonGhost>
			<ButtonGhost type="error" bg={0}>Error</ButtonGhost>
			<ButtonGhost type="warn" bg={0}>Warning</ButtonGhost>
			<SmallButtonGhost type="info" bg={0}>Info</SmallButtonGhost>
		</SCList>

		<SCList title="Ghost 1">
			<ButtonGhost type="info" bg={1}>Info</ButtonGhost>
			<ButtonGhost type="success" bg={1}>Success</ButtonGhost>
			<ButtonGhost type="error" bg={1}>Error</ButtonGhost>
			<ButtonGhost type="warn" bg={1}>Warning</ButtonGhost>
			<SmallButtonGhost type="info" bg={1}>Info</SmallButtonGhost>
		</SCList>

	</ScColumn>
)


export const Icon = () => (
	<ScColumn>

		<SCList>

			<IconButtonFilled onClick={click()}>
				<AiFillHome/>
				Home
			</IconButtonFilled>

			<IconButtonGhost onClick={click()}>
				<AiFillHome/>
				Home
			</IconButtonGhost>

			<IconButtonText onClick={click()}>
				<AiFillHome/>
				Home
			</IconButtonText>

		</SCList>


	</ScColumn>
)


function click() {
	return action("Click");
}