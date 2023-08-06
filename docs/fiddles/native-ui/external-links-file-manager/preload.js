const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openHomeDir: () => ipcRenderer.send('open-home-dir'),
  openExternal: (url) => ipcRenderer.send('open-external', url)
})
