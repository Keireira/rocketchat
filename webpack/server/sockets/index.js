const random = require('lodash');
const socketIo = require('socket.io');
const messages = require('./messages.json');
const clientsCtrl = require('./controllers/clients.controller');

const startServer = ({ app, server }) => {
  const io = socketIo.listen(server);

  io.on('connect', (socket) => {
    socket.on('get_clients_init', () => {
      socket.emit('get_clients', clientsCtrl.getInitClients);

      setTimeout(() => {
        socket.emit('new_client', clientsCtrl.addNewClient);
      }, 4000);
    });

    socket.on('msg history', () => {
      io.sockets.emit('msg history', messages);
    });

    socket.on('msg init', () => {
      setTimeout(() => {
        io.sockets.emit('msg to client', {
          isClient: true,
          type: 'message',
          timestamp: new Date().getTime() / 1000 | 0,
          message: 'Привет!',
        });
      }, 2000);
    });

    socket.on('msg to server', (message) => {
      io.sockets.emit('msg to client', message);

      setTimeout(() => {
        io.sockets.emit('msg to client', clientsCtrl.generateMessage());
      }, random(2000, 5000));
    });

    socket.on('disconnect', () => {});
  });
};

module.exports = startServer;
