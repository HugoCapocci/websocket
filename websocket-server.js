const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: process.env.WS_PORT });

webSocketServer.on('connection', webSocket => {
    console.log('connection established');

    webSocket.on('close', () => {
        console.log('connection closed by client');
    });
});
 
webSocketServer.on('error', (error) => {
    console.log('error occured ', error);
});
