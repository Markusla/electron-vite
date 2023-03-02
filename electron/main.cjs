import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
const path = require("path");

const createWindow = () => {
	const win = new BrowserWindow({
		title: "Main window",
		// frame: false,
		titleBarStyle: "hidden",
		darkTheme: true,
		// autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, "/../electron/preload.js"),
		},
	});

	// You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
	if (process.env.VITE_DEV_SERVER_URL) {
		win.loadURL(process.env.VITE_DEV_SERVER_URL);
	} else {
		// Load your file
		win.loadFile("dist/index.html");
	}

	ipcMain.handle("dark-mode:toggle", () => {
		if (nativeTheme.shouldUseDarkColors) {
			nativeTheme.themeSource = "light";
		} else {
			nativeTheme.themeSource = "dark";
		}
		return nativeTheme.shouldUseDarkColors;
	});

	ipcMain.handle("dark-mode:system", () => {
		nativeTheme.themeSource = "system";
	});

	ipcMain.handle("app:quit", () => {
		app.quit();
	});
};

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
