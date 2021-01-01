const {setupMessageHandling} = require("./AppMessageHandler");
const {BrowserWindow} = require('electron');
const electron = require('electron')
const os = require('os')
const childProcess = require('child_process')

const DEV_INTERFACE_LOCATION = "http://localhost:3000";
const PROD_INTERFACE_LOCATION = `file://${__dirname}/../build/index.html`;

let initialWindow;


function createInitialWindow(isInDevMode) {

	initialWindow = buildMainWindow()

	setupCore()

	loadInterface(isInDevMode)

	initialWindow.once('ready-to-show', () => initialWindow.show())
	initialWindow.on('closed', () => initialWindow = null)

	setupMessageHandling(initialWindow)
}


exports.createInitialWindow = createInitialWindow;


function setupCore() {
	const platform = os.platform()

	let corePath
	let coreChild

	if (platform === 'darwin') {
		corePath = electron.app.getAppPath()  + '\\public\\photo-library-core-1.0-SNAPSHOT-runner'
		coreChild = childProcess.spawn(corePath)
	} else {
		corePath = electron.app.getAppPath() + '\\public\\photo-library-core-1.0-SNAPSHOT-runner.exe'
		coreChild = childProcess.spawn(corePath)
	}

	initialWindow.on('closed', () => {
		require('tree-kill').kill(coreChild.pid)
	})
}

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
			nativeWindowOpen: true,
			enableRemoteModule: true
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
