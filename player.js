function tankFunc(){
  tankBase = createSprite(tankx, tanky);
  tankBase.maxSpeed = 4;
  tankfowardimg.resize(200, 200)
  tankBase.addImage('normal', tankfowardimg);

  tankleftimg.resize(200, 200);
  tankrightimg.resize(200, 200);

  tankTurret = createSprite(tankx, tanky);
  tankTurret.maxSpeed = 4;
  turretimg.resize(250, 250);
  tankTurret.addImage('normal', turretimg);
  tankBase.setCollider('circle', 0, 0, 0);
}

function tankMovement() {
  tankBase.position.x = (tankTurret.position.x);
  tankBase.position.y = (tankTurret.position.y);

  if (keyIsDown('40')) tankTurret.position.y += 6; //down arrow  
  if (keyIsDown('38')) tankTurret.position.y -= 6; //up arrow
  if (keyIsDown('37')){ tankTurret.position.x -= 6; //left arrow
  } else {
    tankBase.changeAnimation('normal');
  }
  if (keyIsDown('39')){ tankTurret.position.x += 6; //right arrow 
  } 

  tankTurret.setCollider('circle', -5, -10, 45);
  tankTurret.bounce(wallTop);
  tankTurret.bounce(wallBottom);
  tankTurret.bounce(wallLeft);
  tankTurret.bounce(wallRight);


  if (keyWentUp(' ')) {
    bullet = createSprite(tankTurret.position.x-2, tankTurret.position.y-80);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10 + tankTurret.getSpeed(), 270);
    bullet.life = 80;
    bulletImage.resize(10, 8);
    bullets.add(bullet);
    gunsound.play();
  }
}