import React, {useState} from "react"
import ButtonFilled from "photo-library-common-ui/src/components/button/normal/ButtonFilled";
import ButtonText from "photo-library-common-ui/src/components/button/normal/ButtonText";
import "./welcomeScreen.css"
import CreateLibraryDialog from "./CreateLibraryDialog";
import {createNewLibrary} from "../../app/PhotoLibraryApi";
import NotificationStack from "photo-library-common-ui/src/components/modals/NotificationStack";

export default function WelcomeScreen({recentlyUsed, onProjectOpened, theme}) {

	const pathHero = "/welcomeHero.jpg"
	const pathIcon = "/simpleLib.png"
	const [showDialogCreateNew, setShowDialogCreateNew] = useState(false)
	const [notifications, setNotifications] = useState([])


	return (
		<div className={"welcome-root " + theme}>
			{renderSectionHero()}
			{renderSectionNotifications()}
			<div className="welcome-content">
				{renderSectionTitle()}
				{renderSectionButtons()}
				{renderSectionRecent(recentlyUsed)}
			</div>
			{renderDialogCreateNew(showDialogCreateNew)}
		</div>
	)


	function renderSectionNotifications() {
		return (
			<NotificationStack
				notifications={notifications.map(notification => {
					return {
						type: notification.type,
						title: notification.title,
						text: notification.text,
						addCloseButton: true,
						onClose: notification.onClose
					}
				})}
			/>
		)
	}


	function renderSectionHero() {
		return (
			<div className="hero-section">
				<div className="hero-image" style={{backgroundImage: "url(" + pathHero + ")"}}/>
				<div className="hero-overlay">
					<div className="icon-image" style={{backgroundImage: "url(" + pathIcon + ")"}}/>
				</div>
			</div>
		)
	}


	function renderSectionTitle() {
		return (
			<div className="title-section">
				<div className="title">Welcome!</div>
				<div className="subtitle">Version 0.1.0</div>
			</div>
		)
	}


	function renderSectionButtons() {
		return (
			<div className="button-section">
				<ButtonFilled onClick={() => setShowDialogCreateNew(true)}>
					Create new Library
				</ButtonFilled>
				<ButtonFilled onClick={onOpen}>
					Open Library
				</ButtonFilled>
			</div>
		)
	}


	function renderSectionRecent(entries) {
		return (
			<div className="recent-section">
				<div className="recent-content">
					<div>Recently Used:</div>
					{
						entries.map(entry => {
							return (
								<ButtonText key={entry.uid} onClick={() => onOpenRecent(entry)}>
									{entry.name}
								</ButtonText>
							)
						})
					}
				</div>
			</div>
		)
	}


	function renderDialogCreateNew(show) {
		if (show) {
			return (
				<CreateLibraryDialog
					onCancel={() => setShowDialogCreateNew(false)}
					onCreate={onCreateNew}
				/>
			)
		} else {
			return null;
		}
	}

	function onCreateNew(libraryName, targetDir) {
		createNewLibrary(libraryName, targetDir).then(
			result => onProjectOpened(),
			error => {
				setShowDialogCreateNew(false)
				const notification = {
					type: "error",
					title: "Error creating library",
					text: "The Library \"" + libraryName + "\" could not be created at \n\"" + targetDir + "\".",
					onClose: () => setNotifications([])
				}
				setNotifications([notification])
			}
		)
	}


	function onOpen() {
		onProjectOpened();
	}


	function onOpenRecent(entry) {
		onProjectOpened();
	}

}