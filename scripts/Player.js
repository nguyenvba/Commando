class Player{
  constructor(id, x, y, group){
    this.sprite = group.create(x, y, 'run', 7);
    Commando.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5, 0.35);
    this.sprite.body.gravity.y = 500;
    this.direction = 1;

    this.sprite.id = id;
    this.sprite.animations.add('runLeft', [6,5,4,3,2,1,0], 10, true);
    this.sprite.animations.add('runRight', [8,9,10,11,12,13], 10, true);
    this.sprite.animations.add('stopRunRight', [7], 10, false);
    this.sprite.animations.add('stopRunLeft', [6], 10, false);
    this.sprite.animations.add('sitRight', [4,5,6,7], true);
    this.sprite.animations.add('sitLeft', [0,1,2,3], true);
    this.sprite.animations.add('jumpRight', [8,9,10,11,12,13], 10, true);
    this.sprite.animations.add('jumpLeft', [6,5,4,3,2,1,0], 10, true);
    this.sprite.events.onKilled.add(this.die, this);

    this.checkReverse = false;
    this.checkImmovable = false;

    this.sprite.add = 1;
    this.sprite.score = 0;

    this.sprite.speed = 200;
    this.sprite.health = 1;
    this.sprite.playerDamage = 1;
    this.sprite.maxHealth = 10;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.collideWall = false;
    // this.sprite.renderable = false;
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

    if(direction.y < 0 && this.sprite.collideWall && this.sprite.body.touching.down){
      this.sprite.body.velocity.y = -400;
      this.sprite.collideWall=false;
    }
  }
  die(){
    Commando.onPlayerDied(this.sprite.position);
  }
  resetSpeed(){
    Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){this.speed+=100;}, this);
  }
}