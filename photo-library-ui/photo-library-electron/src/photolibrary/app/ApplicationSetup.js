let initialWindow;

const DEV_INTERFACE_LOCATION = "http://localhost:3000";
const PROD_INTERFACE_LOCATION = `file://${__dirname}/../build/index.html`;


export function createInitialWindow(isInDevMode) {

	initialWindow = buildWindow()
	loadInterface(isInDevMode)

	initialWindow.once('ready-to-show', () => initialWindow.show())
	initialWindow.on('closed', () => initialWindow = null)
}


function buildWindow() {
	return new BrowserWindow({
		title: "Photo Library - (Lukas Ruegner, 2020)",
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			nodeIntegration: true,
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

