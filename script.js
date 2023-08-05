const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => 
{
  console.log('A user connected');

  socket.on('send_message', (data) => 
  {
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => 
  {
    console.log('A user disconnected');
  });
});


const PORT = 3000;
http.listen(PORT, () => 
{
  console.log(`Server is running on port ${PORT}`);
});