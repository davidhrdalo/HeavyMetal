function enemyTankFunc() {
    enemyTankImages[0].resize(75, 75);
    enemyTankImages[1].resize(75, 75);
    enemyTankImages[2].resize(75, 75);
    enemyTankImages[3].resize(75, 75);
    enemyTankImages[4].resize(100, 100);

    if(enemyTankC0 < 1){
        enemyTank0 = createSprite(data.ET0.SP0, -90);
        enemyTank0.attractionPoint(data.ET0.AP0,data.ET0.AP1,data.ET0.AP2);
        enemyTank0.addImage(enemyTankImages[0]);
        enemyTanks.add(enemyTank0);
        enemyTankC0 += 1;
    }

    if(enemyTankC1 < 1){
        enemyTank1 = createSprite(data.ET1.SP0, -90);
        enemyTank1.attractionPoint(data.ET1.AP0,data.ET1.AP1,data.ET1.AP2);
        enemyTank1.addImage(enemyTankImages[1]);
        enemyTanks.add(enemyTank1);
        enemyTankC1 += 1;
    }

    if(enemyTankC2 < 1){
        enemyTank2 = createSprite(data.ET2.SP0, -90);
        enemyTank2.attractionPoint(data.ET2.AP0,data.ET2.AP1,data.ET2.AP2);
        enemyTank2.addImage(enemyTankImages[2]);
        enemyTanks.add(enemyTank2);
        enemyTankC2 += 1;
    }

    if(enemyTankC3 < 1){
        enemyTank3 = createSprite(data.ET3.SP0, -90);
        enemyTank3.attractionPoint(data.ET3.AP0,data.ET3.AP1,data.ET3.AP2);
        enemyTank3.addImage(enemyTankImages[3]);
        enemyTanks.add(enemyTank3);
        enemyTankC3 += 1;
    }

    if(enemyTankC4 < 1){
        enemyTank4 = createSprite(data.ET4.SP0, -90);
        enemyTank4.attractionPoint(data.ET4.AP0,data.ET4.AP1,data.ET4.AP2);
        enemyTank4.addImage(enemyTankImages[4]);
        enemyTanks.add(enemyTank4);
        enemyTankC4 += 1;
    }

    if(bullets.overlap(enemyTank0)){
        enemyTank0.remove();
        enemyTankC0 -= 1;
        playerTankScore += 1;
    }

    if(bullets.overlap(enemyTank1)){
        enemyTank1.remove();
        enemyTankC1 -= 1;
        playerTankScore += 1;
    }

    if(bullets.overlap(enemyTank2)){
        enemyTank2.remove();
        enemyTankC2 -= 1;
        playerTankScore += 1;
    }

    if(bullets.overlap(enemyTank3)){
        enemyTank3.remove();
        enemyTankC3 -= 1;
        playerTankScore += 1;
    }

    if(bullets.overlap(enemyTank4)){
        enemyTank4.remove();
        enemyTankC4 -=1;
        playerTankScore += 1;
    }

    bulletImage.resize(15, 15);
    if(score > 30){
        if(bulletCount0 < 1){
            enemyBullet = createSprite(enemyTank0.position.x-2, enemyTank0.position.y-80);
            enemyBullet.addImage(bulletImage);
            enemyBullet.setSpeed(data.ET0.BS0 + enemyTank0.getSpeed(), 90);
            enemyBullets.add(enemyBullet);
            bulletCount0+=1;
        }
        if(bulletCount1 < 1){
            enemyBullet = createSprite(enemyTank1.position.x-2, enemyTank1.position.y-80);
            enemyBullet.addImage(bulletImage);
            enemyBullet.setSpeed(data.ET1.BS0 + enemyTank1.getSpeed(), 90);
            enemyBullets.add(enemyBullet);
            bulletCount1+=1;
        }
        if(bulletCount2 < 1){
            enemyBullet = createSprite(enemyTank2.position.x-2, enemyTank2.position.y-80);
            enemyBullet.addImage(bulletImage);
            enemyBullet.setSpeed(data.ET2.BS0 + enemyTank1.getSpeed(), 90);
            enemyBullets.add(enemyBullet);
            bulletCount2+=1;
        }
        if(bulletCount3 < 1){
            enemyBullet = createSprite(enemyTank3.position.x-2, enemyTank3.position.y-80);
            enemyBullet.addImage(bulletImage);
            enemyBullet.setSpeed(data.ET3.BS0 + enemyTank1.getSpeed(), 90);
            enemyBullets.add(enemyBullet);
            bulletCount3+=1;
        }
        if(bulletCount4 < 1){
            enemyBullet = createSprite(enemyTank4.position.x-2, enemyTank4.position.y-80);
            enemyBullet.addImage(bulletImage);
            enemyBullet.setSpeed(data.ET4.BS0 + enemyTank1.getSpeed(), 90);
            enemyBullets.add(enemyBullet);
            bulletCount4+=1;
        }
        if(enemyBullet.overlap(wallBottom)){
            enemyBullet.remove()
            bulletCount0 -=1;
            bulletCount1 -=1;
            bulletCount2 -=1;
            bulletCount3 -=1;
            bulletCount4 -=1;
        }
    }
    
    enemyTankC += 1;

    if(enemyBullets.overlap(tankTurret)){
        gameoversound.play();
        currentState = HIGH_SCORE;
    }

    if(tankTurret.overlap(enemyTanks)){
        gameoversound.play();
        currentState = HIGH_SCORE;
    }

    enemyTanks.bounce(enemyWallTop);
    enemyTanks.bounce(wallTop);
    enemyTanks.bounce(enemyWallLeft);
    enemyTanks.bounce(enemyWallRight);
    enemyTanks.bounce(enemyTanks);
}