var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));

var players = [];

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
  var NewPlayer = {
    id : socket.id,
    x  : Math.random()*1500,
    y  : Math.random()*300,
  }
  socket.on('disconnect', function(){
    console.log('User disconnected');
    if(getPlayerById(socket.id, true)){
      socket.broadcast.emit('playerDisconnected', { id: socket.id});
    }
  });
  socket.on('playerMoved', function(msg){
    var player = getPlayerById(msg.id);
    player.x = msg.position.x;
    player.y = msg.position.y;
    socket.broadcast.emit('onPlayerMoved', msg);
  });
  socket.on('login', function(msg){
    var NewPlayer = {
      score: 0,
      username : msg,
        x : Math.random()*500,
        y : Math.random()*100,
      id : socket.id
    }
    socket.emit('onAllPlayers', players);
    socket.emit('createPlayer', NewPlayer);
    socket.broadcast.emit('onNewPlayer', NewPlayer);
    players.push(NewPlayer);
  });

  socket.on('hitDamage', function(msg){
    socket.broadcast.emit('onHitDamage', msg);
  });
  socket.on('playerHidden', function(msg){
    socket.broadcast.emit('onPlayerHidden', msg);
  });
  // socket.on('playerKill', function(msg){
  //   socket.broadcast.emit('onPlayerKill', msg);
  // });
  socket.on('playerFire', function(msg){
    socket.broadcast.emit('onPlayerFire', msg);
  });
})
app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.php');
});
http.listen(1408, function(){
  console.log('Server started. Listening on *:1408');
});
