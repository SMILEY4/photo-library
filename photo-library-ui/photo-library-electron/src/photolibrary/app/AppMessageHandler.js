const {onSwitchToMainScreen} = require("./AppMessages");
const {onSwitchToWelcomeScreen} = require("./AppMessages");
const ipcMain = require('electron').ipcMain
const {screen} = require('electron');

function setupMessageHandling(mainWindow) {

	onSwitchToWelcomeScreen(ipcMain, () => {
		mainWindow.getChildWindows().forEach(child => child.close())
		if (mainWindow.isMaximized()) {
			mainWindow.unmaximize()
		}
		mainWindow.setSize(650, 420)
		mainWindow.center()
	})

	onSwitchToMainScreen(ipcMain, () => {
		mainWindow.getChildWindows().forEach(child => child.close())
		const {width, height} = screen.getDisplayMatching(mainWindow.getBounds()).workAreaSize
		mainWindow.setBounds({
			x: 0,
			y: 0,
			width: width,
			height: height
		})
	})

}


exports.setupMessageHandling = setupMessageHandling;
