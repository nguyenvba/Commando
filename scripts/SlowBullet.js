class SlowBullet{
  constructor(monster, velocityBullet, group){
    this.sprite = group.create(monster.sprite.x, monster.sprite.y, 'bulletSlow');
    this.sprite.body.velocity.x = velocityBullet.x;
    this.sprite.body.velocity.y = velocityBullet.y;
    Commando.game.time.events.add(Phaser.Timer.SECOND * 6, this.killSelf, this);
  }
  killSelf(){
    this.sprite.kill();
    this.sprite.destroy();
  }
}
