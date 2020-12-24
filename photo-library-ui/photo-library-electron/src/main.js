const {app} = require('electron')
const isDev = require('electron-is-dev')
const appSetup = require('./photolibrary/app/ApplicationSetup')

app.on('ready', () => appSetup.createInitialWindow(isDev))