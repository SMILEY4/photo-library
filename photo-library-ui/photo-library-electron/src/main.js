import {createInitialWindow} from "./photolibrary/app/ApplicationSetup";
const {app} = require('electron');
const isDev = require('electron-is-dev');

app.on('ready', () => createInitialWindow(isDev))