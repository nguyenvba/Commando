class NormalBullet{
  constructor(monster, velocityBullet, group){
    this.sprite = group.create(monster.sprite.x, monster.sprite.y, 'bulletNormal');
    this.sprite.body.velocity.x = velocityBullet.x;
    this.sprite.body.velocity.y = velocityBullet.y;
    this.sprite.bulletDamage = 1;
  }
}
