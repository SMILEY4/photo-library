import React from "react";
import ModalBase from "../components/modals/ModalBase";
import {action} from "@storybook/addon-actions";
import {ButtonStyles} from "../components/button/Button";
import {SpecialisationType} from "../components/button/SpecializedButton";
import {AiOutlineInfoCircle} from "react-icons/ai";
import Dialog from "../components/modals/Dialog";
import Notification, {NotificationType} from "../components/modals/Notification";
import SCList from "./utilis/SCList";

export default {
	title: 'Modals',
	component: ModalBase
}

export const BaseWithOverlay = () => (
	<ModalBase show={true}>
		Example Content
	</ModalBase>
)

export const BaseWithoutOverlay = () => (
	<ModalBase show={true} showOverlay={false}>
		Example Content
	</ModalBase>
)


export const Dialogs = () => (
	<Dialog show={true}
			icon={<AiOutlineInfoCircle/>}
			addCloseButton={true}
			onClose={action("Close Dialog")}
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
	</Dialog>
)


export const BaseNotification = () => (
	<SCList>

		<Notification
			type={NotificationType.INFO}
			title={"Information"}
		>
			Just a normal Notification without icons.
		</Notification>

		<Notification
			type={NotificationType.INFO}
			icon={<AiOutlineInfoCircle/>}
			addCloseButton={true}
			onClose={action("Close Notification")}
		>
			Just a normal Notification without a title.
		</Notification>

		<Notification
			type={NotificationType.INFO}
			title={"Information"}
			icon={<AiOutlineInfoCircle/>}
			addCloseButton={true}
			onClose={action("Close Notification")}
		>
			Just a normal Notification.
		</Notification>

		<Notification
			type={NotificationType.VALID}
			title={"Success"}
			icon={<AiOutlineInfoCircle/>}
			addCloseButton={true}
			onClose={action("Close Notification")}
		>
			Just a normal Notification.
		</Notification>

		<Notification
			type={NotificationType.ERROR}
			title={"Error"}
			icon={<AiOutlineInfoCircle/>}
			addCloseButton={true}
			onClose={action("Close Notification")}
		>
			Just a normal Notification.
		</Notification>

		<Notification
			type={NotificationType.WARN}
			title={"Warning"}
			icon={<AiOutlineInfoCircle/>}
			addCloseButton={true}
			onClose={action("Close Notification")}
		>
			Just a normal Notification.
		</Notification>

	</SCList>
)
