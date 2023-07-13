const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    window.loadURL("http://localhost:3000");
    return;
  }

  window.loadFile(path.join(__dirname, "app/dist/index.html"));
});
