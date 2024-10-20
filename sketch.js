//game char variables
var gameChar_x;
var gameChar_y;
var scrollPos;
var gameChar_scroll_x;

//scene variables
var floorPos_y;
var alubarna;
var cactuss;
var leftcactuss;
var canyons;
var clouds;
var sun;
var rightdeserts;
var leftdeserts;
var collectables;
var leftcollectables;
var ship;

//movement variables
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var acceptInput;

//game variables
var game_score;
var lives;
var gameOver;

//sound variables
var jump_sound;
var coin_sound;
var lose_sound;
var fall_sound;
var win_sound;
var background_sound;
var dying_sound;
var punch_sound;
var enemy_sound;

//enemy variables
var crocodiles;
var particles = [];

//luffy variables
var punches = [];
var caught;

//platform variables
var platforms;
var isContact;

function preload()
{
    soundFormats("mp3");
    //sound effect for jumping
    jump_sound = loadSound("sound effects/jump.mp3");
    jump_sound.setVolume(0.1);
    //sound effect for picking up treasure
    coin_sound = loadSound("sound effects/coins.mp3");
    coin_sound.setVolume(0.1);
    //sound effect for losing
    lose_sound = loadSound("sound effects/gameover.mp3");
    lose_sound.setVolume(0.1);
    //sound effect for winning
    win_sound = loadSound("sound effects/gamewon.mp3");
    win_sound.setVolume(0.1);
    //sound effect for falling
    fall_sound = loadSound("sound effects/falling.mp3");
    fall_sound.setVolume(0.1);
    //background sound effect
    background_sound = loadSound("sound effects/desertwind.mp3");
    background_sound.setVolume(0.1);
    //dying sound effect
    dying_sound = loadSound("sound effects/dying.mp3");
    dying_sound.setVolume(0.1);
    //punching sound effect
    punch_sound = loadSound("sound effects/punch.mp3");
    punch_sound.setVolume(0.8);
    //enemy dying sound effect
    enemy_sound = loadSound("sound effects/enemy dying.mp3");
    enemy_sound.setVolume(0.5);
}


function setup()
{
    createCanvas(1024, 576);
    //initialise lives
    lives = 3;
    //initialise game over to false
    gameOver = false;
    //set acceptInput to true to allow keypressed
    acceptInput = true;
    //initialise starting variables
    initialise();
}

//default elements
function initialise()
{
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;

    alubarna = {x: 500, y: 256};
    sun = {x: 200, y: 100};
    sandPos_y = 432;

    //create random x pos and push the objects into the array for collectables on left side of canvas
    leftcollectables = [];
    for (var i = -3500; i < 0; i += 1600)
    {
        var collectablePos_x = i + random(-30,30);
        var collectable = {x: collectablePos_x, y: floorPos_y, isFound: false};
        leftcollectables.push(collectable);
    }

    //create random x pos and push the objects into the array for collectables on right side of canvas
    collectables = [];
    for(var i = 100; i < 4000; i += 1600)
    {
        var collectablePos_x = i + random(-30,30);
        var collectable = {x: collectablePos_x, y: floorPos_y, isFound: false};
        collectables.push(collectable);
    }

    //create random canyons pos and push them into array
    canyons = [];
    for(var i = -3000; i < 4000; i += 1000)
    {
        var canyonPos_x = i + random(-30,30);
        var canyon = {x: canyonPos_x, y: sandPos_y};
        canyons.push(canyon);
    }

    //create random x pos and push the objects into the array for cactus on the right side of canvas
    cactuss = [];
    for(var i = 800; i < 3000; i += 500)
    {
        var cactusPos_x = i + random(-30, 30);
        var cactus = {x: cactusPos_x, y: 346};
        cactuss.push(cactus);
    }

    //create random x pos and push the objects into the array for cactus on the left side of canvas
    leftcactuss = [];
    for(var i = -3000; i < - 100; i += 500)
    {
        var cactusPos_x = i + random(-30,30);
        var leftcactus = {x: cactusPos_x, y: 346};
        leftcactuss.push(leftcactus);
    }

    //create random x pos and push the objects into the array for clouds
    clouds = [];
    for(var i = 300; i < 3000; i += 600)
    {
        var cloudPos_x = i + random(-30,30);
        var cloud = {x: cloudPos_x, y: 100};
        clouds.push(cloud);
    }
    for(var i = -3000; i < -1000; i += 600)
    {
        var cloudPos_x = i + random(-30,30);
        var cloud = {x: cloudPos_x, y: 100};
        clouds.push(cloud);
    }

    //create random x pos and push the objects into the array for desert on the right side of canvas
    rightdeserts = [];
    for(var i = 2000; i < 4000; i += 1200)
    {
        var rightDesertPos_x = i + random(-30,30);
        var rightdesert = {x: rightDesertPos_x, y: 256};
        rightdeserts.push(rightdesert);
    }

    //create random x pos and push the objects into the array for desert on the left side of the canvas
    leftdeserts = [];
    for(var i = -3000; i < -400; i += 1200)
    {
        var leftDesertPos_x = i + random(-30,30);
        var leftdesert = {x: leftDesertPos_x, y: 256};
        leftdeserts.push(leftdesert);
    }
    
    //create random x position of enemy and push it into the function then array
    crocodiles = [];
    for(var i = -2000; i < 4000; i += 3500)
    {
        var crocodile_x = i + random(-500, 1500);
        crocodiles.push(new Crocodile(crocodile_x, floorPos_y));
    }
    
    //create random x pos and length for platforms, push it into the function then array
    platforms = [];
    for(var i = -2500; i < 4000; i += 2500)
    {
        var platform_x = i + random(-300, 300);
        platforms.push(new createPlatform(platform_x, floorPos_y - 100, random(200,400)));
    }

    //initialise scrollpos to 0 before char move out of canvas
    scrollPos = 0;
    //initialise game char scroll to game char x before char move out of cnavas
    gameChar_scroll_x = gameChar_x;

    //initialise movement before key are pressed
    isFalling = false;
    isPlummeting = false;
    isRight = false;
    isLeft = false;
    caught = false;
    
    //initalise game score to 0
    game_score = 0;
    
    //initialise ship properties
    ship = {x: 3800, y:floorPos_y, isReached: false};
}

