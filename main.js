const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function boot() {
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    resizable: true,
    backgroundThrottling: true,
    minWidth: 976,
    minHeight: 650,
    icon: path.join(__dirname, "img/favicon.ico"),
    // frame: false,
  });
  win.loadURL(`file://${__dirname}/index.html`);
}

app.on("ready", boot);
