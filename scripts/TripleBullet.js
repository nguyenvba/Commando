class TripleBullet{
  constructor(player){
    var spriteName;
    if(player.direction > 0){
      spriteName = 'bulletRight';
    }
    else if(player.direction < 0){
      spriteName = 'bulletLeft';
    }
    new Bullet(player, 150);
    new Bullet(player, 0);
    new Bullet(player, -150);
  }
}
