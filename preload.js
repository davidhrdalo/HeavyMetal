function preload(){
  turretimg = loadImage('images/turret.png');//
  tankfowardimg = loadImage('images/tankfoward.png');//
  tankleftimg = loadImage('images/tankleft.png');//
  tankrightimg = loadImage('images/tankright.png');//
  
  bulletImage = loadImage('images/bulletImage.png');//Good Bullet

  explosionimg = loadImage('images/explosion.png');//explosion image for death screen

  menuBackground = loadImage('images/menu.jpg');

  enemyTankImages = [];
  for (let i = 0; i < 5; i++) {
    enemyTankImages.push(loadImage('images/enemytank' + i + '.png'));
  }

  backgroundImages = [];
  for (let i = 0; i < 5; i++) {
    backgroundImages.push(loadImage('images/backgroundimg' + i + '.png'));
  }

  data = loadJSON('settings.json')

  gameoversound = new Audio('sound/gameover.mp3');
  gunsound = new Audio('sound/gun.mp3');
  menusound = new Audio('sound/menusound.mp3');
  music = new Audio('sound/music.mp3');
  }