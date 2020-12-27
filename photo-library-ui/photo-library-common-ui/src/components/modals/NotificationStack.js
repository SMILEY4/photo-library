import React from "react";
import Notification from "./Notification";
import ModalBase from "./ModalBase";
import "./notificationStack.css"

export default function NotificationStack({notifications}) {
	return (
		<ModalBase show={true} showOverlay={false} addShadow={false} className="notification-stack-base">
			{
				notifications.map(notification => {
					return (
						<Notification
							type={notification.type}
							title={notification.title}
							icon={notification.icon}
							addCloseButton={notification.addCloseButton}
							onClose={notification.onClose}
							className={"with-shadow-2"}
						>
							{notification.text}
						</Notification>
					)
				})
			}
		</ModalBase>
	)
}