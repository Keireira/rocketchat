const socketIo = require('socket.io');
const clientsCtrl = require('./controllers/clients.controller');

const startServer = ({ app, server }) => {
  const io = socketIo.listen(server);

  io.on('connect', (socket) => {
    socket.on('get_clients_init', () => {
      // io.sockets.emit('event', data);
      socket.emit('get_clients', clientsCtrl.getInitClients);

      setTimeout(() => {
        socket.emit('new_client', clientsCtrl.addNewClient);
      }, 7000);
    });

    socket.on('disconnect', () => {});
  });
};

module.exports = startServer;
