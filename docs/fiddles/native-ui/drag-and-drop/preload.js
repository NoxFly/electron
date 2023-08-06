const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  dragStart: () => ipcRenderer.send('ondragstart')
})