function draw()
{
    background(255,165,0,100); //fill the sky orange

    //desert
    noStroke();
    fill(244,164,96,100);
    arc(width/2, height - 255, width + 100, 150, radians(180), radians(0));
    fill(244,164,96,200);
    rect(0, height - 255, width, 321);
    //end

    push();
    translate(scrollPos,0);

    //shadow on ground
    fill(0,0,0,50);
    quad(250, 432, width/2 + 300, height, width + 500, height, width + 200, floorPos_y);

    //draw alubarna
    drawAlubarna();

    //draw mountain
    drawMountain();
    
    //end point
    drawShip();

    //draw clouds
    for(var i = 0; i < clouds.length; i++)
    {
        drawCloud(clouds[i]);
    }

    //draw sun
    drawSun();

    //draw canyons
    for(var i = 0; i < canyons.length; i++)
    {
        drawCanyon(canyons[i]);
    }

    //draw desert on the right
    for (var i = 0; i < rightdeserts.length; i++)
    {
        drawRightDesert(rightdeserts[i]);
    }

    //draw desert on the left
    for (var i = 0; i < leftdeserts.length; i++)
    {
        drawLeftDesert(leftdeserts[i]);
    }

    //draw cactus on the right
    for(var i = 0; i < cactuss.length; i++)
    {
        drawCactus(cactuss[i]);
    }

    //draw cactus on the left
    for(var i = 0; i < leftcactuss.length; i++)
    {
        drawLeftCactus(leftcactuss[i]);
    }

    //draw collectables on the right
    for(var i = 0; i < collectables.length; i++)
    {
        drawCollectable(collectables[i]);
    }

    //draw collectables on the left
    for(var i = 0; i < leftcollectables.length; i++)
    {
        drawLeftCollectable(leftcollectables[i]);
    }
    
    //draw crocodile
    for(var i = 0; i < crocodiles.length; i++)
    {
        crocodiles[i].drawCrocodile();
    }
    
    //draw platforms
    for(var i = 0; i < platforms.length; i++)
    {
        platforms[i].drawPlatform();
    }

    pop();

    //one piece icon
    drawOnePieceIcon();
    
    //draw game score
    drawGameVariables();
    
    //draw life tokens
    drawVivreCard();
    
    //check if game is over
    if(gameOver == true)
    {
        drawGameOver();
        //set luffy to starting point
        gameChar_x = width/2;
        gameChar_y = height/2;
        luffyFacingFront();
        //return
        return;
    }

    //draw luffy
    //jumping left
    if(isLeft && isFalling)
    {
        luffyJumpingLeft();
    }
    //jumping right
    else if(isRight && isFalling)
    {
        luffyJumpingRight();
    }
    //walking left
    else if(isLeft)
    {
        luffyWalkingLeft();
    }
    //walking right
    else if(isRight)
    {
        luffyWalkingRight();
    }
    //jumping front
    else if(isFalling || isPlummeting)
    {
        luffyJumpingUp();
    }
    //standing front
    else
    {
        luffyFacingFront();
    }
    
    //update game char according to scrollpos
    gameChar_scroll_x = gameChar_x - scrollPos;

    //check if luffy is in canyon
    luffyFallingInCanyons();

    //check if luffy collect collectables on the right of canvas
    luffyCollectedRightCollectables();

    //check if luffy collected collectables in the left of the canvas
    luffyCollectedLeftCollectbles();
    
    //check if luffy has reached the ship
    ifLuffyReachShip();
    
    //all draw and update punch function
    drawAndUpdatePunch();
    
    //call check if luffy is near crocodile function
    checkIfLuffyIsNearCrocodile();

    //interaction code
    if(isPlummeting == true)
    {
        //falling
        gameChar_y += 10;
        //check for lives
        checkIfLuffyIsDead();
        //void key press while falling
        acceptInput = false;
        return;
    }
    
    //if luffy is near crocodile, he cant move
    if(caught == true)
    {
        acceptInput = false;
        return;
    }
    
    //allow keys to be pressed when not falling
    if(isPlummeting == false)
    {
        acceptInput = true;
    }
    
    if(gameChar_y < floorPos_y)
    {
        //check if luffy is on platform
        isContact = false;
        for(var i = 0; i < platforms.length; i++)
        {
            if(platforms[i].checkContact(gameChar_scroll_x, gameChar_y) == true)
            {
                isContact = true;
                break;
            }
        }
        //luffy is not on platform
        if(isContact == false)
        {
            gameChar_y += 2;
            isFalling = true;
        }
    }
    else 
    {
        isFalling = false;
    }
    
    //moving left
    if(isLeft)
    {  
        //check if luffy is moving out of canvas
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 3;
        }
        else 
        {
            //increment scroll pos
            scrollPos += 3;
        }
    }
    else if(isRight)
    {
        //check if luffy moving out of canvas on the right
        if(gameChar_x < width * 0.8)
        {
            gameChar_x += 3;
        }
        else
        {
            scrollPos -= 3;
        }
    }
}

