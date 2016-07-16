class Health{
    constructor(x, y, group) {
        this.sprite = group.create(x, y, 'health');
        Commando.game.physics.arcade.enable(this.sprite);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.score = 1;
        Commando.game.time.events.add(Phaser.Timer.SECOND * 5, this.killSelf, this);
    }
    killSelf(){
      this.sprite.kill();
      Commando.game.time.events.add(Phaser.Timer.SECOND * 5, function(){
        new Health(Math.random()*1500, Math.random()*650, Commando.healthGroup);
      }, this);
    }
}
