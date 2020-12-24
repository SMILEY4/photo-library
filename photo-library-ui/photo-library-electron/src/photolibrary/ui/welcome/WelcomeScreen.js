import React from "react"
import "./welcomeScreen.css"

export default function WelcomeScreen({recentlyUsed, onProjectOpened}) {

	const pathHero = "/welcomeHero3.jpg"
	const pathIcon = "/simpleLib.png"

	return (
		<div className="welcome-root">

			<div className="hero-section">
				<div className="hero-image" style={{backgroundImage: "url(" + pathHero + ")"}}/>
				<div className="hero-overlay">
					<div className="icon-image" style={{backgroundImage: "url(" + pathIcon + ")"}}/>
				</div>
			</div>

			<div className="welcome-content">

				<div className="title-section">
					<div className="title">Welcome!</div>
					<div className="subtitle">Version 0.1.0</div>
				</div>

				<div className="button-section">
					<div className="btn-create" onClick={onCreateNew}>Create New Library</div>
					<div className="btn-open" onClick={onOpen}>Open Library</div>
				</div>

				<div className="recent-section">
					<div className="recent-content">
						<div>Recently Used:</div>
						{
							recentlyUsed.map(entry => {
								return (
									<div className="recently-used-entry"
										 key={entry.uid}
										 onClick={() => onOpenRecent(entry)}>
										{entry.name}
									</div>
								)
							})
						}
					</div>
				</div>

			</div>

		</div>
	)


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