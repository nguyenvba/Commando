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
  // socket.emit('createPlayer', NewPlayer);
  // socket.emit('onAllPlayers', players);
  // socket.broadcast.emit('onNewPlayer', NewPlayer);
  // players.push(NewPlayer);
  socket.on('playerMoved', function(msg){
    socket.broadcast.emit('onPlayerMoved', msg);
  });
  socket.on('login', function(msg){
    var NewPlayer = {
      score: 0,
      username : msg,
        x : Math.random()*500,
        y : Math.random()*300,
      id : socket.id
    }
    socket.emit('onAllPlayers', players);
    socket.emit('createPlayer', NewPlayer);
    socket.broadcast.emit('onNewPlayer', NewPlayer);
    players.push(NewPlayer);
  });

  socket.on('PlayerDie', function(msg){
    socket.broadcast.emit('onPlayerDie', msg);
    for(var i=0; i<players.length; i++){
      if(msg == players[i].id){
        players.splice(i, 1)[0];
        return;
      }
    }
  });
  socket.on('hitDamage', function(msg){
    socket.broadcast.emit('onHitDamage', msg);
  });
  socket.on('playerHidden', function(msg){
    socket.broadcast.emit('onPlayerHidden', msg);
  });
  socket.on('playerKill', function(msg){
    socket.broadcast.emit('onPlayerKill', msg);
  });
  socket.on('playerFire', function(msg){
    socket.broadcast.emit('onPlayFire', msg);
  });
})
app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
http.listen(1408, function(){
  console.log('Server started. Listening on *:1408');
});
