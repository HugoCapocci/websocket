module.exports = {
  apps : [{
    name: 'WebSocket',
    script: 'index.js',
    env  : {
      HTTP_PORT: 8080,
      WS_PORT: 3001
    }
  }]
};