//controls to move luffy
function keyPressed()
{
    //start background sound when key is pressed
    background_sound.loop();
    //game over
    if(gameOver == true)
    {
        return;
    }
    //control movement
    if(acceptInput == true)
    {
        if(keyCode == 65)
        {
            isLeft = true;
        }
        else if(keyCode == 68)
        {
            isRight = true;
        }
        else if(keyCode == 87)
        {
            if(gameChar_y >= floorPos_y)
            {
                gameChar_y -= 100;
                jump_sound.play();
            }
        }
        if(keyCode == 32)
        {
            punch_sound.play();
            var direction;
            var punch_pos = createVector(gameChar_x, gameChar_y - 50);
            if(isRight == true)
            {
                direction = 5;
            }
            if(isLeft == true)
            {
                direction = -5;
            }
            punches.push(new LuffyPunch(punch_pos, direction));
        }
    }
}

function keyReleased()
{
    //game over
    if(gameOver == true)
    {
        return;
    }
    if(keyCode == 65)
    {
        isLeft = false;
    }
    else if(keyCode == 68)
    {
        isRight = false;
    }
}

//draw game score
function drawGameVariables()
{
    fill(0);
    textSize(20);
    text("Score: " + game_score, 10, 30);
}

//draw gameover 
function drawGameOver()
{
    fill(0);
    textSize(100);
    text("Game Over", 250, height/2 - 100);
    
    //luffy wins the game
    if(lives > 0)
    {
        text("You win!", 300, height/2);
        //play victory sound and pause after a sec
        win_sound.play();
        win_sound.pause(1);
        background_sound.stop();
    }
    //luffy loses the game
    else
    {
        text("You lose!", 300, height/2);
        //play defeat sound and pause after a sec
        lose_sound.play();
        lose_sound.pause(1);
        background_sound.stop();
    }
}

