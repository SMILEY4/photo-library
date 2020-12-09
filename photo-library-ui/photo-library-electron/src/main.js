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

	if(isDev) {
		mainWindow.webContents.openDevTools({ mode: 'detach' });
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
					onClick() {
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
	const url = "http://localhost:8080/photolibrary/api/images/import/files"
	const params = {
		headers: {
			"content-type": "application/json; charset=UTF-8"
		},
		body: JSON.stringify({paths: filePaths}),
		method: "POST"
	}

	fetch(url, params)
		.then(data => {
			mainWindow.webContents.send("UPDATED")
		})

}





