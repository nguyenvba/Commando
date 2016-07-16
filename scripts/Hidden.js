class Hidden{
    constructor(x, y, group) {
        this.sprite = group.create(x, y, 'hidden');
        Commando.game.physics.arcade.enable(this.sprite);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.score = 1;
        Commando.game.time.events.add(Phaser.Timer.SECOND * 5, this.killSelf, this);
    }
    killSelf(){
      this.sprite.kill();
      Commando.game.time.events.add(Phaser.Timer.SECOND * 3, function(){
        new Hidden(500, 450, Commando.hiddenGroup);
      }, this);
    }
}
