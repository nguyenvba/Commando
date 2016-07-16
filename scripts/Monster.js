class Monster{
  constructor(x, y, spriteName, anchor, velocityBullet){
    this.sprite = Commando.monsterGroup.create(x, y, spriteName);
    this.sprite.anchor.set(anchor.x, anchor.y);
    this.velocityBullet = velocityBullet;
    this.lastShotTime = Commando.game.time.now-5000;
    this.spriteName = spriteName;
  }
  fire(){
    if(Commando.game.time.now - this.lastShotTime > 5000 ){
      if(this.spriteName=='monsterLeft'){
        new SlowBullet(this, this.velocityBullet, Commando.slowBulletGroup);
      }
      if(this.spriteName=='monsterRight') new ReverseBullet(this, this.velocityBullet, Commando.reverseBulletGroup);
      if(this.spriteName=='monsterMiddle') new NormalBullet(this, this.velocityBullet, Commando.normalBulletGroup);
      this.lastShotTime = Commando.game.time.now;
    }
  }

}
