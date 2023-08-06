const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronVersion', process.versions.electron)
