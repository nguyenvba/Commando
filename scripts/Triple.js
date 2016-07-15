class Triple{
    constructor(x, y, group) {
      this.sprite = group.create(x, y, 'triple');
      Commando.game.physics.arcade.enable(this.sprite);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.score = 1;
      this.lastTimeAppear = Commando.game.time.now;
      Commando.game.time.events.add(Phaser.Timer.SECOND * 5, this.killSelf, this);
    }
    killSelf(){
      this.sprite.kill();
    }
}
