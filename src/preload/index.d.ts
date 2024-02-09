import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    ElectronApi: ElectronAPI & {
      sendMessage(message: string): void
      onMessageReceived(callback: (message: string) => void): (arg1: never, message: string) => void
      removeMessageReceivedListener: (listener: (arg1: never, message: string) => void) => void
    }
  }
}
