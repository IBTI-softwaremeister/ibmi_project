const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const roomArr = [];

app.get("/getRoom", (req, res) => {
  res.send(roomArr);
});

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data.room);
    if (!roomArr.includes(data.room)) {
      const datum = {
        room: data.room,
        interest: data.interest,
      };
      roomArr.push(datum);
    }
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {});
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
