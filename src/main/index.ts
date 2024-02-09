import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { ChildProcessWithoutNullStreams, exec, spawn } from 'child_process'
import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { fileURLToPath } from 'url'

let goLib: ChildProcessWithoutNullStreams
let mainWindow: BrowserWindow

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    webPreferences: {
      preload: fileURLToPath(new URL('../preload/index.mjs', import.meta.url)),
      contextIsolation: true,
      nodeIntegration: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()
  spawnGoLib()
  setHandlers()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

function spawnGoLib() {
  exec(`chmod +x main`)
  goLib = spawn('./libs/main')
}

function setHandlers() {
  ipcMain.handle('send-message', (_, message) => {
    goLib.stdin.write(message + '\n')
  })

  goLib.stdout.on('data', (data) => {
    mainWindow.webContents.send('message-received', data.toString())
  })
}

app.on('window-all-closed', () => {
  app.quit()
})