//constructor function for enemy
function Crocodile(x, y)
{
    this.x = x;
    this.y = y;
    this.dead = false;
    
    this.drawCrocodile = function()
    {
        //draw crocodile if he is not dead
        if(this.dead == false)
        {
            //coat
            fill(0);
            quad(this.x - 11, this.y - 50, this.x + 11, this.y - 50, this.x + 20, this.y - 5, this.x - 20, this.y - 5);
            //neck
            fill(255, 229, 204);
            rect(this.x - 5, this.y - 60, 10, 10);
            //body
            noStroke();
            fill(85, 107, 47);
            rect(this.x - 11, this.y - 50, 22.5, 25);
            //tie
            fill(152, 251, 152);
            triangle(this.x - 6, this.y - 50, this.x + 6, this.y - 50, this.x, this.y - 40);
            //arms
            fill(255, 229, 204);
            ellipse(this.x - 17.5, this.y - 30, 5);
            fill(85, 107, 47);
            quad(this.x - 11, this.y - 50, this.x - 11, this.y - 38, this.x - 15, this.y - 30, this.x - 20, this.y - 30);
            quad(this.x + 11.3, this.y - 50, this.x + 11, this.y - 38, this.x + 15, this.y - 30, this.x + 20, this.y - 30);
            fill(218, 165, 32);
            triangle(this.x + 20, this.y - 32, this.x + 17, this.y - 15, this.x + 14, this.y - 32);
            arc(this.x + 17.5, this.y - 32, 8, 20, radians(0), radians(180));
            //hair
            fill(0);
            beginShape();
            vertex(this.x - 10, this.y - 65);
            vertex(this.x , this.y - 70)
            vertex(this.x + 10, this.y - 65);
            vertex(this.x + 12, this.y - 50);
            vertex(this.x, this.y - 60);
            vertex(this.x - 12, this.y - 50);
            endShape(close);
            //ear
            fill(255, 229, 204);
            arc(this.x + 9, this.y - 59, 5, 6, radians(270), radians(90));
            arc(this.x - 9, this.y - 59, 5, 6, radians(90), radians(270));
            //head
            fill(255, 229, 204);
            ellipse(this.x, this.y - 60, 20);
            //hair
            fill(0);
            arc(this.x, this.y - 65, 20, 10, radians(180), radians(0));
            //eyes
            fill(255);
            ellipse(this.x - 4, this.y - 62, 5, 1.5);
            ellipse(this.x + 4, this.y - 62, 5, 1.5);
            fill(0);
            ellipse(this.x - 4, this.y - 62, 1.5);
            ellipse(this.x + 4, this.y - 62, 1.5);
            //mouth
            fill(255, 182, 193);
            quad(this.x - 4, this.y - 57, this.x + 4, this.y - 57, this.x + 5, this.y - 53, this.x - 5, this.y - 53);
            fill(255);
            rect(this.x - 4.2, this.y - 57, 8.4, 1.5);
            rect(this.x - 5, this.y - 54, 10, 1);
            //nose
            stroke(0);
            strokeWeight(0.5);
            line(this.x - 0.5, this.y - 60, this.x - 0.5, this.y - 58);
            line(this.x + 0.5, this.y - 60, this.x + 0.5, this.y - 58);
            //cigarette
            fill(222, 184, 135);
            quad(this.x - 3, this.y - 55.5, this.x - 2, this.y - 55.5, this.x - 6, this.y - 48, this.x - 8, this.y - 49);
            //scar
            strokeWeight(0.3);
            line(this.x - 10, this.y - 59, this.x + 10, this.y - 59);
            //eyebrows
            strokeWeight(0.5);
            line(this.x - 7, this.y - 63, this.x - 2, this.y - 64);
            line(this.x + 7, this.y - 63, this.x + 2, this.y - 64);
            //leg
            noStroke();
            fill(128, 128, 0);
            quad(this.x - 11, this.y - 25, this.x, this.y - 25, this.x - 5, this.y, this.x - 13, this.y);
            quad(this.x + 11.5, this.y - 25, this.x, this.y - 25, this.x + 5, this.y, this.x + 13.5, this.y);
            //shoes
            fill(0);
            rect(this.x - 12, this.y, 6, 3);
            rect(this.x + 6, this.y, 6, 3);
        }
    }
    
    //create sand particles near crocodile and push it into particle function
    this.createParticlesAroundCrocodile = function()
    {
        for(var i = 0; i < 2; i++)
        {
            var x = (this.x + random(50, -50));
            particles.push(new Particle(x, random(height)));
        }
    }  
    
    //check if luffy is close to crocodile
    this.checkIfLuffyIsCloseToCrocodile = function()
    {
        if(this.dead == false && isContact == false)
        {
            //attack luffy if he is close and caught
            var d = dist(gameChar_scroll_x, gameChar_y, this.x, this.y);
            if(d < 125)
            {
                caught = true;
                for(var j = 0; j < particles.length; j++)
                {
                    particles[j].drawParticle();
                    particles[j].update();
                    particles[j].luffyDying();
                }
            }
        }
        //crocodile is dead
        if(this.dead == true)
        {
            //luffy is able to move
            caught = false;
            enemy_sound.play();
            enemy_sound.pause(1);
        }
    }
    
    //set this.dead to true when crocodile is dead
    this.crocodileIsDead = function()
    {
        this.dead = true;
    }
}