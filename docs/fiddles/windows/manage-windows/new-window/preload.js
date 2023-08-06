const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  newWindow: (args) => ipcRenderer.send('new-window', args)
})
