// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 1600,
    minHeight: 900,
    fullscreenable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nativeWindowOpen: true,
    },
  });

  // and load the index.html of the app.
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "/build/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
  mainWindow.setMenu(null);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.on("close", function (e) {
    const choice = require("electron").dialog.showMessageBoxSync(this, {
      type: "question",
      buttons: ["Yes", "No"],
      title: "Confirm",
      message:
        "Are you sure you want to quit? \n--- If you have not saved your New DataSets you will lose them. ---",
    });
    if (choice === 1) {
      e.preventDefault();
    }
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
