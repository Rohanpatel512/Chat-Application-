// Global variables
const express = require('express');
const socket = require('socket.io');

// Store the express function in variable
const app = express();

// Make the server listen to port 3001
const server = app.listen(3001);

// Add server as paramter to socket and store in variable
const io = socket(server);

// Check if there are any user connections
io.sockets.on('connection', userConnected);

// Run function when user has connected
function userConnected(socket) {

  // When user has sent a message or typing a message call one of the functions
  socket.on('send', showMessage);

  function showMessage(data) {
    socket.broadcast.emit('send', data);
  }
}


// Read all codes within the public directory
app.use(express.static('public'));
