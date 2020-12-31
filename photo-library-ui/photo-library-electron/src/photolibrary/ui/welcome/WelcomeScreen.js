import React from "react"
import ButtonFilled from "photo-library-common-ui/src/components/button/normal/ButtonFilled";
import ButtonText from "photo-library-common-ui/src/components/button/normal/ButtonText";
import "./welcomeScreen.css"
import CreateLibraryDialog from "./CreateLibraryDialog";
import {createNewLibrary, uuidv4} from "../../app/PhotoLibraryApi";
import NotificationStack from "photo-library-common-ui/src/components/modals/NotificationStack";

export default class WelcomeScreen extends React.Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			showDialogCreateNew: false,
			notifications: []
		}
		this.renderSectionNotifications = this.renderSectionNotifications.bind(this)
		this.renderSectionHero = this.renderSectionHero.bind(this)
		this.renderSectionTitle = this.renderSectionTitle.bind(this)
		this.renderSectionButtons = this.renderSectionButtons.bind(this)
		this.renderSectionRecent = this.renderSectionRecent.bind(this)
		this.renderDialogCreateNew = this.renderDialogCreateNew.bind(this)
		this.onCreateNew = this.onCreateNew.bind(this)
		this.onCreateNewSuccess = this.onCreateNewSuccess.bind(this)
		this.onCreateNewFailed = this.onCreateNewFailed.bind(this)
		this.onOpen = this.onOpen.bind(this)
		this.onOpenRecent = this.onOpenRecent.bind(this)

	}

	render() {
		let {recentlyUsed, theme} = this.props;
		return (
			<div className={"welcome-root " + theme}>
				{this.renderSectionHero()}
				{this.renderSectionNotifications()}
				<div className="welcome-content">
					{this.renderSectionTitle()}
					{this.renderSectionButtons()}
					{this.renderSectionRecent(recentlyUsed)}
				</div>
				{this.renderDialogCreateNew(this.state.showDialogCreateNew)}
			</div>
		)
	}

	renderSectionNotifications() {
		return (
			<NotificationStack
				notifications={this.state.notifications.map(notification => {
					return {
						type: notification.type,
						title: notification.title,
						text: notification.text,
						caption: notification.caption,
						addCloseButton: true,
						onClose: notification.onClose
					}
				})}
			/>
		)
	}

	renderSectionHero() {
		const pathHero = "/welcomeHero.jpg"
		const pathIcon = "/simpleLib.png"
		return (
			<div className="hero-section">
				<div className="hero-image" style={{backgroundImage: "url(" + pathHero + ")"}}/>
				<div className="hero-overlay">
					<div className="icon-image" style={{backgroundImage: "url(" + pathIcon + ")"}}/>
				</div>
			</div>
		)
	}

	renderSectionTitle() {
		return (
			<div className="title-section">
				<div className="title">Welcome!</div>
				<div className="subtitle">Version 0.1.0</div>
			</div>
		)
	}

	renderSectionButtons() {
		return (
			<div className="button-section">
				<ButtonFilled onClick={() => this.setState({showDialogCreateNew: true})}>
					Create new Library
				</ButtonFilled>
				<ButtonFilled onClick={this.onOpen}>
					Open Library
				</ButtonFilled>
			</div>
		)
	}

	renderSectionRecent(entries) {
		return (
			<div className="recent-section">
				<div className="recent-content">
					<div>Recently Used:</div>
					{
						entries.map(entry => {
							return (
								<ButtonText key={entry.uid} onClick={() => this.onOpenRecent(entry)}>
									{entry.name}
								</ButtonText>
							)
						})
					}
				</div>
			</div>
		)
	}

	renderDialogCreateNew(show) {
		if (show) {
			return (
				<CreateLibraryDialog
					onCancel={() => this.setState({showDialogCreateNew: false})}
					onCreate={this.onCreateNew}
				/>
			)
		} else {
			return null;
		}
	}

	onCreateNew(libraryName, targetDir) {
		createNewLibrary(libraryName, targetDir).then(
			response => {
				if (response.status === 201) {
					this.onCreateNewSuccess()
				} else {
					response.text().then(
						msgError => this.onCreateNewFailed(msgError)
					)
				}
			},
			error => this.onCreateNewFailed("Unexpected Error.")
		)
	}

	onCreateNewSuccess() {
		this.props.onProjectOpened()
	}

	onCreateNewFailed(message) {
		this.setState({showDialogCreateNew: false})
		const currentDate = new Date();
		const notification = {
			uuid: uuidv4(),
			type: "error",
			title: "Error creating library",
			caption: currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(),
			text: message,
			onClose: () => {
				this.setState({
					notifications: this.state.notifications.filter(n => n.uuid !== notification.uuid)
				})
			}
		}
		this.setState({
			notifications: this.state.notifications.concat([notification])
		})
	}

	onOpen() {
		this.props.onProjectOpened();
	}

	onOpenRecent() {
		this.props.onProjectOpened();
	}
}