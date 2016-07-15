class InputController{
  constructor(keyboard, player){
    this.player = player;
    this.keyboard = keyboard;
    this.lastShotTime = Commando.game.time.now;
  }
  update(){
    if(this.player.sprite.alive){
      var direction = new Phaser.Point();
      if(this.keyboard.isDown(Phaser.KeyCode.LEFT)){
        direction.x = -1;
      }
      else if (this.keyboard.isDown(Phaser.KeyCode.RIGHT)){
        direction.x = 1;
      }
      else direction.x = 0;

      if(this.keyboard.isDown(Phaser.KeyCode.UP)){
        direction.y = -1;
      }
      else if (this.keyboard.isDown(Phaser.KeyCode.DOWN)){
        direction.y = 1;
      }
      else direction.y = 0;
      this.player.update(direction);
      Commando.client.playerMoved(this.player.sprite.id, direction, this.player.sprite.postion);
      if(this.keyboard.isDown(Phaser.KeyCode.SPACEBAR)
        && Commando.game.time.now - this.lastShotTime > 300){
          if(this.player.sprite.typeBullet == 1) this.fire();
          else this.fireTriple();
          Commando.client.playerFire(this.player.sprite.id);
          this.lastShotTime = Commando.game.time.now;
      }
    }
  }
  fire(){
    new Bullet(this.player);
  }
  fireTriple(){
    new TripleBullet(this.player);
  }
}
