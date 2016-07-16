var Commando = {
  map : [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
};

window.onload = function(){
  Commando.game = new Phaser.Game(window.innerWidth,
                                  window.innerHeight,
                                  Phaser.AUTO,
                                  '',
                                  {preload:preload, create:create, update:update}
                                  );
}

var preload = function(){
  Commando.game.load.image('bulletRight', './images/bullet_right.png');
  Commando.game.load.image('bulletLeft', './images/bullet_left.png');
  Commando.game.load.image('playerRight', './images/player_right.png');
  Commando.game.load.image('playerLeft', './images/player_left.png');
  Commando.game.load.image('jumpRight', './images/jump_right.png');
  Commando.game.load.image('jumpLeft', './images/jump_left.png');
  Commando.game.load.spritesheet('run', './images/run.png', 58, 75, 14);
  Commando.game.load.spritesheet('sit', './images/sit.png', 58, 75, 4);
  Commando.game.load.spritesheet('die', './images/die.png', 58, 75, 9);
  Commando.game.load.image('wall', './images/wall_steel.png');
  Commando.game.load.image('monsterLeft', './images/monster_left.png');
  Commando.game.load.image('monsterRight', './images/monster_right.png');
  Commando.game.load.image('monsterMiddle', './images/monster_middle.png');
  Commando.game.load.image('bulletSlow', './images/bullet_slow.png');
  Commando.game.load.image('bulletReverse', './images/bullet_reverse.png');
  Commando.game.load.image('bulletNormal', './images/bullet_normal.png');
  Commando.game.load.image('triple', './images/bullet_triple.png');
  Commando.game.load.image('hidden', './images/hidden.png');
  Commando.game.load.image('armor', './images/armor.png');
  Commando.game.load.image('health', './images/health.png');
  Commando.game.load.image('speed', './images/speed.png');
  Commando.game.load.bitmapFont('desyrel', './images/desyrel.png', './images/desyrel.xml');
  Commando.game.load.image('add', './images/add.png');
  Commando.game.load.image('hinh', './images/ghost-gothic-town-wallpaper.jpg');
}

var create = function(){
  var hinh = Commando.game.add.sprite(0,0,'hinh');
  Commando.game.physics.startSystem(Phaser.Physics.ARCADE);
  Commando.keyboard = Commando.game.input.keyboard;
  Commando.game.stage.disableVisibilityChange = true;

  Commando.playerGroup = Commando.game.add.physicsGroup();
  Commando.slowBulletGroup = Commando.game.add.physicsGroup();
  Commando.normalBulletGroup = Commando.game.add.physicsGroup();
  Commando.reverseBulletGroup = Commando.game.add.physicsGroup();
  Commando.wallGroup = Commando.game.add.physicsGroup();
  Commando.bulletGroup = Commando.game.add.physicsGroup();
  Commando.monsterGroup = Commando.game.add.physicsGroup();
  Commando.tripleGroup = Commando.game.add.physicsGroup();
  Commando.hiddenGroup = Commando.game.add.physicsGroup();
  Commando.healthGroup = Commando.game.add.physicsGroup();
  Commando.armorGroup = Commando.game.add.physicsGroup();
  Commando.speedGroup = Commando.game.add.physicsGroup();

  Commando.leftMonster = new Monster(115, 100, 'monsterLeft', new Phaser.Point(1, 0.5), new Phaser.Point(500, 150));
  Commando.rightMonster = new Monster(1500-115, window.innerHeight/2 - 200, 'monsterRight', new Phaser.Point(0, 0.5), new Phaser.Point(-500, 150));
  Commando.middleMonster= new Monster(1500/2, 70, 'monsterMiddle', new Phaser.Point(0.4, 0.5), new Phaser.Point(0, 500));

  Commando.Triple = new Triple(Math.random()*1500, Math.random()*650, Commando.tripleGroup);
  Commando.Hidden = new Hidden(Math.random()*1500, Math.random()*650, Commando.hiddenGroup);
  Commando.Health = new Health(Math.random()*1500, Math.random()*650, Commando.healthGroup);
  Commando.Speed = new Speed(Math.random()*1500, Math.random()*650, Commando.speedGroup);

  Commando.text = Commando.game.add.bitmapText(40, 20, 'desyrel', 'Phaser & Pixi\nrocking!', 20);
  Commando.textGame = Commando.game.add.bitmapText(window.innerWidth/2-150, 20, 'desyrel', 'Commando Online - 1st is the best', 20);

  Commando.game.world.setBounds(0, 0, 1500, 650);
  Commando.enemies = [];

  for(var i=0;i<Commando.map.length;i++){
    for(var j=0;j<Commando.map[i].length;j++){
      if(Commando.map[i][j]){
        new Wall(j*16, i*16, Commando.wallGroup);
      }
    }
  }
  var username = prompt("Please enter your name: ", localStorage.getItem('username') || 'Player1');
  username = username || 'Player1';

  localStorage.setItem('username', username);
  Commando.client = new Client(username);
  // addClick();
}
var update = function(){

  if(Commando.inputController){
    Commando.text.text = 'Max Health : ' + Math.round(Commando.player.sprite.maxHealth)
                              + '\nDamage : ' + Math.round(Commando.player.sprite.playerDamage);
  }

  Commando.game.physics.arcade.collide(Commando.playerGroup, Commando.wallGroup,
                                        onPlayerOnWall, null, this);

  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.healthGroup,
                                        onHealthMeetPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.speedGroup,
                                        onSpeedMeetPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.tripleGroup,
                                        onTripleMeetPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.hiddenGroup,
                                        onHiddenMeetPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.bulletGroup, Commando.playerGroup,
                                        onBulletHitPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.bulletGroup, Commando.wallGroup,
                                        onBulletHitWall, null, this);
  Commando.game.physics.arcade.overlap(Commando.normalBulletGroup, Commando.wallGroup,
                                        onBulletHitWall, null, this);
  Commando.game.physics.arcade.overlap(Commando.slowBulletGroup, Commando.wallGroup,
                                        onBulletHitWall, null, this);
  Commando.game.physics.arcade.overlap(Commando.reverseBulletGroup, Commando.wallGroup,
                                        onBulletHitWall, null, this);
  Commando.game.physics.arcade.overlap(Commando.bulletGroup, Commando.monsterGroup,
                                        onBulletHitMonster, null, this);
  Commando.game.physics.arcade.overlap(Commando.slowBulletGroup, Commando.playerGroup,
                                        onSlowBulletMeetPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.reverseBulletGroup, Commando.playerGroup,
                                        onReverseBulletMeetPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.normalBulletGroup, Commando.playerGroup,
                                        onNormalBulletMeetPlayer, null, this);

  if(Commando.inputController) Commando.inputController.update();
  Commando.leftMonster.fire();
  Commando.rightMonster.fire();
  Commando.middleMonster.fire();
}
var playerById = function(id, kill){
  for(var i=0; i<Commando.enemies.length; i++){
    if(Commando.enemies[i].sprite.id == id){
      return kill ? Commando.enemies.splice(i, 1)[0] : Commando.enemies[i];
    }
  }

  return null;
}
Commando.onPlayerDisconnected = function(msg){
  var enemy = playerById(msg.id, true);
  if(!enemy) return;
  enemy.sprite.destroy();
}

