import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron'

function sendMessage(message: string) {
  return ipcRenderer.invoke('send-message', message)
}

ipcRenderer.on('message-received', (_: IpcRendererEvent, message: string) => {
  window.dispatchEvent(new CustomEvent('messageReceived', { detail: { message } }))
})

const ElectronApi = {
  sendMessage
}

try {
  contextBridge.exposeInMainWorld('ElectronApi', ElectronApi)
} catch (error) {
  console.error('ERROR: ', error)
}
