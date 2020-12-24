const {BrowserWindow} = require('electron');


function setupPopupHandling(mainWindow) {

	onNewWindow(mainWindow, (windowId, event, options) => {
		if (windowId === "welcome.confirm.create") {
			event.preventDefault()
			Object.assign(options, {
				parent: mainWindow,
				modal: true,
				width: 300,
				height: 300,
				minWidth: 300,
				minHeight: 300,
				minimizable: false,
				maximizable: false,
				webPreferences: {
					nodeIntegration: true,
					nativeWindowOpen: true
				}
			})
			event.newGuest = new BrowserWindow(options)
		}
	})
}


exports.setupPopupHandling = setupPopupHandling;


function onNewWindow(mainWindow, action) {
	mainWindow.webContents.on("new-window", (event, url, frameName, disposition, options, additionalFeatures) => {
		action(frameName, event, options)
	})
}
