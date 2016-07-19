var Commando = {
  map : [
   [0],
   [0],
   [0],
   [0],
   [0],
   [0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
   [0],
   [0],
   [0],
   [0],
   [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
   [0],
   [0],
   [0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
   [0],
   [0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
   [0],
   [0],
   [0],
   [0],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
   [0],
   [0],
   [0],
   [0],
   [0],
   [0],
   [0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
   [0],
   [0],
   [0],
   [0],
   [0],
   [0],
   [0],
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
  Commando.game.load.spritesheet('run', './images/run.png', 58, 75, 14);
  Commando.game.load.spritesheet('die', './images/die.png', 58, 75, 9);
  Commando.game.load.image('wall', './images/wall.png');
  Commando.game.load.image('monsterLeft', './images/monster_left.png');
  Commando.game.load.image('monsterRight', './images/monster_right.png');
  Commando.game.load.image('monsterMiddle', './images/monster_middle.png');
  Commando.game.load.image('bulletSlow', './images/bullet_slow.png');
  Commando.game.load.image('bulletReverse', './images/bullet_reverse.png');
  Commando.game.load.image('bulletNormal', './images/bullet_normal.png');
  Commando.game.load.image('triple', './images/bullet_triple.png');
  Commando.game.load.image('hidden', './images/hidden.png');
  Commando.game.load.image('health', './images/health.png');
  Commando.game.load.image('speed', './images/speed.png');
  // Commando.game.load.image('add', './images/add.png');
  Commando.game.load.image('hinh', './images/74381.JPG');
}

var create = function(){

  Commando.game.add.sprite(0,0,'hinh');
  Commando.game.physics.startSystem(Phaser.Physics.ARCADE);
  Commando.keyboard = Commando.game.input.keyboard;
  Commando.game.stage.disableVisibilityChange = true;

  Commando.playerGroup = Commando.game.add.physicsGroup();

  Commando.monsterBulletGroup = Commando.game.add.physicsGroup();
  Commando.wallGroup = Commando.game.add.physicsGroup();
  Commando.bulletGroup = Commando.game.add.physicsGroup();
  Commando.monsterGroup = Commando.game.add.physicsGroup();

  Commando.itemGroup = Commando.game.add.physicsGroup();
  new Item(Math.random()*2000, Math.random()*500, Commando.itemGroup, 'health');
  new Item(Math.random()*2000, Math.random()*500, Commando.itemGroup, 'speed');
  new Item(Math.random()*2000, Math.random()*500, Commando.itemGroup, 'triple');
  new Item(Math.random()*2000, Math.random()*500, Commando.itemGroup, 'hidden');

  Commando.leftMonster = new Monster(new Phaser.Point(115,100), Commando.monsterGroup, 'monsterLeft', new Phaser.Point(1, 0.5));
  Commando.rightMonster = new Monster(new Phaser.Point(2000-115, 100),Commando.monsterGroup, 'monsterRight', new Phaser.Point(0, 0.5));
  Commando.middleMonster= new Monster(new Phaser.Point(2000/2, 50),Commando.monsterGroup, 'monsterMiddle', new Phaser.Point(0.4, 0.5));

  // Commando.leaderboard = Commando.game.add.text(2000/2-100, 250, '', {
  //   font: 'bold 13pt Arial',
  //   fill : 'white',
  //   stroke : 'black',
  //   strokeThickness : 3
  // });
  // Commando.leaderboard.setText('abc');
  Commando.game.world.setBounds(0, 0, 2000, 650);
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
  if(username.length > 20) username = username.substring(0, 19);

  localStorage.setItem('username', username);
  Commando.client = new Client(username);
}
var update = function(){

  Commando.game.physics.arcade.collide(Commando.playerGroup, Commando.wallGroup,
                                        onPlayerOnWall, null, this);
  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.bulletGroup,
                                        onBulletHitPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.itemGroup,
                                        onItemWithPlayer, null, this);
  Commando.game.physics.arcade.overlap(Commando.playerGroup, Commando.monsterBulletGroup,
                                        onMonsterBulletHitPlayer, null, this);

  Commando.game.physics.arcade.overlap(Commando.bulletGroup, Commando.wallGroup,
                                        onBulletHitWall, null, this);
  Commando.game.physics.arcade.overlap(Commando.bulletGroup, Commando.monsterGroup,
                                        onBulletHitWall, null, this);

  if(Commando.inputController) Commando.inputController.update();
}
var getPlayerById = function(id, kill){
  for(var i=0; i<Commando.enemies.length; i++){
    if(Commando.enemies[i].sprite.id == id){
      return kill ? Commando.enemies.splice(i, 1)[0] : Commando.enemies[i];
    }
  }
  return null;
}

var setText = function(playerSprite){
  playerSprite.text.setText('Name:' + playerSprite.name + '\nHealth:' + playerSprite.health + '/' + playerSprite.maxHealth
    + '\nDamage:' + playerSprite.playerDamage);
}
var onPlayerOnWall = function(player, wall){
  if(player.body.touching.down) player.collideWall=true;
}

var onItemWithPlayer = function(playerSprite, itemSprite){
  itemSprite.kill();
  if(playerSprite.id == Commando.player.sprite.id){
    if(itemSprite.name == 'health'){
      if(playerSprite.health+3 <= playerSprite.maxHealth) playerSprite.health += 3;
      else playerSprite.health = playerSprite.maxHealth;
      Commando.client.hitDamage(playerSprite.id, playerSprite.health);
      setText(playerSprite);
    }
    if(itemSprite.name == 'speed'){
      playerSprite.speed = 300;
      Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){playerSprite.speed=200;}, this);
    }
    if(itemSprite.name == 'triple'){
      playerSprite.typeBullet = 0;
      Commando.game.time.events.add(Phaser.Timer.SECOND*3, function(){playerSprite.typeBullet=1;}, this);
    }
    if(itemSprite.name == 'hidden'){
      Commando.client.playerHidden(playerSprite.id);
    }
  }
}
var onBulletHitPlayer = function(playerSprite, bulletSprite){
  if(bulletSprite.player != playerSprite){
    bulletSprite.kill();
    if(playerSprite.id == Commando.player.sprite.id){
      playerSprite.damage(bulletSprite.bulletDamage);
      setText(playerSprite);
      Commando.client.hitDamage(playerSprite.id, playerSprite.health, bulletSprite.player.id);
    }
  }
}
var onMonsterBulletHitPlayer = function(playerSprite, monsterBulletSprite){
  monsterBulletSprite.kill();
  if(playerSprite.id == Commando.player.sprite.id){
    if(monsterBulletSprite.name == 'bulletSlow'){
      playerSprite.speed = 50;
      Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){playerSprite.speed = 200;}, this);
    }
    if(monsterBulletSprite.name == 'bulletReverse'){
      playerSprite.speed = -200;
      Commando.game.time.events.add(Phaser.Timer.SECOND*5, function(){playerSprite.speed = 200;}, this);
    }
    if(monsterBulletSprite.name == 'bulletNormal'){
      playerSprite.damage(1);
      setText(playerSprite);
      Commando.client.hitDamage(playerSprite.id, playerSprite.health);
    }

  }
}
var onBulletHitWall = function(bullet, wall){
  bullet.kill();
}
var stronger = function(id){
  var randomPrototype = Math.random()*2;
  if(id == Commando.player.sprite.id){
    if(randomPrototype <= 1){
      if(Commando.player.sprite.playerDamage < 5)
        Commando.player.sprite.playerDamage++;
    }
    else{
      if(Commando.player.sprite.maxHealth < 30)
      Commando.player.sprite.maxHealth+=2;
    }
    Commando.client.updatePrototype(id, Commando.player.sprite.playerDamage, Commando.player.sprite.maxHealth);
    setText(Commando.player.sprite);
  }
}


Commando.onPlayerDisconnected = function(msg){
  var enemy = getPlayerById(msg.id, true);
  if(!enemy) return;
  enemy.sprite.destroy();
}
Commando.onUpdatePrototype = function(data){
  var player = getPlayerById(data.id);
  if(!player) return;
  player.sprite.playerDamage = data.damage;
  player.sprite.maxHealth = data.maxHealth;
  setText(player.sprite);
}
Commando.onHitDamage = function(data){
  if(data.health<=0){
    var player = getPlayerById(data.id, true);
    player.sprite.kill();
    player.sprite.destroy();
    stronger(data.killerId);
  }
  else{
    var player = getPlayerById(data.id);
    player.sprite.health = data.health;
    setText(player.sprite);
  }

}
Commando.onPlayerHidden = function(id){
  var player = getPlayerById(id);
  player.sprite.renderable = false;
  Commando.game.time.events.add(Phaser.Timer.SECOND*3, function(){
    player.sprite.renderable = true;}, this);
}
Commando.onPlayerDie = function(id){
  var player = getPlayerById(id,true);
  player.sprite.kill();
  player.sprite.destroy();
}
Commando.onPlayerFire = function(data){
  var player = getPlayerById(data.id);
  player.sprite.typeBullet=data.typeBullet;
  player.fire();
}
Commando.createPlayer = function(data){
  Commando.player = new Player(data.id, data.x, data.y, Commando.playerGroup, data.username);
  Commando.game.camera.follow(Commando.player.sprite);
  Commando.inputController = new InputController(Commando.keyboard, Commando.player);
}
Commando.onDieAnimation = function(position){
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
    Commando.enemies[i].sprite.health = data[i].health;
    Commando.enemies[i].sprite.playerDamage = data[i].damage;
    Commando.enemies[i].sprite.maxHealth = data[i].maxHealth;
    setText(Commando.enemies[i].sprite);
  }
}
Commando.onPlayerMoved = function(data){
  var player = getPlayerById(data.id);
  if(!player) return;
  player.sprite.position = data.position;
  player.update(data.direction);
}
