const express = require('express');
const path = require('path');

const app = express();

const port = 3000

//connection to files in public folder 
app.use(express.static(path.join(__dirname, 'public')))
//server config 
app.get('/', (req, res) => res.send('Hello World!'))

const server = app.listen(port, () => console.log(`Listening on port ${port}!`))

const SocketIO = require('socket.io')

const io = SocketIO(server);

//webSokets
//socket param is comming from const declare in container.js
io.on('connection', (socket) => {
    console.log('connected', socket.id)
    //passing params to server so it can work with object on front end
    // data is info on object
    socket.on('chat:message', (data) => {
        //resending to all sockets that are cnnected 
        io.sockets.emit('chat:message', data)
        
    } )
})

