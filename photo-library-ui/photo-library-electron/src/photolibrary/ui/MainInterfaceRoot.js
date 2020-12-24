import React, {useEffect, useState} from "react"
import {requestApplicationProjectState} from "../app/PhotoLibraryApi";
import WelcomeScreen from "./welcome/WelcomeScreen";
import MainScreen from "./main/MainScreen";

export default function MainInterfaceRoot({}) {

	const [appProjectState, setAppProjectState] = useState(null)

	useEffect(() => setAppProjectState(requestApplicationProjectState()), [])

	if (appProjectState) {
		return appProjectState.state === "PROJECT-OPEN"
			? <MainScreen onProjectClosed={openWelcomeScreen}/>
			: <WelcomeScreen recentlyUsed={appProjectState.recentlyUsed} onProjectOpened={openProjectScreen}/>
	} else {
		return null
	}


	function openWelcomeScreen() {
		setAppProjectState(requestApplicationProjectState())
	}


	function openProjectScreen() {
		setAppProjectState({state: "PROJECT-OPEN"})
	}

}