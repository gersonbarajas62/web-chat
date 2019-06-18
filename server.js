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
io.on('connection', () => {
    console.log(connected)
})

