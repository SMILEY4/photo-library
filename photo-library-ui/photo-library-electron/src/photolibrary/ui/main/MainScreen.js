import React from "react"
import "./mainScreen.css"
import Button from "photo-library-common-ui/src/components/button/Button";

export default function MainScreen({onProjectClosed, theme}) {
	return (
		<div className={"main-screen " + theme}>
			<div>
				Main Screen
			</div>
			<Button label={"Close Project"} onClick={onProjectClosed}/>
		</div>
	)
}