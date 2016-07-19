var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));

var players = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
var getPlayerById = function(id, kill){
  for(var i=0; i<players.length; i++){
    if(players[i].id == id){
      return kill ? players.splice(i,1)[0] : players[i];
    }
  }
  return null;
}


io.on('connection', function(socket){
  console.log('New User Connected');

  socket.on('login', function(msg){
    var NewPlayer = {
      username : msg,
        x : Math.random()*1500,
        y : Math.random()*500,
      id : socket.id,
      damage:1, health:7, maxHealth:10, score:0
    }
    socket.emit('createPlayer', NewPlayer);
    socket.emit('onAllPlayers', players);
    socket.broadcast.emit('onNewPlayer', NewPlayer);
    players.push(NewPlayer);
  });
  socket.on('playerMoved', function(msg){
    var player = getPlayerById(msg.id);
    player.x = msg.position.x;
    player.y = msg.position.y;
    socket.broadcast.emit('onPlayerMoved', msg);
  });
  socket.on('hitDamage', function(msg){
    var player = getPlayerById(msg.id);
    player.health = msg.health;
    socket.broadcast.emit('onHitDamage', msg);
  });
  socket.on('playerHidden', function(msg){
    socket.broadcast.emit('onPlayerHidden', msg);
  });
  socket.on('playerFire', function(msg){
    socket.broadcast.emit('onPlayerFire', msg);
  });
  socket.on('updatePrototype', function(msg){
    var player = getPlayerById(msg.id);
    player.damage = msg.damage;
    player.maxHealth = msg.maxHealth;
    socket.broadcast.emit('onUpdatePrototype', msg);
  });
  socket.on('disconnect', function(){
    console.log('User disconnected');
    if(getPlayerById(socket.id, true)){
      socket.broadcast.emit('playerDisconnected', { id: socket.id});
    }
  });
})

http.listen(1408, function(){
  console.log('Server started. Listening on *:1408');
});
