import React, {useEffect, useState} from "react"
import {requestApplicationProjectState} from "../app/PhotoLibraryApi";
import "photo-library-common-ui/src/components/basestyle.css"
import {sendSwitchToMainScreen, sendSwitchToWelcomeScreen} from "../app/AppMessages";
import MainScreen from "./main/MainScreen";
import WelcomeScreen from "./welcome/WelcomeScreen";

const {ipcRenderer} = window.require('electron');


export default function MainInterfaceRoot({}) {

	const [theme] = useState("theme-light")
	const [appState, setAppState] = useState(null)
	useEffect(() => setAppState(requestApplicationProjectState()), [])

	if (appState) {
		return appState.state === "PROJECT-OPEN"
			? <MainScreen onProjectClosed={onSwitchToWelcome} theme={theme}/>
			: <WelcomeScreen recentlyUsed={appState.recentlyUsed} onProjectOpened={onSwitchToMain} theme={theme}/>
	} else {
		return null
	}


	function onSwitchToWelcome() {
		sendSwitchToWelcomeScreen(ipcRenderer)
		setAppState(requestApplicationProjectState())
	}


	function onSwitchToMain() {
		sendSwitchToMainScreen(ipcRenderer)
		setAppState({state: "PROJECT-OPEN"})
	}

}

