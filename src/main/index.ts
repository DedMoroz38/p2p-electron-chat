import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { spawn } from 'child_process'
import path from 'path'
import { exec } from 'child_process'

let goProcess
let mainWindow: BrowserWindow

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js')
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

function addGo() {
  console.log('dir name: ', __dirname)
  exec(`chmod +x main`)
  console.log(path.join(__dirname, './libs/main'))
  goProcess = spawn('./libs/main')
  goProcess.stdout.on('data', (data) => {
    console.log(data.toString())
    mainWindow.webContents.send('message-from-go', data.toString())
  })
  ipcMain.on('message-to-go', (event, message) => {
    console.log(message)
    goProcess.stdin.write(message + '\n')
  })
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  addGo()
})

app.on('window-all-closed', () => {
  app.quit()
})
