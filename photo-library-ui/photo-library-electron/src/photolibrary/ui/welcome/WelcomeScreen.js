import React, {useState} from "react"
import "./welcomeScreen.css"
import Button, {ButtonStyles} from "photo-library-common-ui/src/components/button/Button";
import Modal from "photo-library-common-ui/src/components/popup/Modal";

export default function WelcomeScreen({recentlyUsed, onProjectOpened, theme}) {

	const pathHero = "/welcomeHero.jpg"
	const pathIcon = "/simpleLib.png"
	const [showDialogCreateNew, setShowDialogCreateNew] = useState(false)

	return (
		<div className={"welcome-root " + theme}>
			{renderSectionHero()}
			<div className="welcome-content">
				{renderSectionTitle()}
				{renderSectionButtons()}
				{renderSectionRecent(recentlyUsed)}
			</div>
			{renderDialogCreateNew(showDialogCreateNew)}
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
				<Button label="Create New Library" onClick={() => setShowDialogCreateNew(true)}/>
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


	function renderDialogCreateNew(show) {
		return (
			<Modal show={showDialogCreateNew}
				   title="Create New Library"
				   onClose={() => setShowDialogCreateNew(false)}>
				<div className="dir-chooser">
					<div className={"dir-label"}>
						Choose Directory
					</div>
					<Button className="btn-choose-dir" label="Browse" buttonStyle={ButtonStyles.NORMAL}/>
				</div>
			</Modal>
		)
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