var onPlayerOnWall = function(player, wall){
  if(player.body.touching.down) player.collideWall=true;
}

var onSpeedMeetPlayer = function(player, speed){
  speed.kill();
  player.speed = 300;
  Commando.game.time.events.add(Phaser.Timer.SECOND*8, function(){player.speed=200;}, this);
}

var onTripleMeetPlayer = function(player, triple){
  triple.kill();
  if(player.id == Commando.player.sprite.id){
    player.typeBullet = 0;
    Commando.client.eatTripleItem(player.id);
    Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){player.typeBullet=1;}, this);
  }

}
var onHealthMeetPlayer = function(player, health){
  health.kill();
  if(player.id == Commando.player.sprite.id){
    if(player.health+3 <= player.maxHealth) player.health+=3;
    else player.health=player.maxHealth;
    Commando.client.hitDamage(player.id, player.health);
  }
}

var onBulletHitPlayer = function(bullet, player){
  if(bullet.player != player){
    bullet.kill();
    if(player.id == Commando.player.sprite.id){
      player.health -= bullet.bulletDamage;
      Commando.client.hitDamage(player.id, player.health, bullet.player.id);
      if(player.health==0){
        player.kill();
        player.destroy();
      }
    }
  }
}
var onBulletHitWall = function(bullet, wall){
  bullet.kill();
}
var onBulletHitMonster = function(bullet, monster){
  bullet.kill();
}
var onHiddenMeetPlayer = function(player, hidden){
  hidden.kill();
  if(player.id == Commando.player.sprite.id) Commando.client.playerHidden(player.id);
}
var onSlowBulletMeetPlayer = function(slowBullet, player){
  slowBullet.kill();
  player.speed = 50;
  Commando.game.time.events.add(Phaser.Timer.SECOND*3, function(){player.speed=200;}, this);
}
var onReverseBulletMeetPlayer = function(reverseBullet, player){
  reverseBullet.kill();
  player.speed = -player.speed;
  Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){player.speed = 200;}, this);
}
var onNormalBulletMeetPlayer = function(normalBullet, player){
  normalBullet.kill();
  if(player.id == Commando.player.sprite.id){
    player.health -= 1;
    Commando.client.hitDamage(player.id, player.health);
    if(player.health==0){
      player.kill();
      player.destroy();
    }
  }
}
// var addClick = function(){
//     Commando.addMaxHealth = Commando.game.add.sprite(20, 20, 'add');
//     Commando.addDamage = Commando.game.add.sprite(20, 45, 'add');
//
//     Commando.addMaxHealth.inputEnabled = true;
//     Commando.addDamage.inputEnabled = true;
//
//     Commando.addMaxHealth.events.onInputDown.add(function(){
//       Commando.dellImageAdd();
//       Commando.player.sprite.maxHealth++;
//       // Commando.client.resetMaxHealth(Commando.player.sprite.id, Commando.player.sprite.maxHealth);
//     }, this);
//     Commando.addDamage.events.onInputDown.add(function(){
//       Commando.dellImageAdd();
//       Commando.player.sprite.playerDamage++;
//     }, this);
// }

