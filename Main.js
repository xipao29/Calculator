const { app, BrowserWindow } = require('electron');         //

let mainWindow;                                             //

app.on('ready', () => {                                     //

    mainWindow = new BrowserWindow({                        //  
        width: 700,                                         //
        height: 900,                                        // Creating Electron Window
        resizable: false,                                   //
    });                                                     //   TA DANDO ERRO EM !!!!!!!!!!!!!!!!!!!!!!!!!!!

    mainWindow.loadURL(`file://${__dirname}/Index.html`)    //

});                                                         //