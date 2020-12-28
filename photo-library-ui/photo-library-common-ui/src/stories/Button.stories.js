import ScColumn from "./utilis/SCColumns";
import SCList from "./utilis/SCList";
import React from "react";
import {AiFillCaretRight, AiFillHome} from "react-icons/ai";
import ButtonFilled from "../components/button/normal/ButtonFilled";
import ButtonGhost from "../components/button/normal/ButtonGhost";
import ButtonText from "../components/button/normal/ButtonText";
import {action} from "@storybook/addon-actions";
import SmallButtonFilled from "../components/button/normal/SmallButtonFilled";
import SmallButtonGhost from "../components/button/normal/SmallButtonGhost";
import SmallButtonText from "../components/button/normal/SmallButtonText";
import InfoButton from "../components/button/highlighted/InfoButton";
import SuccessButton from "../components/button/highlighted/SuccessButton";
import ErrorButton from "../components/button/highlighted/ErrorButton";
import WarnButton from "../components/button/highlighted/WarnButton";
import HLGhostButton from "../components/button/highlighted/HLGhostButton";
import ErrorButtonGhost from "../components/button/highlighted/ErrorButtonGhost";

export default {
	title: 'NewButtons',
}

export const Normal = () => (
	<ScColumn>

		<SCList title="Button Filled">
			<ButtonFilled onClick={click()} label="Button"/>
			<ButtonFilled onClick={click()} label="Button" disabled={true}/>
			<ButtonFilled onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<ButtonFilled onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<ButtonFilled onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}/>
			<ButtonFilled onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}
						  disabled={true}/>
		</SCList>

		<SCList title="Button Ghost">
			<ButtonGhost onClick={click()} label="Button"/>
			<ButtonGhost onClick={click()} label="Button" disabled={true}/>
			<ButtonGhost onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<ButtonGhost onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<ButtonGhost onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}/>
			<ButtonGhost onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}
						 disabled={true}/>
		</SCList>

		<SCList title="Button Text">
			<ButtonText onClick={click()} label="Button"/>
			<ButtonText onClick={click()} label="Button" disabled={true}/>
			<ButtonText onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<ButtonText onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<ButtonText onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}/>
			<ButtonText onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}
						disabled={true}/>
		</SCList>

		<SCList title="Small Button Filled">
			<SmallButtonFilled onClick={click()} label="Button"/>
			<SmallButtonFilled onClick={click()} label="Button" disabled={true}/>
			<SmallButtonFilled onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<SmallButtonFilled onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<SmallButtonFilled onClick={click()} label="Button" iconLeft={<AiFillHome/>}
							   iconRight={<AiFillCaretRight/>}/>
			<SmallButtonFilled onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}
							   disabled={true}/>
		</SCList>

		<SCList title="Small Button Ghost">
			<SmallButtonGhost onClick={click()} label="Button"/>
			<SmallButtonGhost onClick={click()} label="Button" disabled={true}/>
			<SmallButtonGhost onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<SmallButtonGhost onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<SmallButtonGhost onClick={click()} label="Button" iconLeft={<AiFillHome/>}
							  iconRight={<AiFillCaretRight/>}/>
			<SmallButtonGhost onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}
							  disabled={true}/>
		</SCList>

		<SCList title="Small Button Text">
			<SmallButtonText onClick={click()} label="Button"/>
			<SmallButtonText onClick={click()} label="Button" disabled={true}/>
			<SmallButtonText onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<SmallButtonText onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<SmallButtonText onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}/>
			<SmallButtonText onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}
							 disabled={true}/>
		</SCList>

	</ScColumn>
)


export const Highlighted = () => (
	<ScColumn>

		<SCList title="Types">
			<InfoButton onClick={click()} label="Info"/>
			<SuccessButton onClick={click()} label="Success"/>
			<ErrorButton onClick={click()} label="Error"/>
			<WarnButton onClick={click()} label="Warning"/>
		</SCList>

		<SCList title="Variations">
			<InfoButton onClick={click()} label="Button"/>
			<InfoButton onClick={click()} label="Button" disabled={true}/>
			<InfoButton onClick={click()} label="Button" iconLeft={<AiFillHome/>}/>
			<InfoButton onClick={click()} label="Button" iconRight={<AiFillCaretRight/>}/>
			<InfoButton onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>}/>
			<InfoButton onClick={click()} label="Button" iconLeft={<AiFillHome/>} iconRight={<AiFillCaretRight/>} disabled={true}/>
		</SCList>

		<SCList title="Ghost">
			<ErrorButtonGhost bg={0} onClick={click()} label="Ghost 0"/>
			<ErrorButtonGhost bg={1} onClick={click()} label="Ghost 1"/>
		</SCList>

	</ScColumn>
)


function click() {
	return action("Click");
}
