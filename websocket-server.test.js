const WebSocket = require('ws');

describe('Websocket Tests', () => {
    const fakeURL = 'ws://localhost:3001';
    let webSocketServer;
    let webSocketClient;

    beforeAll(() => {
        webSocketServer = require('./websocket-server');
    });

    afterAll(() => {
        webSocketServer.close();
    });
    
    beforeEach(() => {
        webSocketClient = new WebSocket(fakeURL);
    });

    afterEach(() => {
        webSocketClient.terminate();
    });

    it('Should send "Welcome!" message to new connected clients', (done) => {
        webSocketServer.on('error', (error) => {
            done(error);
        });

        webSocketClient.onmessage = (event) => {
            expect(event.data).toEqual('Welcome!');
            done();
        };
    });

    it('Should broadcast message from one client to another', (done) => {
        const webSocketClient2 = new WebSocket(fakeURL);

        webSocketClient.onopen = () => {
            webSocketClient.send('message from client 1');
        };

        webSocketServer.on('error', (error) => {
            done(error);
        });

        const receivedMessages = [];

        webSocketClient2.onmessage = (event) => {
            receivedMessages.push(event.data);
            if (receivedMessages.length === 2) {
                expect(receivedMessages[1]).toEqual('message from client 1');
                webSocketClient2.close();
                done();
            }
        };
    });
});
