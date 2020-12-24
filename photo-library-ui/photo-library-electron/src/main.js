const {app} = require('electron')
const isDev = require('electron-is-dev')
const appSetup = require('./photolibrary/app/AppSetup')

app.on('ready', () => appSetup.createInitialWindow(isDev))