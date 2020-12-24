import React, {useState} from "react"
import "./welcomeScreen.css"
import Button, {ButtonStyles} from "photo-library-common-ui/src/components/button/Button";
import {SubWindow} from "photo-library-common-ui/src/components/popup/SubWindow";

export default function WelcomeScreen({recentlyUsed, onProjectOpened, theme}) {

	const pathHero = "/welcomeHero.jpg"
	const pathIcon = "/simpleLib.png"
	const [showCreateDialog, setShowCreateDialog] = useState(false)

	return (
		<div className={"welcome-root " + theme}>
			{renderConfirmCreateDialog(showCreateDialog)}
			{renderSectionHero()}
			<div className="welcome-content">
				{renderSectionTitle()}
				{renderSectionButtons()}
				{renderSectionRecent(recentlyUsed)}
			</div>
		</div>
	)


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
				<Button label="Create New Library" onClick={() => setShowCreateDialog(true)}/>
				<Button label="Open Library" onClick={onOpen}/>
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
								<Button label={entry.name}
										buttonStyle={ButtonStyles.RAW}
										key={entry.uid}
										onClick={() => onOpenRecent(entry)}/>
							)
						})
					}
				</div>
			</div>
		)
	}


	function renderConfirmCreateDialog(show) {
		if (show) {
			return (
				<SubWindow windowId="welcome.confirm.create"
						   onClose={() => setShowCreateDialog(false)}
						   closeOnUnmount={false}>
					<h2>
						Confirm Create New
					</h2>
					<div onClick={onCreateNew}>
						Confirm
					</div>
				</SubWindow>
			)
		} else {
			return null
		}
	}


	function onCreateNew() {
		onProjectOpened();
	}


	function onOpen() {
		onProjectOpened();
	}


	function onOpenRecent(entry) {
		onProjectOpened();
	}

}