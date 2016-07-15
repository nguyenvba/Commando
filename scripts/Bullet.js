class Bullet{
  constructor(player){
    var spriteName;
    if(player.direction > 0){
      spriteName = 'bulletRight';
    }
    else if(player.direction < 0){
      spriteName = 'bulletLeft';
    }

    this.sprite = Commando.bulletGroup.create(player.sprite.x, player.sprite.y, spriteName);
    this.sprite.anchor.set(0.5,0.5);
    this.sprite.body.velocity = new Phaser.Point(player.direction*500, 0);
    this.sprite.bulletDamage = player.sprite.playerDamage;
    this.sprite.player = player.sprite;
  }
}
