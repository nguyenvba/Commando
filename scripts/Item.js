class Item{
  constructor(x, y, group, spriteName){
    this.sprite = group.create(x, y, spriteName);
    this.sprite.name = spriteName;
    Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){
      this.sprite.kill();
      this.sprite.destroy();
      Commando.game.time.events.add(Phaser.Timer.SECOND*3, function(){
        new Item(Math.random()*1500,Math.random()*500,group,spriteName);
      });
    }, this);
  }
}
