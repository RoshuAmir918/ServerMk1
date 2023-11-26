const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  app.use(express.static(__dirname));
});

let RPid = -9;



io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('mouseMove', (coords) => {
    if (RPid !== -9) {
      socket.broadcast.emit('moveTheMouse', coords);
    }
  });

  socket.on('keyDown', (keyPressed) => {
    if (RPid !== -9) {
      socket.broadcast.emit('pressKeyDown', keyPressed);
    }
  });
  socket.on('keyUp', (keyReleased) => {
    if (RPid !== -9) {
      socket.broadcast.emit('pressKeyUp', keyReleased);
    }
  });

  socket.on('leftClickDown', () => {
    if (RPid !== -9) {
      socket.broadcast.emit('clickLeftDown', );
    }
  });
  socket.on('leftClickUp', () => {
    if (RPid !== -9) {
      socket.broadcast.emit('clickLeftUp', );
    }
  });

  socket.on('rightClick', () => {
    if (RPid !== -9) {
      socket.broadcast.emit('clickRighHi Hope <3  t', );
    }
  });

  socket.on('RPIConnect', (RP) => {
    RPid = RP
    console.log("Raspberry Pi Connected: " + RPid)
  });

});


server.listen(3000, () => {
  console.log('listening on *:3000');
});
