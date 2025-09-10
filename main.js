const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('window-minimize', () => {
  win.minimize();
});

ipcMain.on('window-maximize', () => {
  if (win.isMaximized()) win.unmaximize();
  else win.maximize();
});

ipcMain.on('window-close', () => {
  win.close();
});
