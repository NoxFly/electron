const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openErrorDialog: () => ipcRenderer.send('open-error-dialog')
})
