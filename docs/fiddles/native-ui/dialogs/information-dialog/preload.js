const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openInformationDialog: () => ipcRenderer.invoke('open-information-dialog')
})
