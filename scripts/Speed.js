class Speed{
    constructor(x, y, group) {
        this.sprite = group.create(x, y, 'speed');
        Commando.game.physics.arcade.enable(this.sprite);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.score = 1;
        Commando.game.time.events.add(Phaser.Timer.SECOND * 4, this.killSelf, this);
    }
    killSelf(){
      this.sprite.kill();
      this.sprite.destroy();
      Commando.game.time.events.add(Phaser.Timer.SECOND * 3, function(){
        new Speed(Math.random()*1500, Math.random()*450, Commando.speedGroup);
      }, this);
    }
}
