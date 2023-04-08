import {io } from 'socket.io-client';

const port = 8080;
const socket = io(`http://localhost:${port}`);

socket.on('connect', () => {
    console.log('connect');
});

socket.on('send', (data: {message: string}) => {
    console.log(`type: ${typeof data} data: ${data.message}`);
});

let count = 0;

setInterval(() => {
    count++;
    socket.emit('recieve', {message: `client message ${count}`});
}, 1000);