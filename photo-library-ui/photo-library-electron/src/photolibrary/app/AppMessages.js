function sendSwitchToWelcomeScreen(ipc) {
	ipc.send("screens.switch.welcome")
}


function sendSwitchToMainScreen(ipc) {
	ipc.send("screens.switch.main")
}


function onSwitchToWelcomeScreen(ipc, action) {
	ipc.on("screens.switch.welcome", () => action())
}


function onSwitchToMainScreen(ipc, action) {
	ipc.on("screens.switch.main", () => action())
}


exports.sendSwitchToWelcomeScreen = sendSwitchToWelcomeScreen;
exports.sendSwitchToMainScreen = sendSwitchToMainScreen;
exports.onSwitchToWelcomeScreen = onSwitchToWelcomeScreen;
exports.onSwitchToMainScreen = onSwitchToMainScreen;
