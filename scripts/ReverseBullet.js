class ReverseBullet{
  constructor(monster, velocityBullet, group){
    this.sprite = group.create(monster.sprite.x, monster.sprite.y, 'bulletReverse');
    this.sprite.body.velocity.x = velocityBullet.x;
    this.sprite.body.velocity.y = velocityBullet.y;
    Commando.game.time.events.add(Phaser.Timer.SECOND * 6, this.killSelf, this);
  }
  killSelf(){
    this.sprite.kill();
    this.sprite.destroy();
  }
}
