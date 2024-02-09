import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron'

type OnMessageReceived = (arg1: never, message: string) => void

function sendMessage(message: string) {
  return ipcRenderer.invoke('send-message', message)
}

function onMessageReceived(callback: (message: string) => void): OnMessageReceived {
  const listener = (_: IpcRendererEvent, message: string) => {
    callback(message)
  }
  ipcRenderer.on('message-received', listener)
  return listener
}

function removeMessageReceivedListener(listener: OnMessageReceived) {
  ipcRenderer.removeListener('message-received', listener)
}

const ElectronApi = {
  sendMessage,
  onMessageReceived,
  removeMessageReceivedListener
}

try {
  contextBridge.exposeInMainWorld('ElectronApi', ElectronApi)
} catch (error) {
  console.error('ERROR: ', error)
}
