import React from "react"
import "./mainScreen.css"
import ButtonFilled from "photo-library-common-ui/src/components/button/normal/ButtonFilled";

export default function MainScreen({onProjectClosed, theme}) {
	return (
		<div className={"main-screen " + theme}>
			<div>
				Main Screen
			</div>
			<ButtonFilled onClick={onProjectClosed}>
				Close Project
			</ButtonFilled>
		</div>
	)
}