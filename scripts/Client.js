class Client{
  constructor(username){
    var that = this;
    this.socket = io();
    that.socket.emit('login',username);

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
    this.socket.on('onPlayerFire', function(msg){
      Commando.onPlayerFire(msg);
    });
    this.socket.on('onHitDamage', function(msg){
      Commando.onHitDamage(msg);
    });
    this.socket.on('playerDisconnected', function(msg){
      Commando.onPlayerDisconnected(msg);
    });
    this.socket.on('onUpdatePrototype', function(msg){
      Commando.onUpdatePrototype(msg);
    });
  }
  playerMoved(id, direction, position){
    this.socket.emit('playerMoved', {
      id : id,
      direction : direction,
      position : position
    });
  }
  playerDie(id){
    this.socket.emit('playerDie', id);
  }
  playerFire(id, typeBullet){
    this.socket.emit('playerFire', {
      id: id,
      typeBullet:typeBullet
    });
  }
  playerHidden(id){
    this.socket.emit('playerHidden', id);
  }

  hitDamage(id, health, killerId){
    this.socket.emit('hitDamage', {
      id:id,
      health:health,
      killerId:killerId
    });
  }
  updatePrototype(id, damage, maxHealth){
    this.socket.emit('updatePrototype', {
      id:id,
      damage:damage,
      maxHealth:maxHealth
    });
  }

}
