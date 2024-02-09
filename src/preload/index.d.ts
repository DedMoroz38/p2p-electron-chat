import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    ElectronApi: ElectronAPI & {
      sendMessage(message: string): void
    }
  }
}
