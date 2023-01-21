require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors({
  origin: '*',
  methods: ['GET','POST']
})); // Add cors middleware

const server = http.createServer(app); // Add this

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST'],
  },
});

// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on('join_room',(data) => {
    console.log(data.data)
  })
  socket.emit('server',`Hello from the server`)
  socket.on('disconnect',()=>{console.log("user disconnected")})
  
});

server.listen(4000, () => console.log('Server is running on port 4000'));
