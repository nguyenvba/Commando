var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));

var players = [];

io.on('connection', function(socket){
  console.log('New User Connected');
  var NewPlayer = {
    id : socket.id,
    x  : 300,
    y  : 100
  }
  players.push(NewPlayer);
  socket.emit('create', NewPlayer);
  socket.broadcast.emit('onNewPlayer', players);
})
app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
http.listen(1408, function(){
  console.log('Server started. Listening on *:6969');
});
