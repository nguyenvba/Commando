class Client{
  constructor(){
    this.socket = io();
    this.socket.on('createPlayer', function(msg){
      Commando.createPlayer(msg);
    });
    this.socket.on('onNewPlayer', function(msg){
      Commando.onNewPlayer(msg);
    });
    this.socket.on('onAllPlayers', function(msg){
      Commando.onAllPlayers(msg);
    });
    this.socket.on('onPlayerMoved', function(msg){
      Commando.onPlayerMoved(msg);
    });
    this.socket.on('onPlayerHidden', function(msg){
      Commando.onPlayerHidden(msg);
    });
    this.socket.on('onPlayFire', function(msg){
      Commando.onPlayFire(msg);
    });
    this.socket.on('onPlayerDie', function(msg){
      Commando.onPlayerDie(msg);
    });
    this.socket.on('onPlayerKill', function(msg){
      Commado.onPlayerKill(msg);
    });
  }
  playerMoved(id, direction, position){
    this.socket.emit('playerMoved', {
      id : id,
      direction : direction,
      position : position
    });
  }
  PlayerDie(id){
    this.socket.emit('PlayerDie', id);
  }
  playerFire(id){
    this.socket.emit('playerFire', id);
  }
  playerHidden(id){
    this.socket.emit('playerHidden', id);
  }
  playerKill(id){
    this.socket.emit('playerKill', id);
  }
}
