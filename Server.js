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
    x  : Math.random()*500,
    y  : Math.random()*300,
  }
  socket.emit('createPlayer', NewPlayer);
  socket.emit('onAllPlayers', players);
  socket.broadcast.emit('onNewPlayer', NewPlayer);
  players.push(NewPlayer);
  socket.on('playerMoved', function(msg){
    socket.broadcast.emit('onPlayerMoved', msg);
  });
  socket.on('reserveBullet', function(msg){
    socket.broadcast.emit('onReserveBullet', msg);
  });
})
app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
http.listen(1408, function(){
  console.log('Server started. Listening on *:1408');
});
