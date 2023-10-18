function deathScreen(){
    fill(0, 0, 0)
    rect(0, 0, gamew, gameh)
    let b = image(explosionimg,-200,-50);
    explosionimg.resize(1250, 1000);

    strokeWeight(4);
    stroke(255, 255, 255);
    textSize(80);
    text('You Died!', 250, 100);

    strokeWeight(3);
    stroke(255, 255, 255);
    textSize(30);
    text("Recent Scores:",600,200)
    text(playerNameArray[tracker+4],600,250);
    text(playerScoreArray[tracker+4],700,250);

    text(playerNameArray[tracker+3],600,300);
    text(playerScoreArray[tracker+3],700,300);

    text(playerNameArray[tracker+2],600,350);
    text(playerScoreArray[tracker+2],700,350);

    text(playerNameArray[tracker+1],600,400);
    text(playerScoreArray[tracker+1],700,400);

    text(playerNameArray[tracker+0],600,450);
    text(playerScoreArray[tracker+0],700,450);

    text("Enter your name below:",100,375);

    deathButton.show();
    highScoreInput.show();
}

function continue1() {
    leaderboard();
    deathButton.hide();
    highScoreInput.hide();
    clearSprites();
    reset();
    currentState = MAIN_MENU;
    menuButton.show();
}

function clearSprites(){
    enemyTanks.removeSprites();
    bullets.removeSprites();
    enemyBullets.removeSprites();
    tankTurret.remove();
    tankBase.remove();
}

function leaderboard() {
    tracker += 1

    const name = highScoreInput.value();

    playerNameArray.push(name);
    playerScoreArray.push(round(score));
}