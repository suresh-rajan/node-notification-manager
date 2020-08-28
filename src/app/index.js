const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('send', (msg) => {
    io.emit('receive', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});