let vid, menuButton, deathButton, highScoreInput, tankBase, tankTurret, enemyTanks, enemyBullets, bullets, walls, playerTankScore;
let gunsound, menusound, gameoversound, music;
let enemyTank0, enemyTank1, enemyTank2, enemyTank3, enemyTank4;
let enemyTankC0, enemyTankC1, enemyTankC2, enemyTankC3, enemyTankC4;
let bulletCount0, bulletCount1, bulletCount2, bulletCount3, bulletCount4;
let gamespeed, adder, score, r;

let gamew = 900;
let gameh = 750;
let gametime = 0;
let tracker = 0;

let tankx = 450;
let tanky = 650;
let tileh = 3500;

let playerNameArray = ["N/A","N/A","N/A","N/A","N/A"];
let playerScoreArray = ["N/A","N/A","N/A","N/A","N/A"];

// Game state constants
const LOADING = 0;
const MAIN_MENU = 1;
const PLAY = 2;
const HIGH_SCORE = 3;
var currentState = LOADING;

function setup() {
  createCanvas(gamew, gameh);
  reset();
}

function reset(){
  tankFunc();
  playerBoarders();
  enemyBoarders();
  
  //Loading screen intro vid
  vid = createVideo('videos/smoke.mp4');
  vid.size(gamew, gameh);
  vid.volume(0);
  vid.hide();
  
  menuButton = createButton('Start Game!');
  menuButton.size(200,AUTO);
  menuButton.style('font-size', '30px');
  menuButton.position(100, 400);
  menuButton.mousePressed(menuButtonPressed);
  menuButton.hide();
  
  deathButton = createButton('Continue');
  deathButton.size(100,AUTO);
  deathButton.style('font-size', '20px');
  deathButton.position(250, 400);
  deathButton.mousePressed(continue1);
  deathButton.hide();
  
  highScoreInput = createInput('');
  highScoreInput.size(145,29);
  highScoreInput.style('font-size', '20px');
  highScoreInput.position(100, 400);
  highScoreInput.hide();
  
  bullets = new Group();
  enemyTanks = new Group();
  enemyBullets = new Group();
  
  adder = 0;
  gamespeed = 5;
  score = 0;
  r = 0;
  
  enemyTankR = 0;
  enemyTankC = 0;

  bulletCount0 = 0;
  bulletCount1 = 0;
  bulletCount2 = 0;
  bulletCount3 = 0;
  bulletCount4 = 0;

  enemyTankC0 = 0;
  enemyTankC1 = 0;
  enemyTankC2 = 0;
  enemyTankC3 = 0;
  enemyTankC4 = 0;

  playerTankScore = 0;
}

function draw() {
  background(64, 73, 115);

  switch (currentState){
    case LOADING:
      loadScreen();
        break;
    case MAIN_MENU:
      menuScreen();
        break;
    case PLAY:
      gameScreen();
        break;
    case HIGH_SCORE:
      deathScreen();
        break;
  }

  if (frameCount == 400){
    currentState = MAIN_MENU;
  }
  if (frameCount > 400 && gametime < 410){
    menuButton.show();
  }

  gametime += 1;
}