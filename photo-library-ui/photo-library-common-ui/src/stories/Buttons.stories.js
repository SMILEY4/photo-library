import React from "react";
import SCList from "./utilis/SCList";
import ScColumn from "./utilis/SCColumns";
import {action} from "@storybook/addon-actions";
import ButtonFilled from "../components/button/ButtonFilled";
import ButtonGhost from "../components/button/ButtonGhost";
import ButtonText from "../components/button/ButtonText";
import {AiFillCaretRight, AiFillHome, AiFillTool} from "react-icons/ai";
import HLButton, {HLButtonType} from "../components/button/HLButton";
import HLButtonGhost0 from "../components/button/HLButtonGhost0";
import HLButtonGhost1 from "../components/button/HLButtonGhost1";

export default {
	title: 'Button',
}

export const Normal = () => (
	<ScColumn>

		<SCList title="Filled Buttons">
			<ButtonFilled label={"Button"} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} disabled={true} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} small={true} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} small={true} disabled={true} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} iconLeft={<AiFillHome/>} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} iconLeft={<AiFillTool/>} iconRight={<AiFillCaretRight/>}
						  onClick={action("Click")}/>
			<ButtonFilled label={"Button"} iconRight={<AiFillCaretRight/>} disabled={true} onClick={action("Click")}/>
			<ButtonFilled label={"Button"} iconLeft={<AiFillHome/>} small={true} onClick={action("Click")}/>
		</SCList>

		<SCList title="Ghost Buttons">
			<ButtonGhost label={"Button"} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} disabled={true} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} small={true} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} small={true} disabled={true} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} iconLeft={<AiFillHome/>} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} iconLeft={<AiFillTool/>} iconRight={<AiFillCaretRight/>}
						 onClick={action("Click")}/>
			<ButtonGhost label={"Button"} iconRight={<AiFillCaretRight/>} disabled={true} onClick={action("Click")}/>
			<ButtonGhost label={"Button"} iconLeft={<AiFillHome/>} small={true} onClick={action("Click")}/>
		</SCList>

		<SCList title="Text Buttons">
			<ButtonText label={"Button"} onClick={action("Click")}/>
			<ButtonText label={"Button"} disabled={true} onClick={action("Click")}/>
			<ButtonText label={"Button"} small={true} onClick={action("Click")}/>
			<ButtonText label={"Button"} small={true} disabled={true} onClick={action("Click")}/>
			<ButtonText label={"Button"} iconLeft={<AiFillHome/>} onClick={action("Click")}/>
			<ButtonText label={"Button"} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<ButtonText label={"Button"} iconLeft={<AiFillTool/>} iconRight={<AiFillCaretRight/>}
						onClick={action("Click")}/>
			<ButtonText label={"Button"} iconRight={<AiFillCaretRight/>} disabled={true} onClick={action("Click")}/>
			<ButtonText label={"Button"} iconLeft={<AiFillHome/>} small={true} onClick={action("Click")}/>
		</SCList>

	</ScColumn>
)


export const Highlighted = () => (
	<ScColumn>

		<SCList title="Buttons">
			<HLButton type={HLButtonType.INFO} label={"Button"} onClick={action("Click")}/>
			<HLButton type={HLButtonType.SUCCESS} label={"Button"} onClick={action("Click")}/>
			<HLButton type={HLButtonType.ERROR} label={"Button"} onClick={action("Click")}/>
			<HLButton type={HLButtonType.WARN} label={"Button"} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} disabled={true} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} small={true} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} small={true} disabled={true} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillHome/>} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillTool/>} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} iconRight={<AiFillCaretRight/>} disabled={true} onClick={action("Click")}/>
			<HLButton type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillHome/>} small={true} onClick={action("Click")}/>
		</SCList>

		<SCList title="Ghost Buttons (0)">
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.SUCCESS} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.ERROR} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.WARN} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} disabled={true} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} small={true} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} small={true} disabled={true} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillHome/>} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillTool/>} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} iconRight={<AiFillCaretRight/>} disabled={true} onClick={action("Click")}/>
			<HLButtonGhost0 type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillHome/>} small={true} onClick={action("Click")}/>
		</SCList>

		<SCList title="Ghost Buttons (1)">
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.SUCCESS} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.ERROR} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.WARN} label={"Button"} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} disabled={true} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} small={true} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} small={true} disabled={true} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillHome/>} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillTool/>} iconRight={<AiFillCaretRight/>} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} iconRight={<AiFillCaretRight/>} disabled={true} onClick={action("Click")}/>
			<HLButtonGhost1 type={HLButtonType.INFO} label={"Button"} iconLeft={<AiFillHome/>} small={true} onClick={action("Click")}/>
		</SCList>

	</ScColumn>
)
