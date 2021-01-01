const {setupMessageHandling} = require("./AppMessageHandler");
const {BrowserWindow} = require('electron');
const electron = require('electron')
const os = require('os')
const childProcess = require('child_process')
const kill  = require('tree-kill');

const log = require('electron-log');
log.transports.file.level = 'info';
log.transports.file.file = log.transports.file.file = "C:\\Users\\LukasRuegner\\Desktop\\log.log";

const DEV_INTERFACE_LOCATION = "http://localhost:3000";
const PROD_INTERFACE_LOCATION = `file://${__dirname}/../../../build/index.html`;
const CORE_LOCATION_WIN = "\\photo-library-core-win.exe"
const CORE_LOCATION_MAC = "\\photo-library-core-macos"

let initialWindow;

function getRootDir() {
	return `${__dirname}`.replace("\\app.asar\\src\\photolibrary\\app", "")
}


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
		corePath = CORE_LOCATION_MAC
		childProcess.exec("chmod +x " + CORE_LOCATION_MAC)
	} else {
		corePath = CORE_LOCATION_WIN
	}

	corePath = getRootDir() + "" + corePath
	console.log("PATH: " + corePath)
	log.info("PATH: " + corePath)

	coreChild = childProcess.spawn(corePath)
	coreChild.on('error', (err) => {
		console.error("Failed to start core: " + err)
		log.info("Failed to start core: " + err)
		throw err
	});

	initialWindow.on('closed', () => {
		kill(coreChild.pid)
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
