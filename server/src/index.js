require('dotenv').config();
const express = require('express');
const app = express();
const {createServer} = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors({
  origin: '*',
  methods: ['GET','POST']
})); // Add cors middleware

const server = createServer(app); // Add this

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST'],
  },
});

// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
  
  console.log(`New connection from: ${socket.id}`);
  socket.on('join_room',(data) => {
    socket.join(data)
  })

  socket.on("send_message",(data)=>{
    socket.to(data.room).emit("receive_message",data)
  })

  
  
});

server.listen(4000, () => console.log('Server is running on port 4000'));
