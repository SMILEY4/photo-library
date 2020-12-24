import React from "react"
import "./mainScreen.css"

export default function MainScreen({onProjectClosed}) {
	return (
		<div className="main-screen">
			<div>
				Main Screen
			</div>
			<div className="btn-close" onClick={onProjectClosed}>
				Close Project
			</div>
		</div>
	)
}