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
    this.socket.on('onReserveBullet', function(msg){
      Commando.onReserveBullet(msg);
    });
  }
  playerMoved(id, direction, position){
    this.socket.emit('playerMoved', {
      id : id,
      direction : direction,
      position : position
    });
  }
  reserveBullet(id){
    this.socket.emit('reserveBullet', id);
  }
}
