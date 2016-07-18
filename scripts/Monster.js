class Monster{
  constructor(position, group, spriteName, anchor){
    this.sprite = Commando.monsterGroup.create(position.x, position.y, spriteName);
    this.sprite.anchor.set(anchor.x, anchor.y);
    if(spriteName=='monsterLeft')
      new MonsterBullet(new Phaser.Point(this.sprite.x, this.sprite.y), Commando.monsterBulletGroup,
      'bulletSlow', new Phaser.Point(500, 150));
    if(spriteName=='monsterRight')
      new MonsterBullet(new Phaser.Point(this.sprite.x, this.sprite.y), Commando.monsterBulletGroup,
      'bulletReverse', new Phaser.Point(-500, 150));
    if(spriteName=='monsterMiddle')
      new MonsterBullet(new Phaser.Point(this.sprite.x, this.sprite.y), Commando.monsterBulletGroup,
      'bulletNormal', new Phaser.Point(0, 150));
  }
}
