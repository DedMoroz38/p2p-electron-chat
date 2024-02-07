import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    ElectronApi: ElectronAPI
    api: unknown
  }
}
