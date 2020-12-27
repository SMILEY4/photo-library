import React from "react";
import Modal from "../components/popup/Modal";
import ModalBase from "../components/popup/ModalBase";
import {action} from "@storybook/addon-actions";
import {ButtonStyles} from "../components/button/Button";
import {SpecialisationType} from "../components/button/SpecializedButton";

export default {
	title: 'Modal',
	component: ModalBase
}

export const Base = () => (
	<ModalBase show={true}>
		Example Content
	</ModalBase>
)


export const Simple = () => (
	<Modal show={true}
		   addCloseButton={true}
		   onClose={action("Close")}
		   footerActions={[
			   {
				   label: "Cancel",
				   disabled: false,
				   buttonStyle: ButtonStyles.GHOST,
				   onClick: action("Cancel")
			   },
			   {
				   label: "Accept",
				   disabled: false,
				   buttonStyle: ButtonStyles.NORMAL,
				   onClick: action("Accept"),
				   specialization: SpecialisationType.INFO
			   }
		   ]}
	>
		Modal Example Content
	</Modal>
)
