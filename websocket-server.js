const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: process.env.WS_PORT });

webSocketServer.on('connection', webSocket => {
    console.log('connection established');
});
