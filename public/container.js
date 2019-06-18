//socket declare to connect front end to server 
const socket = io();
// declare let variables to get the param from html file 
let message = document.getElementById('message');
let username = document.getElementById('username');
let button = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

button.addEventListener('click', function () {
    //sending info to server so server can get changes 
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    }) 
})
//listening to server data and front end receiving sush data 
