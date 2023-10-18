function loadScreen() {
    if(gametime > 0 && gametime < 205){
        fill(0,0,0);
        noStroke();
        rect(0, 0, gamew, gameh);
        fill(255,255,255);
        textSize(32);
        text('Loading...', gamew/2-100, gameh/2);
    }

    if(gametime > 200 && gametime < 380){
        vid.play();
        let smokeimg = vid.get();
        smokeimgPlaying = image(smokeimg, 0, 0);
    }
}


function menuScreen(){
    music.play();
    music.loop=true;
    menuBackground.resize(gamew,gameh);
    image(menuBackground,0, 0);

    strokeWeight(4);
    stroke(255, 255, 255);
    textSize(80);
    text('Heavy Metal', 200, 100);

    strokeWeight(3);
    stroke(255, 255, 255);
    textSize(30);
    text('Use W A S D to move', 100, 600);
    text('Use the space bar to shoot', 100, 650);
    text('Last as long as possible to beat the high score!', 100, 700);

    text("Recent Scores:",600,200);
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
}

function menuButtonPressed(){
menusound.play();
menuButton.hide();
currentState = PLAY;
}


function gameScreen(){
backgroundImage();
gui();
tankMovement();
enemyTankFunc();
drawSprites();
}

function gui() {
strokeWeight(3);
stroke(255, 255, 255);
textSize(30);
score += 0.2;
textSize(32);
text("Score:", 30, 30);
text(round(score), 130, 30);
}