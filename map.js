function backgroundImage() {
  let b = image(backgroundImages[r],0,adder);
  backgroundImages[0].resize(width, tileh);
  backgroundImages[1].resize(width, tileh);
  backgroundImages[2].resize(width, tileh);
  backgroundImages[3].resize(width, tileh);

  if(adder == gameh){
    adder = -tileh;
    r += 1;
  }

  if(r == 4){
    r = 0;
  }

  adder+=gamespeed;

}
  
//Boarders from player
function playerBoarders() {
  walls = new Group();

  wallTop = createSprite(0,250,gamew*2,0);
  wallTop.immovable = true;
  walls.add(wallTop);

  wallBottom = createSprite(0,gameh,gamew*2,0);
  wallBottom.immovable = true;
  walls.add(wallBottom);

  wallLeft = createSprite(50,0,0,gameh*2);
  wallLeft.immovable = true;
  walls.add(wallLeft);

  wallRight = createSprite(gamew-50,0,0,gameh*2);
  wallRight.immovable = true;
  walls.add(wallRight);
}

function enemyBoarders() {
  enemyWallTop = createSprite(0,-100,gamew*2,0);
  enemyWallTop.immovable = true;
  walls.add(enemyWallTop);

  enemyWallLeft = createSprite(50,0,0,gameh*2);
  enemyWallLeft.immovable = true;
  walls.add(enemyWallLeft);

  enemyWallRight = createSprite(gamew-50,0,0,gameh*2);
  enemyWallRight.immovable = true;
  walls.add(enemyWallRight);
}