class Client{
  constructor(){
    this.socket = io();
    this.socket.on('create', function(msg){
      // Commando.createPlayer(msg);
    });
  }
}
