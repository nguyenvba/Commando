class Player{
  constructor(id, x, y, group, name){
    this.sprite = group.create(x, y, 'run', 7);
    this.sprite.name = name;
    this.sprite.health = 5;
    Commando.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5, 0.35);
    this.sprite.body.gravity.y = 600;
    this.direction = 1;
    this.sprite.id = id;
    this.sprite.animations.add('runLeft', [6,5,4,3,2,1,0], 10, true);
    this.sprite.animations.add('runRight', [8,9,10,11,12,13], 10, true);
    this.sprite.animations.add('stopRunRight', [7], 10, false);
    this.sprite.animations.add('stopRunLeft', [6], 10, false);
    this.sprite.events.onKilled.add(this.die, this);
    this.sprite.speed = 200;
    this.sprite.playerDamage = 1;
    this.sprite.maxHealth = 10;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.collideWall = false;
    this.sprite.typeBullet = 1;
    this.sprite.renderable = true;
    this.sprite.text = new Phaser.Text(this.sprite.game, 0, -65,
      'Name:' + this.sprite.name + '\nHealth:' + this.sprite.health
        + '\nMaxHealth:' + this.sprite.maxHealth, {
      font: 'bold 10pt Arial',
      fill : 'white',
      stroke : 'black',
      strokeThickness : 3
    });
    this.sprite.text.anchor.set(0.5,0.5);
    this.sprite.addChild(this.sprite.text);
  }
  update(direction){
    if(direction.x > 0){
      this.sprite.play('runRight');
      this.sprite.body.velocity.x = this.sprite.speed;
      this.direction = 1;
    }
    else if(direction.x < 0){
      this.sprite.play('runLeft');
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.direction = -1;
    }
    else{
      this.sprite.body.velocity.x = 0;
      if(this.direction > 0) this.sprite.play('stopRunRight');
      else this.sprite.play('stopRunLeft');
    }

    if(direction.y < 0 && this.sprite.collideWall){
      this.sprite.body.velocity.y = -400;
      this.sprite.collideWall=false;
    }
  }
  die(){
    Commando.onDieAnimation(this.sprite.position);
    // Commando.client.PlayerDie(this.sprite.id);
  }
  fire(){
    new Bullet(this);
    if(this.sprite.typeBullet==0){
      new Bullet(this, -150);
      new Bullet(this, 150);
    }
  }
}
