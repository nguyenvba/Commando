class MonsterBullet{
  constructor(position, group, spriteName, velocity){
    this.sprite = group.create(position.x, position.y, spriteName);
    this.sprite.body.velocity = velocity;
    this.sprite.name = spriteName;
    Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){
      this.sprite.kill();
      this.sprite.destroy();
      new MonsterBullet(position, group, spriteName, velocity);
    }, this);
  }
}
