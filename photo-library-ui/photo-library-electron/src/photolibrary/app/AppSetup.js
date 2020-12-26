const {setupMessageHandling} = require("./AppMessageHandler");
const {BrowserWindow} = require('electron');

const DEV_INTERFACE_LOCATION = "http://localhost:3000";
const PROD_INTERFACE_LOCATION = `file://${__dirname}/../build/index.html`;

let initialWindow;


function createInitialWindow(isInDevMode) {

	initialWindow = buildMainWindow()
	loadInterface(isInDevMode)

	initialWindow.once('ready-to-show', () => initialWindow.show())
	initialWindow.on('closed', () => initialWindow = null)

	setupMessageHandling(initialWindow)
}


exports.createInitialWindow = createInitialWindow;


function buildMainWindow() {
	return new BrowserWindow({
		title: "SimpleLib - (Lukas Ruegner, 2020)",
		width: 650,
		height: 420,
		minWidth: 400,
		minHeight: 400,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			nativeWindowOpen: true
		}
	})
}


function loadInterface(isInDevMode) {
	if (isInDevMode) {
		initialWindow.loadURL(DEV_INTERFACE_LOCATION);
	} else {
		initialWindow.loadURL(PROD_INTERFACE_LOCATION);
	}
	initialWindow.webContents.openDevTools({mode: 'detach'});
}

