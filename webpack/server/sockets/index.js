const http = require('http');
const socket = require('socket.io');
const clientsCtrl = require('./controllers/clients.controller');

const startServer = ({ app }) => {
  const server = http.createServer(app);
  const io = socket(server);

  io.on('connect', (socket) => {
    socket.emit('connected', clientsCtrl.getInitClients);

    setTimeout(() => {
      socket.emit('new_client', clientsCtrl.addNewClient);
    }, 7000);
  });

  server.listen(9002);
};

module.exports = startServer;