Commando.onEatTripleItem = function(id){
  for(var i=0; i<Commando.enemies.length; i++){
    if(id == Commando.enemies[i].sprite.id){
      Commando.enemies[i].sprite.typeBullet = 0;
      Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){Commando.enemies[i].sprite.typeBullet = 1;}, this);
      return;
    }
  }
}
Commando.onHitDamage = function(data){
  for(var i=0; i<Commando.enemies.length; i++){
    if(data.id == Commando.enemies[i].sprite.id){
      Commando.enemies[i].sprite.health = data.health;
      if(data.health==0){
        Commando.enemies[i].sprite.kill();
        Commando.enemies[i].sprite.destroy();
        // if(data.bulletId == Commando.player.sprite.id) addClick();
      }
      return;
    }
  }
}



Commando.onPlayerHidden = function(id){
  for(var i=0; i<Commando.enemies.length; i++){
    if(id == Commando.enemies[i].sprite.id){
      Commando.enemies[i].sprite.renderable = false;
      Commando.game.time.events.add(Phaser.Timer.SECOND*3, function(){
        Commando.enemies[i].sprite.renderable = true;
      }, this);
      return;
    }
  }
}
Commando.onPlayerDie = function(id){
  for(var i=0; i<Commando.enemies; i++){
    if(id == Commando.enemies[i].sprite.id){
      Commando.enemies[i].sprite.kill();
      Commando.enemies[i].sprite.destroy();
      return;
    }
  }
}
Commando.onPlayerFire = function(id){
  for(var i=0; i<Commando.enemies.length; i++){
    if(id == Commando.enemies[i].sprite.id){
      if(Commando.enemies[i].sprite.typeBullet==1) Commando.enemies[i].fire();
      else Commando.enemies[i].fireTriple();
      return;
    }
  }
}

Commando.createPlayer = function(data){
  Commando.player = new Player(data.id, data.x, data.y, Commando.playerGroup, data.username);
  Commando.game.camera.follow(Commando.player.sprite);
  Commando.inputController = new InputController(Commando.keyboard, Commando.player);
}
Commando.onPlayerDied = function(position){
  var die = Commando.game.add.sprite(position.x, position.y, 'die');
  die.anchor.set(0.5,0.35);
  die.animations.add('die');
  die.play('die', 5, false, true);
}
Commando.onNewPlayer = function(data){
  Commando.enemies.push(new Player(data.id, data.x, data.y, Commando.playerGroup, data.username));
}
Commando.onAllPlayers = function(data){
  for(var i=0; i<data.length; i++){
    Commando.enemies.push(new Player(data[i].id, data[i].x, data[i].y, Commando.playerGroup, data[i].username));
  }
}
Commando.onPlayerMoved = function(data){
  for(var i=0; i<Commando.enemies.length; i++){
    if(data.id == Commando.enemies[i].sprite.id){
      Commando.enemies[i].sprite.position = data.position;
      Commando.enemies[i].update(data.direction);
      return;
    }
  }
}
Commando.dellImageAdd = function(){
  Commando.addMaxHealth.kill();
  Commando.addDamage.kill();
  Commando.player.sprite.add=true;
}
