import http from 'http';
import socketio from 'socket.io';

const server: http.Server = http.createServer();
const io: socketio.Server = new socketio.Server(server);

io.on('connection', (socket: socketio.Socket) => {
    console.log('connect');

    let count = 0;

    socket.on('recieve', (data: { message: string }) => {
        console.log(`type: ${typeof data} data: ${data.message}`);   
    });

    setInterval(() => {
        count++;
        socket.emit('send', {message: `server message ${count}`});
    }, 1000);
});

const port = 8080;
server.listen(port, () => console.log(`app listen on port ${port}`));