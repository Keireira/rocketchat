const { Server } = require('http');
const socket = require('socket.io');

const startServer = ({ app }) => {
  const sockerServer = Server(app);
  const io = socket(sockerServer);

  io.on('connection', (socket) => {
    setInterval(function () {
      socket.emit('new_client', {
        hello: 'world',
      });
    }, 5000);


    socket.on('client_event', (data) => {
      console.log(data);
    });
  });

  sockerServer.listen(9002);
};

module.exports = startServer;
