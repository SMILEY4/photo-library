const {app, BrowserWindow, Menu} = require('electron');
const {dialog} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fetch = require("node-fetch");

let mainWindow;

app.on('ready', createWindow);


function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			nodeIntegration: true,
		}
	});

	if (isDev) {
		mainWindow.webContents.openDevTools({mode: 'detach'});
		mainWindow.loadURL("http://localhost:3000");
	} else {
		mainWindow.loadURL("file://${path.join(__dirname, '../build/index.html");
	}

	createMenu();
	mainWindow.once('ready-to-show', () => mainWindow.show());
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}


function createMenu() {
	const menu = Menu.buildFromTemplate([
		{
			label: "File",
			submenu: [
				{
					label: "Import",
					click() {
						dialog.showOpenDialog({
							title: "Select Files to import",
							buttonLabel: "Import",
							filters: [{
								name: "Images",
								extensions: ["jpg", "jpeg", "png"]
							}],
							properties: [
								"openFile",
								"multiSelections"
							]
						}).then(result => {
							if (!result.canceled) {
								importFiles(result.filePaths);
							}
						})
					}
				},
				{
					label: "Refresh",
					click() {
						mainWindow.webContents.send("UPDATED")
					}
				},
				{
					label: "Exit",
					click() {
						app.quit();
					}
				}
			]
		}
	]);
	Menu.setApplicationMenu(menu);
}



function importFiles(filePaths) {
	console.log("import files")
	fetch("http://localhost:8080/photolibrary/api/image/import", {
		method: 'POST',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify(filePaths)
	})
	.then(data => {
		console.log("then: " + JSON.stringify(data))
		mainWindow.webContents.send("UPDATED")
	})
}





