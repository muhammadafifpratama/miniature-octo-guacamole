const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let env = require("./helper/env")
let port = env.PORT;

app.get('/', (req, res) => {
    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    });

    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

let { userouter } = require('./router')

app.use("/ngetes", userouter)

http.listen(port, () => console.log(port))
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