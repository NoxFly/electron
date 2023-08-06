const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  createFramelessWindow: (args) => ipcRenderer.send('create-frameless-window', args)
})
