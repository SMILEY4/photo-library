const fetch = require("node-fetch");

const API_URL = "http://localhost:8080/photolibrary/api"
const PROJECT_APP_STATE_OPEN = "PROJECT-OPEN"
const PROJECT_APP_STATE_NONE = "NONE"


export function requestApplicationProjectState() {
	console.log("requestApplicationProjectState()")
	return {
		state: PROJECT_APP_STATE_NONE,
		recentlyUsed: [
			{
				uid: "1111",
				name: "My Photos",
			},
			{
				uid: "2222",
				name: "Bilder Lukas",
			},
			{
				uid: "3333",
				name: "Familienfotos",
			}
		]
	}
}


export function createNewLibrary(libraryName, targetDir) {
	console.log("createNewLibrary(" + libraryName + ", " + targetDir + ")")
	return fetch(
		API_URL + "/library?name=" + encodeURI(libraryName) + "&path=" + encodeURI(targetDir),
		{method: 'POST'}
	)
}


export function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
