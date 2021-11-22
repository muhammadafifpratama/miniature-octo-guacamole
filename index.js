const express = require("express")
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const env = require("./helper/env")
const port = env.PORT;
// const path = require('path');
// const ui = path.join(__dirname, './public');

let { userouter } = require('./router')
// app.use(express.static(ui))
app.use("/ngetes", userouter)

http.listen(port, () => console.log(port))

app.get('/', (req, res) => {
    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    });

    res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });
// });